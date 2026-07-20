import type { Faq } from "../lib/schema";

/**
 * Native <details> accordion, deliberately not a useState component:
 *  - no client JS, so the pages using it stay server components
 *  - keyboard and screen reader accessible without any ARIA wiring
 *  - collapsed answers remain in the DOM, so crawlers and AI engines can read
 *    them. A JS accordion that unmounts closed panels would hide exactly the
 *    content this section exists to surface.
 */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[15px] font-medium leading-[1.5] text-[#FAFAFA] transition-colors duration-200 hover:text-white [&::-webkit-details-marker]:hidden sm:text-[16px]">
            <span>{f.q}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-180"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <p className="pb-6 pr-10 text-[14px] leading-[1.7] text-white/55 sm:text-[15px]">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
