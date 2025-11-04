import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? "https://sapoetronic.ca/api/contact";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
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

  const closeAndGoHome = () => {
    setStatus("idle");
    setForm({ name: "", email: "", message: "" });
    navigate("/");
  };

  // Allow closing with Escape
  useEffect(() => {
    if (status !== "sent") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAndGoHome();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  const fieldClasses =
    "w-full p-2 rounded border text-slate-300 placeholder-slate-500 " +
    "bg-slate-800/60 border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-slate-500";

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
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 bg-blue-600 text-slate-300 rounded disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {status === "error" && (
          <p className="text-red-400">Error sending message.</p>
        )}
      </form>

      {/* Success modal */}
      <AnimatePresence>
        {status === "sent" && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAndGoHome}
            />
            {/* Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-sm rounded-2xl bg-slate-800 border border-slate-700 shadow-xl p-6 text-center"
                initial={{ scale: 0.9, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 12 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                {/* Checkmark animation */}
                <motion.svg
                  viewBox="0 0 120 120"
                  className="mx-auto mb-4 w-20 h-20"
                >
                  <motion.circle
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
                  <motion.path
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
                </motion.svg>

                <h3 className="text-white text-xl font-semibold">
                  Message sent!
                </h3>
                <p className="text-slate-300 mt-1">
                  Thanks for reaching out. We&rsquo;ll get back to you soon.
                </p>

                <div className="mt-5">
                  <button
                    onClick={closeAndGoHome}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};