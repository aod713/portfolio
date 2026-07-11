"use client";

/**
 * NewsletterForm – the footer email signup. Kept as its own client component
 * because it owns an onSubmit handler (server components cannot have event
 * handlers). Wire the handler to your mailing-list provider when ready.
 */
export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex max-w-md items-center border-b border-line"
    >
      <label htmlFor="footer-email" className="pr-3 text-base">
        <i className="far fa-envelope" />
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Email Address"
        required
        className="flex-1 bg-transparent py-3 text-heading placeholder:text-base focus:outline-none"
      />
      <button type="submit" className="text-heading hover:text-primary">
        Sign Up <i className="far fa-angle-right" />
      </button>
    </form>
  );
}
