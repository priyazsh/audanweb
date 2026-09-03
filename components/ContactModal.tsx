"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useModal } from "@/lib/useModal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal() {
  const { isOpen, close } = useModal();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    twitter: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
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
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            aria-hidden
          />

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
            <div className="relative bg-white w-full sm:max-w-lg rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-100">
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div>
                  <h2 className="font-heading font-semibold text-lg tracking-tight text-ink">
                    Start a campaign
                  </h2>
                  <p className="text-gray-500 text-sm mt-0.5">
                    We&apos;ll reply within 24 hours.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-ink hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-5">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-base text-ink mb-1">
                        You&apos;re in.
                      </p>
                      <p className="text-gray-500 text-sm">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-sm text-gray-500 hover:text-ink transition-colors mt-2"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Name" error={errors.name} required>
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

                    <Field
                      label="Tell us about your campaign"
                      error={errors.message}
                      required
                    >
                      <textarea
                        rows={3}
                        placeholder="What are you building? Who's the audience? What kind of campaign are you thinking?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass(!!errors.message)} resize-none`}
                      />
                    </Field>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 px-3 py-2.5 rounded-xl">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        Something went wrong. Try emailing us at hello@audanweb.xyz
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2.5 bg-brand text-white rounded-full py-3.5 hover:bg-brand-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg mt-1"
                    >
                      {status === "loading" ? "Sending…" : (
                        <>
                          Send inquiry
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
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

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border text-sm px-3.5 py-2.5 outline-none transition-colors duration-200 bg-gray-50 placeholder:text-gray-400 text-ink font-medium focus:border-brand focus:bg-white ${
    hasError ? "border-red-300 bg-red-50/30" : "border-gray-200 hover:border-gray-300"
  }`;
}

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
      <label className="text-xs font-semibold text-gray-600 tracking-wide flex items-center gap-1.5">
        {label}
        {required && <span className="text-ink">*</span>}
        {hint && <span className="text-gray-400 font-normal">({hint})</span>}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-500 font-medium">{error}</p>}
    </div>
  );
}
