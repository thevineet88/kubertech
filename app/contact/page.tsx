import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or ask a question. We respond quickly.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          Start a project
        </h1>
        <p className="text-[#a3a3a3] text-lg leading-relaxed mb-12">
          Tell us what you are trying to build or fix. We scope it properly before
          quoting, and we move quickly.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-16">
        {/* Form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        {/* Direct contact */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-sm font-medium text-[#fafafa] mb-3">Email</h2>
            <a
              href="mailto:hello@kubertech.example"
              className="text-sm text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-150"
            >
              hello@kubertech.example
            </a>
            <p className="text-xs text-[#a3a3a3] mt-1">
              [ Placeholder: swap for your real studio address ]
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-[#fafafa] mb-3">Elsewhere</h2>
            <p className="text-sm text-[#a3a3a3]">
              [ Company LinkedIn URL: placeholder ]
            </p>
            <p className="text-sm text-[#a3a3a3] mt-1">
              [ GitHub URL: placeholder ]
            </p>
          </div>

          <div className="border-t border-[#262626] pt-8">
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              We typically respond within one business day. If your project is
              time-sensitive, say so in the message and we will prioritise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
