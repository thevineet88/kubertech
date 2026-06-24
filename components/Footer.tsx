import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-medium text-[#fafafa] mb-1">
              Kuber Tech Solutions
            </div>
            <p className="text-sm text-[#a3a3a3]">
              Fast, conversion-focused web products and the infrastructure behind them.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              {[
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs text-[#a3a3a3]">
            &copy; {new Date().getFullYear()} Kuber Tech Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[#a3a3a3]">
            <a
              href="mailto:hello@kubertech.example"
              className="hover:text-[#ccff00] transition-colors duration-150"
            >
              hello@kubertech.example
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
