"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

/**
 * ContactForm – the "Let's Talk" form used on the homepage and contact page.
 *
 * Submissions are delivered by FormSubmit (formsubmit.co) straight to the
 * site inbox — the first submission after each new deploy domain triggers a
 * one-time activation email that must be confirmed before delivery starts.
 */
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/Abiodunprosper07@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      data.append("_subject", "New portfolio contact message");
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-heading placeholder:text-base focus:border-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-2 block text-base">
          Full Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-base">
          Email Address
        </label>
        <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-base">
          Phone Number
        </label>
        <input id="phone" name="phone" type="text" placeholder="+234 800 000 0000" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-base">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required placeholder="Subject" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="mb-2 block text-base">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required placeholder="Tell me about your project" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="theme-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"} <i className="far fa-angle-right" />
        </button>
        {status === "success" && (
          <p className="mt-4 text-primary">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500">
            Something went wrong — please email me directly at Abiodunprosper07@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
}
