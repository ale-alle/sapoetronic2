export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const data = await request.json();

    // Prepare the Resend API request
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
        attachments: data.attachments // Should be an array of objects as per Resend API
      })
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  }
};
