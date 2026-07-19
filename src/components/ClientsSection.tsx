import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Rivian", src: "/logos/Rivian.png" },
  { name: "Marks and Spencer", src: null, label: "M&S" },
  { name: "Siemens", src: "/logos/siemens.png" },
  { name: "Tarana", src: "/logos/tarana.png" },
  { name: "Jiffy", src: "/logos/jiffy.png" },
  { name: "Cigora", src: "/logos/cigora.png" },
];

export default function ClientsSection() {
  return (
    <section className="relative z-10 border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-center text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-white/40 mb-9 sm:mb-12">
            Work that has shaped products at
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((c, i) => (
            <ScrollReveal key={c.name} delay={0.06 * i} y={20}>
              <div
                className="group h-28 sm:h-36 lg:h-40 rounded-xl bg-white/[0.9] border border-white/15 flex items-center justify-center p-4 sm:p-5 hover:border-[#8B5CF6]/45 hover:bg-white transition-all duration-300"
                title={c.name}
              >
                {c.src ? (
                  <img
                    src={c.src}
                    alt={c.name}
                    className="max-h-[72%] max-w-[82%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-[30px] sm:text-[40px] font-semibold tracking-tight text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    {c.label}
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
