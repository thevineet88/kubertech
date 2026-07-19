import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import PageHeader from "../components/PageHeader";

const caseStudies = [
  {
    title: "Rivian: RAG Knowledge Engine",
    tag: "AI engineering",
    metric: "sub-200ms",
    metricLabel: "500k+ docs indexed, 35% lower cloud cost",
    description:
      "An internal search system indexing 500k+ technical documents using hybrid dense + sparse retrieval, deployed on Kubernetes with sub-200ms latency.",
    href: "/case-studies/rag-knowledge-engine",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
  },
  {
    title: "Smart IoT Device Management Platform",
    tag: "Full-stack IoT platform",
    metric: "Edge → Cloud",
    metricLabel: "Secure provisioning, OTA deployments & fleet management",
    description:
      "A cloud-connected IoT platform managing Raspberry Pi devices through AWS IoT Greengrass, MQTT, secure provisioning, automated deployments and reliable offline operation across the entire hardware fleet.",
    href: "/case-studies/iot-xponent",
    gradient: "linear-gradient(135deg, #0B5D5B 0%, #0F172A 100%)",
  },
  {
    title: "Custom Print Platform",
    tag: "Full-stack real-time app",
    metric: "Full funnel",
    metricLabel: "Upload, customise, checkout, owned end to end",
    description:
      "A canvas-based design tool where users upload artwork, customise placement live, and order print products, built on Konva.js with WebSockets throughout.",
    href: "/case-studies/custom-print-platform",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6B94CC 100%)",
  },
  {
    title: "Marks & Spencer: Performance & Conversion",
    tag: "Full-stack commerce platform",
    metric: "4.1s → 1.8s",
    metricLabel: "LCP across 2M+ monthly pages, conversion 2% → 4%",
    description:
      "Rebuilt the rendering strategy and governed it with a 50–60 component design system across 2M+ monthly product pages.",
    href: "/case-studies/marks-and-spencer-performance",
    gradient: "linear-gradient(135deg, #0b3d2e 0%, #05140f 100%)",
  },
];

const moreProjects = [
  {
    title: "Enterprise banking platform",
    tag: "Cloud platform & SRE",
    metric: "99.9%",
    metricLabel: "Uptime, MTTR down 30%",
    description:
      "Cloud infrastructure and SRE for a regulated banking platform: 50+ production workloads on Kubernetes and OpenShift, automated GitLab delivery, and full observability across the estate.",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 55%, #2c5364 100%)",
  },
  {
    title: "Checkout Conversion Flow",
    tag: "Full-stack commerce",
    metric: "2% → 4%",
    metricLabel: "Checkout conversion, 40k+ users",
    description:
      "Fixed fragmented checkout state and instrumented the full funnel with Mixpanel, then iterated on real drop-off data behind feature flags.",
    gradient: "linear-gradient(135deg, #1f2a5a 0%, #3b4ba0 100%)",
  },
  {
    title: "Cloud: 5G telecom platform",
    tag: "Cloud platform",
    metric: "-50%",
    metricLabel: "Deployment cycle time",
    description:
      "Fully automated, cost-optimised AWS infrastructure with reusable Terraform modules and Jenkins CI/CD for a production 5G platform.",
    gradient: "linear-gradient(135deg, #102a43 0%, #486581 100%)",
  },
  {
    title: "Siemens Teamcenter: Data grid",
    tag: "Full-stack app",
    metric: "Excel-like",
    metricLabel: "Frozen rows and columns",
    description:
      "A spreadsheet-grade PLM data grid with frozen panes and rich inline editing, rendered with D3.js over an Apollo GraphQL backend.",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
  },
  {
    title: "Cigora & Pipes and Cigars",
    tag: "Design system",
    metric: "2 brands",
    metricLabel: "One themeable system",
    description:
      "A themeable design system on design tokens and atomic design, powering two distinct e-commerce brands from one source of truth.",
    gradient: "linear-gradient(135deg, #3a1c71 0%, #874da2 100%)",
  },
];

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies | Kuber Tech Solutions",
  description:
    "Case studies covering frontend performance, full-stack commerce, and AI engineering work delivered by Kuber Tech Solutions.",
  url: "https://kubertechsolutions.in/case-studies",
};

export default function CaseStudiesHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <AmbientMeshBackground />
      <PageHeader
        seo={{
          title: "Case Studies | Kuber Tech Solutions",
          description:
            "Real engagements: frontend performance, full-stack commerce, and AI engineering work for Marks & Spencer, a custom print platform, and Rivian.",
          path: "/case-studies",
          jsonLd: hubJsonLd,
        }}
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Case studies"
        title="Engagements where the numbers moved."
        description="Frontend performance, full-stack commerce, and AI engineering work our team has delivered for funded startups and enterprise platforms."
      />

      {/* Cards */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="group block overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[color:var(--color-accent)]"
            >
              <div
                className="relative p-6 sm:p-7 flex flex-col justify-between min-h-[200px]"
                style={{ background: c.gradient }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                  {c.tag}
                </span>
                <div>
                  <p className="text-[22px] sm:text-[24px] font-semibold text-white leading-tight">
                    {c.metric}
                  </p>
                  <p className="text-[12px] text-white/70 mt-1">
                    {c.metricLabel}
                  </p>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[15px] sm:text-[16px] font-semibold text-[color:var(--color-text)] mb-2 flex items-center gap-2">
                  {c.title}
                  <ArrowRight
                    size={14}
                    className="text-[color:var(--color-text-faint)] group-hover:text-[color:var(--color-accent)] group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </p>
                <p className="text-[13.5px] text-[color:var(--color-text-muted)] leading-[1.6]">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* More projects */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <h2 className="text-[18px] sm:text-[20px] font-semibold text-[color:var(--color-text)] mb-1">
          More projects
        </h2>
        <p className="text-[13.5px] text-[color:var(--color-text-muted)] mb-6 sm:mb-8">
          Commerce, cloud platforms, and design systems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {moreProjects.map((c) => (
            <div
              key={c.title}
              className="block overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)]"
            >
              <div
                className="relative p-6 sm:p-7 flex flex-col justify-between min-h-[180px]"
                style={{ background: c.gradient }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                  {c.tag}
                </span>
                <div>
                  <p className="text-[20px] sm:text-[22px] font-semibold text-white leading-tight">
                    {c.metric}
                  </p>
                  <p className="text-[12px] text-white/70 mt-1">
                    {c.metricLabel}
                  </p>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[15px] sm:text-[16px] font-semibold text-[color:var(--color-text)] mb-2">
                  {c.title}
                </p>
                <p className="text-[13.5px] text-[color:var(--color-text-muted)] leading-[1.6]">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
