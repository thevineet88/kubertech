"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next's router doesn't scroll to #hash targets on navigation. Retries until
 * the target exists and the preloader's body scroll-lock has cleared, so
 * links like the nav's "AI" item work from any page, not just when already
 * on the section's page.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;

    // App Router exposes no hash hook, so read it off window. Runs on route
    // change and on hashchange, which covers same-page jumps like "/#ai" where
    // pathname alone never changes.
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.slice(1);

      let attempts = 0;
      const MAX_ATTEMPTS = 180; // ~3s at 60fps

      const tryScroll = () => {
        attempts += 1;
        const bodyLocked = document.body.style.position === "fixed";
        const el = document.getElementById(id);
        if (!bodyLocked && el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (attempts < MAX_ATTEMPTS) raf = requestAnimationFrame(tryScroll);
      };

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tryScroll);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
