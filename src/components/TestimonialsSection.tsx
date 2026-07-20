import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

const testimonials = [
  {
    quote:
      "They took our sluggish storefront and turned it into something we're actually proud to show customers. Load times dropped, and we saw the conversion lift within weeks.",
    name: "James R.",
    title: "Head of Product, E-commerce",
  },
  {
    quote:
      "We needed a reliable engineering partner who could own both the product and the infrastructure. Kuber Tech delivered without hand-holding — exactly what an early-stage team needs.",
    name: "Priya M.",
    title: "Co-founder, SaaS Startup",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 border-t border-white/10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal delay={0}>
          <ScrambleText
            as="p"
            text="What clients say"
            className="text-[12px] sm:text-[13px] font-medium text-white/40 uppercase tracking-wider mb-8 sm:mb-12"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 + i * 0.1}>
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col gap-6">
                <p className="text-[16px] sm:text-[18px] text-white/90 leading-[1.55] font-medium">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-[14px] font-semibold text-[#FAFAFA]">{t.name}</p>
                  <p className="text-[13px] text-white/40 mt-0.5">{t.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
