import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, -parseInt(scrollY || "0", 10));
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <style>{`
            @keyframes kt-logoPop {
              0% { opacity: 0; transform: scale(0.88); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes kt-shineSweep {
              0% { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(160%) skewX(-20deg); opacity: 0; }
            }
            @keyframes kt-twinkle {
              0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
              50% { opacity: 1; transform: scale(1) rotate(20deg); }
            }
            @keyframes kt-shadowFade {
              0% { opacity: 0; transform: translateX(-50%) scaleX(0.8); }
              100% { opacity: 1; transform: translateX(-50%) scaleX(1); }
            }

            .kt-stage {
              position: relative;
              width: 180px;
            }
            @media (min-width: 640px) {
              .kt-stage { width: 220px; }
            }
            .kt-logo-card {
              position: relative;
              overflow: hidden;
              opacity: 0;
              animation: kt-logoPop 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s forwards;
            }
            .kt-logo-img {
              display: block;
              width: 100%;
              height: auto;
            }
            .kt-shine {
              position: absolute;
              top: -20%;
              left: 0;
              width: 35%;
              height: 140%;
              background: linear-gradient(
                100deg,
                transparent 0%,
                rgba(255, 255, 255, 0.75) 50%,
                transparent 100%
              );
              mix-blend-mode: overlay;
              opacity: 0;
              animation: kt-shineSweep 0.8s ease-in-out 0.5s forwards;
              pointer-events: none;
            }
            .kt-shadow {
              position: absolute;
              left: 50%;
              bottom: -10px;
              width: 55%;
              height: 14px;
              background: radial-gradient(ellipse at center, rgba(12, 12, 12, 0.14), transparent 72%);
              filter: blur(3px);
              opacity: 0;
              animation: kt-shadowFade 0.5s ease-out 0.15s forwards;
            }
            .kt-sparkle {
              position: absolute;
              color: #8B5CF6;
              opacity: 0;
              pointer-events: none;
              animation: kt-twinkle 1.9s ease-in-out infinite;
            }
            .kt-sparkle-1 { top: 2%; left: -4%; font-size: 14px; animation-delay: 0.4s; }
            .kt-sparkle-2 { bottom: 10%; right: -6%; font-size: 11px; animation-delay: 0.6s; }
            .kt-sparkle-3 { top: 40%; right: -8%; font-size: 8px; animation-delay: 0.8s; }
          `}</style>

          <div className="kt-stage">
            <div className="kt-logo-card">
              <picture>
                <source srcSet="/logos/KuberTechLogo-mark.webp" type="image/webp" />
                <img
                  src="/logos/KuberTechLogo-mark.png"
                  alt="Kuber Tech Solutions"
                  className="kt-logo-img"
                  width={640}
                  height={473}
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <div className="kt-shine" />
            </div>
            <div className="kt-shadow" />
            <span className="kt-sparkle kt-sparkle-1" aria-hidden="true">✦</span>
            <span className="kt-sparkle kt-sparkle-2" aria-hidden="true">✦</span>
            <span className="kt-sparkle kt-sparkle-3" aria-hidden="true">✦</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
