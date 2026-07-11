"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "success";

/**
 * ContactForm – the "Let's Talk" form used on the homepage and contact page.
 *
 * It is a controlled React form. On submit we prevent the default browser
 * navigation, show a success message and reset the fields. To make it send
 * real email, replace the body of `handleSubmit` with a fetch() to a Next.js
 * Route Handler (see /docs in the README).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST the form data to your API route here.
    setStatus("success");
    event.currentTarget.reset();
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-heading placeholder:text-base focus:border-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-2 block text-base">
          Full Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Richard D. Hammond" className={fieldClass} />
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
        <input id="phone" name="phone" type="text" required placeholder="+880 (123) 456 88" className={fieldClass} />
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
        <textarea id="message" name="message" rows={4} required placeholder="write message" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="theme-btn">
          Send Us Message <i className="far fa-angle-right" />
        </button>
        {status === "success" && (
          <p className="mt-4 text-primary">Thanks! Your message has been sent.</p>
        )}
      </div>
    </form>
  );
}
