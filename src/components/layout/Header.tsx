"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav, routes, siteInfo, type NavItem } from "@/lib/site";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { Sidebar } from "./Sidebar";

/** A single desktop nav entry – either a link or a hover dropdown. */
function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li className="px-4 py-6">
        <Link
          href={item.href ?? "#"}
          className="font-heading font-medium capitalize text-heading hover:text-primary"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative px-4 py-6">
      <span className="flex cursor-pointer items-center gap-2 font-heading font-medium capitalize text-heading group-hover:text-primary">
        {item.label}
        <i className="fas fa-chevron-down text-[10px]" />
      </span>
      {/* Dropdown – revealed on hover via Tailwind group-hover */}
      <ul className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-lg bg-lighter py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((child) => (
          <li key={child.label}>
            <Link
              href={child.href}
              className="block px-5 py-2 capitalize text-base hover:text-primary"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/** A single mobile nav entry – dropdowns expand on tap. */
function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li className="border-t border-line">
        <Link
          href={item.href ?? "#"}
          onClick={onNavigate}
          className="block px-4 py-3 capitalize text-heading hover:text-primary"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 capitalize text-heading"
        aria-expanded={open}
      >
        {item.label}
        <i className={`fas fa-chevron-down text-xs transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="bg-body/40 pb-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block px-8 py-2 capitalize text-base hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Header – the sticky top navigation used on every page.
 *
 * Behaviour reproduced from the previous implementation:
 *  - becomes a fixed bar with a solid background after scrolling (useStickyHeader)
 *  - desktop dropdowns open on hover, mobile dropdowns open on tap
 *  - the toggler button opens the slide-in Sidebar
 */
export function Header() {
  const stuck = useStickyHeader(100);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header
      className={`left-0 top-0 z-[999] w-full transition-all duration-500 ${
        stuck ? "fixed animate-fadeInDown bg-lighter shadow-[0_0_30px_rgba(96,165,250,0.1)]" : "absolute bg-transparent"
      }`}F
    >
      <div className="mx-auto flex max-w-container-wide items-center px-[25px] xl:px-[55px]">
        {/* Logo */}
        <div className="flex-none py-4">
          <Link href={routes.home}>
            <Image
              src={siteInfo.logo}
              alt={siteInfo.name}
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="mx-auto hidden lg:block">
          <ul className="flex items-center">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Right-side controls */}
        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          {/* Sidebar toggle */}
          <button
            type="button"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
            className="hidden lg:block"
          >
            <Image
              src="/assets/images/shape/sidebar-tottler.svg"
              alt="Toggle sidebar"
              width={30}
              height={20}
            />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 lg:hidden"
          >
            <span className="block h-[2px] w-6 bg-heading" />
            <span className="block h-[2px] w-6 bg-heading" />
            <span className="block h-[2px] w-6 bg-heading" />
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <nav className="absolute left-0 top-full w-full bg-lighter py-2 lg:hidden">
          <ul>
            {mainNav.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </ul>
        </nav>
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
