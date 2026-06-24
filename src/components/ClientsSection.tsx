import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Marks and Spencer", src: null, label: "M&S" },
  { name: "Siemens", src: "/logos/siemens.png" },
  { name: "Tarana", src: "/logos/tarana.png" },
  { name: "Jiffy", src: "/logos/jiffy.png" },
  { name: "Cigora", src: "/logos/cigora.png" },
  { name: "Samyati Holidays", src: "/logos/samyati.png" },
];

export default function ClientsSection() {
  return (
    <section className="bg-[#FAFAFA] border-t border-gray-100 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-center text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-gray-400 mb-9 sm:mb-12">
            Work that has shaped products at
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((c, i) => (
            <ScrollReveal key={c.name} delay={0.06 * i} y={20}>
              <div
                className="group h-28 sm:h-36 lg:h-40 rounded-xl bg-white border border-gray-200/70 flex items-center justify-center p-2 sm:p-3 hover:border-gray-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
                title={c.name}
              >
                {c.src ? (
                  <img
                    src={c.src}
                    alt={c.name}
                    className="max-h-[88%] max-w-[88%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-[30px] sm:text-[40px] font-semibold tracking-tight text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
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
