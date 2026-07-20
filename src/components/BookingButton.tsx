"use client";

import { ArrowRight } from "lucide-react";
import { openBooking } from "../booking";

/**
 * Pill CTA that opens the booking modal. Isolated as a client component so the
 * pages embedding it can stay server-rendered.
 */
export default function BookingButton({
  label = "Book a free 30-min call",
}: {
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={openBooking}
      className="group inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-blue)] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
    >
      <span>{label}</span>
      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
        <ArrowRight
          size={12}
          className="text-[color:var(--color-accent)] transition-transform duration-500 group-hover:-rotate-45"
          style={{
            transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
          }}
        />
      </div>
    </button>
  );
}
