import { useEffect, useRef, useState, type ElementType } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@";

interface ScrambleTextProps {
  text: string;
  /** Wrapper element, defaults to span */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds before the decode starts once in view */
  delay?: number;
  /** Total decode duration in seconds */
  duration?: number;
}

/**
 * Decode-style headline reveal: characters cycle through random glyphs and
 * lock into place left to right when the element scrolls into view.
 * The real text lives in an sr-only span so screen readers and crawlers
 * never see the scrambled frames.
 */
export default function ScrambleText({
  text,
  as: Tag = "span",
  className,
  style,
  delay = 0,
  duration = 0.9,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let startTime: number | null = null;
    const delayMs = delay * 1000;
    const durationMs = duration * 1000;

    const frame = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - delayMs;
      if (elapsed < 0) {
        raf = requestAnimationFrame(frame);
        return;
      }
      const progress = Math.min(elapsed / durationMs, 1);
      // Characters lock in left to right, trailing ones keep cycling
      const lockedCount = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < lockedCount || ch === " " || progress === 1) {
          out += ch;
        } else {
          out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [started, text, delay, duration]);

  return (
    <Tag ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{started ? display : text}</span>
    </Tag>
  );
}
