import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router doesn't scroll to #hash targets on navigation. Retries until
 * the target exists and the preloader's body scroll-lock has cleared, so
 * links like the nav's "AI" item work from any page, not just when already
 * on the section's page.
 */
export default function ScrollToHash() {
  const { hash, pathname, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);

    let raf = 0;
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
    raf = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(raf);
  }, [hash, pathname, key]);

  return null;
}
