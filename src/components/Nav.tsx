import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { openBooking } from "../booking";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All services", href: "/services" },
      { label: "Remote engineering (India)", href: "/remote-engineering-india" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  { label: "AI", href: "#ai" },
  { label: "Work", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const isInternalRoute = (href: string) => href.startsWith("/");

function NavLink({ label, href }: NavChild) {
  if (href === "#booking") {
    return (
      <button
        type="button"
        onClick={openBooking}
        className="text-[14px] text-white/85 hover:text-white transition-colors duration-300"
      >
        {label}
      </button>
    );
  }

  return isInternalRoute(href) ? (
    <Link
      to={href}
      className="text-[14px] text-white/85 hover:text-white transition-colors duration-300"
    >
      {label}
    </Link>
  ) : (
    <a
      href={href}
      className="text-[14px] text-white/85 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) setOpenMobileGroup(null);
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openNow = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 w-full"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
          <nav
            className={`rounded-full px-[5px] py-[5px] flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
            }`}
          >
            {/* Left: logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5 shrink-0"
              aria-label="Kuber Tech Solutions, back to top"
            >
              <span className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 overflow-hidden rounded-full">
                <img
                  src="/kuber_icon.png"
                  alt="Kuber Tech Solutions"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="hidden md:inline text-[15px] font-semibold tracking-tight text-white">
                Kuber Tech Solutions
              </span>
            </a>

            {/* Right: spread nav links */}
            <ul className="hidden md:flex items-center gap-10 lg:gap-14 pr-3">
              {navLinks.map(({ label, href, children }, i) => (
                <motion.li
                  key={label}
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  onMouseEnter={() => children && openNow(label)}
                  onMouseLeave={() => children && closeSoon()}
                >
                  {children ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center gap-1 text-[14px] text-white/85 hover:text-white transition-colors duration-300"
                        aria-expanded={openDropdown === label}
                        onClick={() =>
                          setOpenDropdown(openDropdown === label ? null : label)
                        }
                      >
                        <span>{label}</span>
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            openDropdown === label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === label && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-3 w-56 bg-[#0A0A0B] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 py-2 z-50"
                          >
                            {children.map((c) => (
                              <Link
                                key={c.href}
                                to={c.href}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2.5 text-[13.5px] text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink label={label} href={href} />
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex items-center gap-2 bg-transparent border border-white/25 text-white text-[13px] font-medium rounded-full px-4 py-2 mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
              <span>{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </nav>
        </div>
      </motion.div>

      {/* Mobile menu, portaled to body so its z-50 escapes the hero stacking context */}
      {createPortal(
        <>
          <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 md:hidden mx-3 mb-3 max-h-[85vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 space-y-6">
              <ul className="space-y-4">
                {navLinks.map(({ label, href, children }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    {children ? (
                      <div>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between text-[28px] font-medium text-white leading-[32px]"
                          onClick={() =>
                            setOpenMobileGroup(
                              openMobileGroup === label ? null : label,
                            )
                          }
                        >
                          {label}
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 ${
                              openMobileGroup === label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileGroup === label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 pl-1 space-y-3">
                                {children.map((c) => (
                                  <Link
                                    key={c.href}
                                    to={c.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-[16px] text-white/60 hover:text-white transition-colors"
                                  >
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : href === "#booking" ? (
                      <button
                        type="button"
                        className="text-[28px] font-medium text-white leading-[32px] hover:text-white/60 transition-colors"
                        onClick={() => {
                          setMenuOpen(false);
                          openBooking();
                        }}
                      >
                        {label}
                      </button>
                    ) : isInternalRoute(href) ? (
                      <Link
                        to={href}
                        className="text-[28px] font-medium text-white leading-[32px] hover:text-white/60 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="text-[28px] font-medium text-white leading-[32px] hover:text-white/60 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  openBooking();
                }}
                className="group flex items-center gap-2 bg-[#8B5CF6] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 w-full justify-between"
              >
                <span>Book a 30-minute call</span>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={12} className="text-[#8B5CF6]" />
                </div>
              </a>
            </div>
          </motion.div>
        )}
          </AnimatePresence>
        </>,
        document.body,
      )}
    </>
  );
}
