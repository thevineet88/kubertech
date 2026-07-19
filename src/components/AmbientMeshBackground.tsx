export default function AmbientMeshBackground() {
  return (
    <div className="ambient-mesh-bg" aria-hidden="true">
      <div className="ambient-mesh-bg__wash" />
      <svg
        className="ambient-mesh-bg__net ambient-mesh-bg__net--wide"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ambient-mesh-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6B94CC" stopOpacity="0" />
            <stop offset="0.34" stopColor="#6B94CC" stopOpacity="0.44" />
            <stop offset="0.68" stopColor="#8B5CF6" stopOpacity="0.27" />
            <stop offset="1" stopColor="#6B94CC" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 17 }).map((_, i) => {
          const y = 80 + i * 78;
          return (
            <path
              key={`h-${i}`}
              d={`M -120 ${y} C 220 ${y - 32}, 426 ${y + 44}, 720 ${y + 8} S 1196 ${y - 52}, 1560 ${y + 18}`}
              fill="none"
              stroke="url(#ambient-mesh-stroke)"
              strokeWidth="0.9"
            />
          );
        })}
        {Array.from({ length: 16 }).map((_, i) => {
          const x = 20 + i * 96;
          return (
            <path
              key={`v-${i}`}
              d={`M ${x} -120 C ${x + 52} 220, ${x - 42} 490, ${x + 8} 760 S ${x + 64} 1160, ${x - 18} 1520`}
              fill="none"
              stroke="url(#ambient-mesh-stroke)"
              strokeWidth="0.78"
            />
          );
        })}
      </svg>
      <svg
        className="ambient-mesh-bg__net ambient-mesh-bg__net--tight"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const y = 120 + i * 88;
          return (
            <path
              key={`d-${i}`}
              d={`M -80 ${y + 220} C 260 ${y + 80}, 440 ${y + 180}, 730 ${y + 20} S 1160 ${y - 40}, 1520 ${y - 180}`}
              fill="none"
              stroke="#6B94CC"
              strokeOpacity="0.115"
              strokeWidth="0.8"
            />
          );
        })}
      </svg>
      <div className="ambient-mesh-bg__shade" />
    </div>
  );
}
