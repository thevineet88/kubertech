import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

const clients = [
  { name: "Rivian", src: "/logos/Rivian.png" },
  { name: "Marks and Spencer", src: null, label: "M&S" },
  { name: "Siemens", src: "/logos/siemens.png" },
  { name: "Tarana", src: "/logos/tarana.png" },
  { name: "Jiffy", src: "/logos/jiffy.png" },
  { name: "Cigora", src: "/logos/cigora.png" },
];

function LogoCard({ c }: { c: (typeof clients)[number] }) {
  return (
    <div
      className="group h-24 w-40 sm:h-32 sm:w-52 flex-none rounded-xl bg-white/[0.9] border border-white/15 flex items-center justify-center p-4 sm:p-5 hover:border-[#8B5CF6]/45 hover:bg-white transition-all duration-300"
      title={c.name}
    >
      {c.src ? (
        <img
          src={c.src}
          alt={c.name}
          className="max-h-[72%] max-w-[82%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <span className="text-[26px] sm:text-[34px] font-semibold tracking-tight text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
          {c.label}
        </span>
      )}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative z-10 border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 overflow-hidden">
      <style>{`
        @keyframes kt-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .kt-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: kt-marquee 36s linear infinite;
        }
        .kt-marquee:hover .kt-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .kt-marquee-track { animation: none; }
        }
      `}</style>
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="px-5 sm:px-8 lg:px-12">
          <ScrambleText
            as="p"
            text="Work that has shaped products at"
            className="text-center text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-white/40 mb-9 sm:mb-12"
          />
        </ScrollReveal>

        <ScrollReveal y={20}>
          <div
            className="kt-marquee relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            {/* Track duplicated once; -50% keyframe loops seamlessly */}
            <div className="kt-marquee-track" style={{ paddingRight: 16 }}>
              {[...clients, ...clients].map((c, i) => (
                <LogoCard key={`${c.name}-${i}`} c={c} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
