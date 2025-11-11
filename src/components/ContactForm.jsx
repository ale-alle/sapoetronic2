import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? "https://sapoetronic.ca/api/contact";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "sent" | "error"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error sending message");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const closeAndReset = () => {
    setStatus("idle");
    setForm({ name: "", email: "", message: "" });
  };

  // Allow closing with Escape
  useEffect(() => {
    if (status !== "sent") return;
    const onKey = (e) => {
      if (e.key === "Escape") closeAndReset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  const fieldClasses =
    "w-full p-2 rounded border text-[#002901] placeholder-[#6BA548] " +
    "border-dark-green focus:outline-none focus:ring-3 focus:ring-[#6BA548] focus:border-green";

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
        <input
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          required
          className={fieldClasses}
          value={form.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          onChange={handleChange}
          required
          className={fieldClasses}
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          required
          className={fieldClasses}
          rows={4}
          value={form.message}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 bg-[#6BA548] text-white rounded disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-400">Error sending message.</p>
        )}
      </form>

      {/* Success modal */}
      <AnimatePresence>
        {status === "sent" && (
          <>
            {/* Backdrop */}
            <m.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAndReset}
            />
            {/* Modal */}
            <m.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <m.div
                className="w-full max-w-sm rounded-2xl bg-slate-800 border border-slate-700 shadow-xl p-6 text-center"
                initial={{ scale: 0.9, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 12 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                {/* Checkmark animation */}
                <m.svg
                  viewBox="0 0 120 120"
                  className="mx-auto mb-4 w-20 h-20"
                >
                  <m.circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="8"
                    initial={{ pathLength: 0, opacity: 0.6 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <m.path
                    d="M38 62 L54 78 L84 46"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  />
                </m.svg>

                <h3 className="text-white text-xl font-semibold">
                  Message sent!
                </h3>
                <p className="text-slate-300 mt-1">
                  Thanks for reaching out. We&rsquo;ll get back to you soon.
                </p>

                <div className="mt-5">
                  <button
                    onClick={closeAndReset}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;