"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useModal } from "@/lib/useModal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal() {
  const { isOpen, close } = useModal();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", twitter: "", product: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Trap focus & close on Escape
  useEffect(() => {
    if (!isOpen) return;
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Tell us about your campaign";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    close();
    // Reset after exit animation
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", twitter: "", product: "", message: "" });
      setErrors({});
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-fg/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            aria-hidden
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Start a campaign"
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

              {/* Top accent bar */}
              <div className="h-1 bg-accent w-full" />

              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-fg/[0.06] sticky top-0 bg-white z-10">
                <div>
                  <h2 className="font-black text-lg tracking-[-0.02em] text-fg">
                    Start a campaign
                  </h2>
                  <p className="text-muted text-xs mt-0.5 font-light">
                    We&apos;ll reply within 24 hours.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-fg hover:bg-fg/5 transition-colors duration-200 flex-shrink-0 mt-0.5"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle size={28} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-black text-base text-fg mb-1">You&apos;re in.</p>
                      <p className="text-muted text-sm font-light">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-xs text-muted hover:text-fg transition-colors mt-2"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Name"
                        error={errors.name}
                        required
                      >
                        <input
                          ref={firstInputRef}
                          type="text"
                          placeholder="Alex Chen"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass(!!errors.name)}
                        />
                      </Field>

                      <Field label="Email" error={errors.email} required>
                        <input
                          type="email"
                          placeholder="alex@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass(!!errors.email)}
                        />
                      </Field>
                    </div>

                    {/* Twitter Handle + Product URL row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Twitter / X Handle" hint="optional">
                        <input
                          type="text"
                          placeholder="@alexchen"
                          value={form.twitter}
                          onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                          className={inputClass(false)}
                        />
                      </Field>

                      <Field label="Product / URL" hint="optional">
                        <input
                          type="url"
                          placeholder="https://yourproduct.com"
                          value={form.product}
                          onChange={(e) => setForm({ ...form, product: e.target.value })}
                          className={inputClass(false)}
                        />
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Tell us about your campaign" error={errors.message} required>
                      <textarea
                        rows={3}
                        placeholder="What are you building? Who's the audience? What kind of campaign are you thinking?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass(!!errors.message)} resize-none`}
                      />
                    </Field>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 text-xs bg-red-50 px-3 py-2.5 rounded-lg">
                        <AlertCircle size={13} />
                        Something went wrong. Try emailing us at hello@audanweb.xyz
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full flex items-center justify-center gap-2.5 bg-accent text-white font-bold text-sm rounded-full py-3.5 hover:bg-fg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/20 mt-1"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-muted/50">
                      No spam. No cold outreach. Just a reply from our team.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Input class helper
function inputClass(hasError: boolean) {
  return `w-full rounded-xl border text-sm px-3.5 py-2.5 outline-none transition-colors duration-200 bg-fg/[0.02] placeholder:text-muted/40 text-fg font-medium focus:border-accent focus:bg-white ${
    hasError ? "border-red-300 bg-red-50/30" : "border-fg/[0.1] hover:border-fg/20"
  }`;
}

// Field wrapper
function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold text-fg/70 tracking-wide flex items-center gap-1.5">
        {label}
        {required && <span className="text-accent">*</span>}
        {hint && <span className="text-muted/50 font-normal">({hint})</span>}
      </label>
      {children}
      {error && (
        <p className="text-[10px] text-red-500 font-medium flex items-center gap-1">
          <AlertCircle size={10} />
          {error}
        </p>
      )}
    </div>
  );
}
