/**
 * Shared layout primitives. Kept as literal strings so Tailwind's content
 * scanner still sees the class names.
 */

export const CONTAINER_WIDTH = "max-w-[1440px]";

/** Standard page gutter used by nearly every section. */
export const CONTAINER = "max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12";

/** Back-link styling shared by the case-study pages. */
export const BACK_LINK_CLASS =
  "inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] transition-colors duration-200";

/** Back-link styling on pages that sit on the lighter surface. */
export const BACK_LINK_MUTED_CLASS =
  "inline-flex items-center gap-2 text-[color:var(--color-text-subtle)] hover:text-white text-[14px] transition-colors duration-200";
