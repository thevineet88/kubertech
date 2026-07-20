"use client";

import Link from "next/link";
import { openBooking } from "../booking";
import ScrollReveal from "./ScrollReveal";

const productLinks = [
  { label: "Services", href: "/services" },
  { label: "AI engineering", href: "/services" },
  { label: "Remote engineering", href: "/remote-engineering-india" },
  { label: "Case studies", href: "/case-studies" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kubertechsolutions/" },
  { label: "GitHub", href: "https://github.com/thevineet88" },
];

const helpLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Book a call", action: openBooking },
];

type FooterLink = {
  label: string;
  href?: string;
  action?: () => void;
};

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/30">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.action ? (
              <button
                type="button"
                onClick={link.action}
                className="text-left text-[11px] uppercase tracking-[0.18em] text-[#E4E4E7] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </button>
            ) : link.href?.startsWith("/") ? (
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.18em] text-[#E4E4E7] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] uppercase tracking-[0.18em] text-[#E4E4E7] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#050506]/55"
      />
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8" y={20}>
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Help" links={helpLinks} />
        </ScrollReveal>

        <ScrollReveal
          className="mt-16 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:mt-20"
          delay={0.1}
          y={12}
        >
          <p>&copy; {new Date().getFullYear()} Kuber Tech Solutions | All rights reserved</p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
