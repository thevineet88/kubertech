export interface Metric {
  value: string;
  label: string;
}

interface MetricsGridProps {
  metrics: Metric[];
  /**
   * "lg" is the default. Use "md" when values are long enough to wrap
   * (e.g. "4.1s → 1.8s").
   */
  size?: "md" | "lg";
}

const valueSize = {
  md: "text-[24px] sm:text-[30px]",
  lg: "text-[28px] sm:text-[34px]",
} as const;

export default function MetricsGrid({ metrics, size = "lg" }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
        >
          <p
            className={`${valueSize[size]} font-semibold text-[color:var(--color-accent)] leading-none mb-2`}
          >
            {m.value}
          </p>
          <p className="text-[13px] text-white/55 leading-snug">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
