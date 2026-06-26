import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { openBooking } from "../booking";

const metrics = [
  { value: "500k+", label: "Technical documents indexed" },
  { value: "sub-200ms", label: "Query latency in production" },
  { value: "35%", label: "Lower cloud cost vs. initial spec" },
  { value: "99.9%", label: "Uptime on EKS over 6 months" },
];

const stack = [
  { category: "Retrieval", items: "Weaviate (dense vector search), BM25 (sparse keyword), hybrid fusion with RRF" },
  { category: "Embedding", items: "OpenAI text-embedding-3-large, batched ingestion pipeline with delta sync" },
  { category: "Re-ranking", items: "Cross-encoder re-ranker over top-50 candidates before final context assembly" },
  { category: "Orchestration", items: "LangGraph for multi-step retrieval chains, query expansion, and fallback routing" },
  { category: "Infrastructure", items: "AWS EKS with Karpenter autoscaling, Terraform modules, Grafana for AI-specific observability" },
  { category: "Evaluation", items: "Ragas for RAG faithfulness and answer relevance scoring, continuous eval in CI" },
];

export default function RivianCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav strip */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        <div className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Kuber Tech
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#F26522] mb-4">
          AI engineering case study
        </p>
        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.8rem)" }}
        >
          Rivian: RAG Knowledge Engine
        </h1>
        <p className="text-[16px] sm:text-[18px] text-white/60 leading-[1.6] max-w-2xl">
          500,000 technical documents. Engineers spending hours on manual search. We built a hybrid retrieval system that returns accurate answers in under 200ms at 35% lower cost than the initial cloud spec.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {metrics.map((m) => (
            <div key={m.value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-[28px] sm:text-[34px] font-semibold text-[#F26522] leading-none mb-2">
                {m.value}
              </p>
              <p className="text-[13px] text-white/55 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8 max-w-[1440px] mx-auto" />

      {/* Problem */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-2">
              The problem
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              Rivian's engineering teams produced over 500,000 technical documents: service manuals, supplier specs, internal wikis, compliance records. Engineers needed answers fast. What they got instead was a keyword search that surfaced documents, not answers.
            </p>
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              The time cost was measurable. Senior engineers were spending 45 to 90 minutes per query sifting results, cross-referencing documents, and verifying information manually. At scale, that is an enormous productivity drag. The ask was simple: make the knowledge findable.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 max-w-[1440px] mx-auto" />

      {/* Architecture diagram */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-8">
          Architecture
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 900 260"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full min-w-[640px] max-w-3xl"
          >
            {/* Boxes */}
            {/* Query */}
            <rect x="20" y="100" width="110" height="60" rx="12" fill="#1a1a1a" stroke="#F26522" strokeWidth="1.5" />
            <text x="75" y="127" textAnchor="middle" fill="#F26522" fontSize="11" fontWeight="600" fontFamily="system-ui">User</text>
            <text x="75" y="143" textAnchor="middle" fill="#F26522" fontSize="11" fontWeight="600" fontFamily="system-ui">Query</text>

            {/* Arrow Q → embed */}
            <line x1="130" y1="130" x2="175" y2="105" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="130" y1="130" x2="175" y2="155" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Embed box */}
            <rect x="176" y="74" width="130" height="52" rx="10" fill="#1a1a1a" stroke="#ffffff20" strokeWidth="1.2" />
            <text x="241" y="97" textAnchor="middle" fill="#ffffffbb" fontSize="10.5" fontFamily="system-ui">Embedding</text>
            <text x="241" y="113" textAnchor="middle" fill="#ffffff60" fontSize="9.5" fontFamily="system-ui">text-embedding-3-large</text>

            {/* BM25 box */}
            <rect x="176" y="134" width="130" height="52" rx="10" fill="#1a1a1a" stroke="#ffffff20" strokeWidth="1.2" />
            <text x="241" y="157" textAnchor="middle" fill="#ffffffbb" fontSize="10.5" fontFamily="system-ui">BM25 Keyword</text>
            <text x="241" y="173" textAnchor="middle" fill="#ffffff60" fontSize="9.5" fontFamily="system-ui">sparse retrieval</text>

            {/* Arrows → Weaviate */}
            <line x1="306" y1="100" x2="360" y2="120" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="306" y1="160" x2="360" y2="140" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Weaviate */}
            <rect x="361" y="100" width="120" height="60" rx="12" fill="#1a1a1a" stroke="#F26522" strokeWidth="1.5" />
            <text x="421" y="126" textAnchor="middle" fill="#F26522" fontSize="11" fontWeight="600" fontFamily="system-ui">Weaviate</text>
            <text x="421" y="143" textAnchor="middle" fill="#F26522bb" fontSize="9.5" fontFamily="system-ui">hybrid fusion (RRF)</text>

            {/* Arrow → reranker */}
            <line x1="481" y1="130" x2="530" y2="130" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Reranker */}
            <rect x="531" y="100" width="110" height="60" rx="12" fill="#1a1a1a" stroke="#ffffff20" strokeWidth="1.2" />
            <text x="586" y="126" textAnchor="middle" fill="#ffffffbb" fontSize="10.5" fontFamily="system-ui">Re-ranker</text>
            <text x="586" y="143" textAnchor="middle" fill="#ffffff60" fontSize="9.5" fontFamily="system-ui">cross-encoder</text>

            {/* Arrow → LLM */}
            <line x1="641" y1="130" x2="690" y2="130" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* LLM */}
            <rect x="691" y="100" width="100" height="60" rx="12" fill="#1a1a1a" stroke="#F26522" strokeWidth="1.5" />
            <text x="741" y="126" textAnchor="middle" fill="#F26522" fontSize="11" fontWeight="600" fontFamily="system-ui">LLM</text>
            <text x="741" y="143" textAnchor="middle" fill="#F26522bb" fontSize="9.5" fontFamily="system-ui">GPT-4o</text>

            {/* Arrow → Answer */}
            <line x1="791" y1="130" x2="835" y2="130" stroke="#ffffff30" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* Answer */}
            <rect x="836" y="100" width="48" height="60" rx="12" fill="#F26522" />
            <text x="860" y="126" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui">An-</text>
            <text x="860" y="140" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui">swer</text>

            {/* Labels below boxes */}
            <text x="75" y="195" textAnchor="middle" fill="#ffffff30" fontSize="9.5" fontFamily="system-ui">Step 1</text>
            <text x="241" y="215" textAnchor="middle" fill="#ffffff30" fontSize="9.5" fontFamily="system-ui">Step 2 — parallel retrieval</text>
            <text x="421" y="195" textAnchor="middle" fill="#ffffff30" fontSize="9.5" fontFamily="system-ui">Step 3</text>
            <text x="586" y="195" textAnchor="middle" fill="#ffffff30" fontSize="9.5" fontFamily="system-ui">Step 4</text>
            <text x="741" y="195" textAnchor="middle" fill="#ffffff30" fontSize="9.5" fontFamily="system-ui">Step 5</text>

            {/* Eval feedback arc */}
            <path d="M 791 165 Q 741 235 586 220 Q 421 235 241 220" stroke="#F2652240" strokeWidth="1" fill="none" strokeDasharray="4 3" />
            <text x="516" y="248" textAnchor="middle" fill="#F2652270" fontSize="9" fontFamily="system-ui">Ragas eval loop (faithfulness + relevance)</text>

            {/* Arrow marker */}
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#ffffff40" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <div className="border-t border-white/8 max-w-[1440px] mx-auto" />

      {/* What we built */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-2">
              What we built
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              We designed a hybrid retrieval pipeline from scratch. Dense semantic search via Weaviate caught conceptually related documents even when the engineer didn't know the exact terminology. Sparse BM25 search caught precise keyword matches for part numbers, model codes, and spec values. The two results were fused using Reciprocal Rank Fusion, then filtered through a cross-encoder re-ranker to surface the top context before hitting the LLM.
            </p>
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              Ingestion was built as an async delta-sync pipeline: documents enter a queue, get chunked with context-aware overlap, embedded in batches, and written to Weaviate. New and updated documents flow through without full re-indexing. The entire 500k document corpus was indexed in under 4 hours.
            </p>
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              We instrumented every layer with OpenTelemetry, feeding latency, retrieval quality, and LLM cost into Grafana dashboards built specifically for AI workloads. Ragas evaluation ran in CI on a curated question set, so any regression in retrieval quality blocked the deploy.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 max-w-[1440px] mx-auto" />

      {/* Tech stack */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-8">
          Tech stack
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((s) => (
            <div key={s.category} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-[#F26522] mb-2">
                {s.category}
              </p>
              <p className="text-[13.5px] text-white/60 leading-[1.6]">{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8 max-w-[1440px] mx-auto" />

      {/* CTA */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <h2
          className="font-medium leading-[1.1] tracking-[-0.02em] text-white mb-4"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
        >
          Want us to build this for you?
        </h2>
        <p className="text-[15px] sm:text-[16px] text-white/55 leading-[1.6] max-w-lg mb-8">
          We scope every AI project before we quote. Bring your use case and we'll tell you exactly what it takes to ship it properly.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={openBooking}
            className="group inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#d9541a] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
          >
            <span>Book a free scoping call</span>
            <div className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center shrink-0">
              <ArrowRight size={12} className="text-white transition-transform duration-500 group-hover:-rotate-45" style={{ transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)" }} />
            </div>
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-[14px] font-medium rounded-full px-6 py-2.5 transition-all duration-200"
          >
            See all work
          </Link>
        </div>
      </div>
    </div>
  );
}
