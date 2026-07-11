"use client";

import { siteInfo } from "@/lib/site";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Sidebar – the slide-in "Get Appointment" panel (the design's sidebar).
 * Controlled by the Header: `open` toggles it, `onClose` closes it (via the
 * cross icon or the dimmed backdrop).
 */
export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[1000] bg-black/70 transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[1001] h-full w-[400px] max-w-[90vw] overflow-y-auto bg-lighter px-10 py-12 text-center transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute right-6 top-6 text-xl text-heading hover:text-primary"
        >
          <i className="fa fa-times" />
        </button>

        <h4 className="mb-8 mt-6">Get Appointment</h4>

        {/* Appointment form. onSubmit is stubbed – wire it to your API/route. */}
        <form
          className="space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border-b border-line bg-transparent py-3 text-heading placeholder:text-base focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border-b border-line bg-transparent py-3 text-heading placeholder:text-base focus:border-primary"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border-b border-line bg-transparent py-3 text-heading placeholder:text-base focus:border-primary"
          />
          <button type="submit" className="theme-btn w-full">
            Submit now
          </button>
        </form>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-4">
          {siteInfo.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-base hover:text-primary"
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
