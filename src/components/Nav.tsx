import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { ArrowRight, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function update() {
      const t = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(t);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const localTime = useLocalTime();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.div
        className="relative z-20 w-full"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
          <nav className="bg-white rounded-full px-[5px] py-[5px] flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-6">
              <a
                href="#top"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 overflow-hidden rounded-l-full"
                aria-label="Kuber Tech Solutions, back to top"
              >
                <img
                  src="/logos/KuberTechLogo.png"
                  alt="Kuber Tech Solutions"
                  className="w-full h-full object-cover rounded-l-full"
                />
              </a>
              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  >
                    <a
                      href={href}
                      className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-4 pr-1">
              <motion.div
                className="flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Clock size={14} className="text-gray-600" />
                <span className="text-[13px] text-gray-600">{localTime}</span>
              </motion.div>
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="overflow-hidden h-[20px]">
                  <div
                    className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                  >
                    <span className="h-[20px] flex items-center">
                      Book a strategy call
                    </span>
                    <span className="h-[20px] flex items-center">
                      Book a strategy call
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight
                    size={12}
                    className="text-gray-900 transition-transform duration-500 group-hover:-rotate-45"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                  />
                </div>
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium rounded-full px-4 py-2 mr-1"
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
            className="fixed inset-x-0 bottom-0 z-50 md:hidden mx-3 mb-3"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="bg-white rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                <Clock size={13} />
                <span>{localTime} IST</span>
              </div>
              <ul className="space-y-4">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={href}
                      className="text-[28px] font-medium text-gray-900 leading-[32px] hover:text-gray-500 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 bg-[#F26522] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 w-full justify-between"
              >
                <span>Start a project</span>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={12} className="text-[#F26522]" />
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
