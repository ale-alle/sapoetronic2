const allowedOrigins = new Set([
	"http://localhost:5173",
	"https://sapoetronic.com",
	"https://www.sapoetronic.com",
]);

function isPreflight(req) {
	return req.method === "OPTIONS" && req.headers.has("Origin") && req.headers.has("Access-Control-Request-Method");
}
function corsHeaders(origin, req) {
	const requested = req.headers.get("Access-Control-Request-Headers") ?? "content-type";
	const headers = {
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": requested,
		"Access-Control-Max-Age": "86400",
		Vary: "Origin",
	};
	if (origin && allowedOrigins.has(origin)) headers["Access-Control-Allow-Origin"] = origin;
	return headers;
}
function withCors(req, res) {
	const origin = req.headers.get("Origin");
	const h = new Headers(res.headers);
	for (const [k, v] of Object.entries(corsHeaders(origin, req))) h.set(k, v);
	return new Response(res.body, { ...res, headers: h });
}
const escapeHtml = (s) => (s || "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname !== "/api/contact") {
			return new Response("Not Found", { status: 404 });
		}

		// CORS preflight (for localhost dev)
		if (isPreflight(request)) {
			const origin = request.headers.get("Origin");
			return new Response(null, { status: 204, headers: corsHeaders(origin, request) });
		}
		if (request.method !== "POST") {
			return withCors(request, new Response("Method Not Allowed", { status: 405 }));
		}

		// Parse and validate
		let json = null;
		try {
			json = await request.json();
		} catch { }
		const name = (json?.name || "").trim();
		const email = (json?.email || "").trim();
		const message = (json?.message || "").trim();
		if (!name || !email || !message) {
			return withCors(
				request,
				new Response(JSON.stringify({ ok: false, error: "Invalid payload" }), {
					status: 400,
					headers: { "Content-Type": "application/json" },
				}),
			);
		}

		// Build email payload for Resend (use your verified subdomain for From)
		const payload = {
			from: "Sapoetronic Notifications <notifications@mail.sapoetronic.com>",
			to: ["rodolfo@sapoetronic.com"],
			subject: `New message from ${name}`,
			reply_to: email, // lets you reply directly to the sender
			html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
		};

		const r = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		const data = await r.json().catch(() => null);
		if (!r.ok) {
			return withCors(
				request,
				new Response(JSON.stringify({ ok: false, status: r.status, error: "Failed to send via Resend" }), {
					status: 502,
					headers: { "Content-Type": "application/json" },
				}),
			);
		}

		return withCors(
			request,
			new Response(JSON.stringify({ ok: true, id: data?.id }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			}),
		);
	},
};
