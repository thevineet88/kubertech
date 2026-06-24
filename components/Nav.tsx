"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-medium text-[#fafafa] tracking-tight hover:text-[#ccff00] transition-colors duration-150"
        >
          Kuber Tech Solutions
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors duration-150 ${
                  pathname.startsWith(href)
                    ? "text-[#fafafa]"
                    : "text-[#a3a3a3] hover:text-[#fafafa]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium px-4 py-2 bg-[#ccff00] text-[#1a2200] rounded hover:bg-[#d9ff33] transition-colors duration-150"
            >
              Start a project
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#a3a3a3] hover:text-[#fafafa] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#262626] bg-[#0a0a0a]">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-sm text-[#a3a3a3] hover:text-[#fafafa] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block text-sm font-medium px-4 py-2 bg-[#ccff00] text-[#1a2200] rounded hover:bg-[#d9ff33] transition-colors"
                onClick={() => setOpen(false)}
              >
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
