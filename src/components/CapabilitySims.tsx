"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MONO = "ui-monospace, Menlo, monospace";

const jitter = (v: number, amt: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v + (Math.random() - 0.5) * amt));

/** Ticks `onTick` every `ms` while the returned ref's element is in view. */
function useLiveSim(onTick: () => void, ms = 1200) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!live) return;
    const id = setInterval(onTick, ms);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [live, ms]);

  return ref;
}

function PanelShell({
  simRef,
  title,
  accent,
  meta,
  children,
  footer,
}: {
  simRef: React.RefObject<HTMLDivElement | null>;
  title: string;
  accent: string;
  meta: string;
  children: ReactNode;
  footer: [string, ReactNode][];
}) {
  return (
    <div
      ref={simRef}
      aria-hidden="true"
      className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
      style={{ fontFamily: MONO }}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2 w-2 flex-none">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
              style={{ background: accent }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: accent }}
            />
          </span>
          <span className="truncate text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/70">
            {title}
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] text-white/40 whitespace-nowrap">
          {meta}
        </span>
      </div>
      <div className="divide-y divide-white/[0.06]">{children}</div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/10 px-4 py-3.5 sm:px-5">
        {footer.map(([label, value], i) => (
          <span
            key={label}
            className={`flex items-baseline gap-2 ${i === footer.length - 1 ? "sm:ml-auto" : ""}`}
          >
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/35">
              {label}
            </span>
            <span className="text-[11px] sm:text-[12px] tabular-nums">{value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const rowCls =
  "grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-3 sm:gap-x-6 px-4 py-2.5 sm:px-5 text-[11px] sm:text-[12px]";

/* 01 — AI Engineering: RAG queries being answered and evaluated */
export function AISim() {
  const [rows, setRows] = useState([
    { q: "warranty coverage terms", ms: 142, chunks: 6, score: 0.94 },
    { q: "battery service intervals", ms: 168, chunks: 4, score: 0.91 },
    { q: "diagnostic fault B-1172", ms: 187, chunks: 8, score: 0.88 },
  ]);
  const [tps, setTps] = useState(38);
  const [evalPass, setEvalPass] = useState(96.2);

  const ref = useLiveSim(() => {
    setRows((prev) =>
      prev.map((r) => ({
        ...r,
        ms: Math.round(jitter(r.ms, 30, 90, 200)),
        chunks: Math.round(jitter(r.chunks, 2, 3, 9)),
        score: jitter(r.score, 0.03, 0.85, 0.99),
      })),
    );
    setTps((v) => Math.round(jitter(v, 8, 25, 60)));
    setEvalPass((v) => jitter(v, 0.4, 94, 99));
  });

  return (
    <PanelShell
      simRef={ref}
      title="RAG pipeline — eval run"
      accent="#8B5CF6"
      meta="Hybrid retrieval"
      footer={[
        ["Queries/s", <span className="text-[#8B5CF6]">{tps}</span>],
        ["Reranker", <span className="text-white/70">on ✓</span>],
        ["Eval pass", <span className="text-white/70">{evalPass.toFixed(1)}%</span>],
      ]}
    >
      {rows.map((r) => (
        <div key={r.q} className={rowCls}>
          <span className="truncate text-white/45">"{r.q}"</span>
          <span className="tabular-nums text-[#8B5CF6]">{r.ms}ms</span>
          <span className="tabular-nums text-white/70">{r.chunks} hits</span>
          <span className="tabular-nums text-white/70">{r.score.toFixed(2)}</span>
        </div>
      ))}
    </PanelShell>
  );
}

/* 02 — Cloud & Infrastructure: production cluster under load */
export function CloudSim() {
  const [rows, setRows] = useState([
    { svc: "api-gateway", pods: 6, cpu: 42, rps: 840 },
    { svc: "search-index", pods: 4, cpu: 61, rps: 310 },
    { svc: "worker-queue", pods: 8, cpu: 37, rps: 520 },
  ]);
  const [deploys, setDeploys] = useState(3);
  const [errRate, setErrRate] = useState(0.02);

  const ref = useLiveSim(() => {
    setRows((prev) =>
      prev.map((r) => ({
        ...r,
        cpu: Math.round(jitter(r.cpu, 8, 20, 85)),
        rps: Math.round(jitter(r.rps, 60, 150, 1200)),
        pods: Math.round(jitter(r.pods, 0.8, 2, 12)),
      })),
    );
    if (Math.random() < 0.08) setDeploys((d) => d + 1);
    setErrRate((v) => jitter(v, 0.01, 0, 0.09));
  });

  return (
    <PanelShell
      simRef={ref}
      title="Prod cluster — live"
      accent="#06B6D4"
      meta="EKS · us-east-1"
      footer={[
        ["Deploys", <span className="text-[#06B6D4]">{deploys} today</span>],
        ["Autoscale", <span className="text-white/70">on ✓</span>],
        ["Err rate", <span className="text-white/70">{errRate.toFixed(2)}%</span>],
      ]}
    >
      {rows.map((r) => (
        <div key={r.svc} className={rowCls}>
          <span className="text-[#06B6D4]">{r.svc}</span>
          <span className="tabular-nums text-white/70">{r.pods} pods</span>
          <span className="tabular-nums text-white/70">{r.cpu}% cpu</span>
          <span className="tabular-nums text-white/40">{r.rps} req/s</span>
        </div>
      ))}
    </PanelShell>
  );
}

/* 03 — IoT: fleet telemetry over MQTT */
export function IoTSim() {
  const [rows, setRows] = useState([
    { id: "KT-0142", name: "Solar controller", temp: 41.2, battery: 87, signal: -52 },
    { id: "KT-0287", name: "Battery gateway", temp: 38.6, battery: 64, signal: -61 },
    { id: "KT-0311", name: "Awning unit", temp: 35.9, battery: 92, signal: -47 },
  ]);
  const [msgRate, setMsgRate] = useState(126);
  const [uptime, setUptime] = useState(99.94);

  const ref = useLiveSim(() => {
    setRows((prev) =>
      prev.map((d) => ({
        ...d,
        temp: jitter(d.temp, 0.8, 30, 55),
        battery: jitter(d.battery, 0.6, 40, 100),
        signal: jitter(d.signal, 2, -75, -40),
      })),
    );
    setMsgRate((v) => Math.round(jitter(v, 14, 90, 180)));
    setUptime((v) => jitter(v, 0.02, 99.9, 99.99));
  });

  return (
    <PanelShell
      simRef={ref}
      title="Fleet telemetry — live"
      accent="#6B94CC"
      meta="MQTT · AWS IoT Core"
      footer={[
        ["Msg/s", <span className="text-[#6B94CC]">{msgRate}</span>],
        ["OTA", <span className="text-white/70">v2.4.1 ✓</span>],
        ["Uptime", <span className="text-white/70">{uptime.toFixed(2)}%</span>],
      ]}
    >
      {rows.map((d) => (
        <div key={d.id} className={rowCls}>
          <div className="min-w-0">
            <span className="text-[#6B94CC]">{d.id}</span>
            <span className="ml-2 hidden sm:inline text-white/45">{d.name}</span>
          </div>
          <span className="tabular-nums text-white/70">{d.temp.toFixed(1)}°C</span>
          <span className="tabular-nums text-white/70">{d.battery.toFixed(0)}%</span>
          <span className="tabular-nums text-white/40">{d.signal.toFixed(0)}dBm</span>
        </div>
      ))}
    </PanelShell>
  );
}

/* 04 — Full-Cycle Development: release pipeline shipping to prod */
export function ShipSim() {
  const [builds, setBuilds] = useState([
    { branch: "main", stage: "deployed ✓", dur: 141, tests: 482 },
    { branch: "feat/checkout-v2", stage: "e2e tests", dur: 96, tests: 311 },
    { branch: "fix/cart-race", stage: "building", dur: 38, tests: 0 },
  ]);
  const [lcp, setLcp] = useState(1.4);
  const [releases, setReleases] = useState(14);

  const ref = useLiveSim(() => {
    setBuilds((prev) =>
      prev.map((b) =>
        b.stage === "deployed ✓"
          ? b
          : {
              ...b,
              dur: b.dur + Math.round(Math.random() * 3),
              tests:
                b.stage === "e2e tests"
                  ? Math.min(490, b.tests + Math.round(Math.random() * 12))
                  : b.tests,
            },
      ),
    );
    setLcp((v) => jitter(v, 0.1, 1.1, 1.9));
    if (Math.random() < 0.06) setReleases((r) => r + 1);
  });

  return (
    <PanelShell
      simRef={ref}
      title="Release pipeline — main"
      accent="#10B981"
      meta="CI/CD · GitHub Actions"
      footer={[
        ["LCP", <span className="text-[#10B981]">{lcp.toFixed(1)}s</span>],
        ["Preview envs", <span className="text-white/70">on ✓</span>],
        ["Releases", <span className="text-white/70">{releases}/mo</span>],
      ]}
    >
      {builds.map((b) => (
        <div key={b.branch} className={rowCls}>
          <span className="truncate text-[#10B981]">{b.branch}</span>
          <span className="text-white/70">{b.stage}</span>
          <span className="tabular-nums text-white/70">{b.dur}s</span>
          <span className="tabular-nums text-white/40">
            {b.tests > 0 ? `${b.tests} tests` : "—"}
          </span>
        </div>
      ))}
    </PanelShell>
  );
}
