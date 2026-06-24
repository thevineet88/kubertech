import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real work, real results. How our team has helped clients ship faster, convert better, and run reliably at scale.",
};

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  client: string;
  engagement: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: Metric[];
  stack: string[];
}

const studies: CaseStudy[] = [
  {
    id: "marks-and-spencer",
    client: "Marks and Spencer",
    engagement: "Frontend engineering, via Publicis Sapient",
    summary:
      "Core Web Vitals and a design system overhaul that served millions of product pages faster.",
    challenge:
      "M&S is one of the UK's largest retailers, with millions of monthly visitors landing on product pages built on an aging frontend. Page load was slow, Core Web Vitals were outside the green threshold, and the component landscape had drifted across teams. At that scale, every second of latency and every point of friction has a measurable impact on revenue.",
    approach:
      "We migrated key surfaces to server-side rendering, eliminated render-blocking scripts, and chose a deliberate rendering strategy per surface (SSR, SSG, ISR) based on traffic and freshness. Image delivery was overhauled. We designed and governed a 50-60 component design system with Storybook documentation and contribution standards to bring consistency across teams. A/B experimentation with Adobe Target plus SpeedCurve monitoring gave us a data loop to validate changes before rolling them at scale.",
    result:
      "LCP dropped from 4.1 seconds to 1.8 seconds across the product page estate, closing a 5-10% deviation from the Core Web Vitals green threshold. Checkout conversion doubled from 2% to 4%. The design system gave teams a shared, performance-tested baseline to build from.",
    metrics: [
      { value: "4.1s to 1.8s", label: "LCP on product pages" },
      { value: "2% to 4%", label: "Checkout conversion" },
      { value: "2M+", label: "Monthly product pages improved" },
    ],
    stack: ["Next.js", "React", "TypeScript", "SSR", "Adobe Target", "SpeedCurve"],
  },
  {
    id: "jiffy-conversion",
    client: "Jiffy: Conversion flow",
    engagement: "Frontend engineering",
    summary:
      "Checkout conversion doubled by fixing state fragmentation and replacing guesswork with funnel data.",
    challenge:
      "Jiffy is a fast-growing e-commerce brand with 40k+ monthly users. Checkout conversion was low and the team had no clear picture of where users dropped off. Decisions were made on gut feel, so changes shipped without knowing whether they helped or hurt.",
    approach:
      "We found checkout state scattered across multiple reducers and local component state, making the flow brittle. We consolidated it into a single, predictable reducer. Before shipping anything else, we instrumented the full funnel with Mixpanel so every drop-off point was visible, then prioritised fixes by real impact. We also built feature-flag infrastructure so changes could roll out safely and roll back instantly.",
    result:
      "Checkout conversion lifted from 2% to 4%. The funnel instrumentation gave the product team a permanent feedback loop, and the feature-flag system reduced deployment risk.",
    metrics: [
      { value: "2% to 4%", label: "Checkout conversion" },
      { value: "40k+", label: "Monthly users" },
      { value: "Full funnel", label: "Mixpanel instrumentation" },
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Mixpanel", "Feature flags"],
  },
  {
    id: "jiffy-design-lab",
    client: "Jiffy: Design Lab",
    engagement: "Frontend engineering",
    summary:
      "A real-time, in-browser design tool for placing print-ready artwork on products.",
    challenge:
      "Jiffy needed customers to place and preview print-ready artwork directly in the browser, with edits reflected live. That meant real-time image processing, precise canvas manipulation, and a responsive editing surface that stayed fast under heavy interaction.",
    approach:
      "We built a real-time AI image processing pipeline wired over WebSocket (Socket.io and Rails ActionCable) so edits streamed back live. The editing surface was built on Konva.js for pixel-accurate, print-ready artwork placement, with a React and TypeScript front end keeping interaction state predictable.",
    result:
      "A responsive, real-time design lab where customers place artwork and see print-ready output instantly, with the canvas staying smooth under continuous editing.",
    metrics: [
      { value: "Real-time", label: "WebSocket edit streaming" },
      { value: "Print-ready", label: "Canvas artwork placement" },
      { value: "Konva.js", label: "Pixel-accurate editing surface" },
    ],
    stack: ["React", "TypeScript", "Konva.js", "Socket.io", "ActionCable"],
  },
  {
    id: "cloud-reliability",
    client: "Cloud and DevOps: Banking platform",
    engagement: "Infrastructure and SRE, enterprise banking engagement",
    summary:
      "High availability and auditable, automated delivery across regulated banking workloads.",
    challenge:
      "A regulated FinTech and banking platform ran 50+ production workloads on enterprise Red Hat and OpenShift, where availability, traceability, and strict change management are non-negotiable. Delivery needed approval gates, audit trails, and segregation of duties without slowing teams down.",
    approach:
      "We operated Kubernetes and OpenShift clusters for availability and scale, and designed GitLab CI/CD pipelines with approval gates, audit trails, and segregation of duties. Nexus secured dependency management and traceability. Grafana and Prometheus dashboards improved SLA tracking and proactive monitoring. RBAC and least-privilege access strengthened compliance, and structured on-call and incident management tightened response.",
    result:
      "99.9% platform availability, deployment failures reduced by 25% through pipeline automation and validation, MTTR reduced by 30% through proactive alerting and incident response, and manual operational effort cut by 40% through automation.",
    metrics: [
      { value: "99.9%", label: "Platform availability" },
      { value: "MTTR -30%", label: "Faster incident response" },
      { value: "Failures -25%", label: "Fewer deployment failures" },
    ],
    stack: ["OpenShift", "Kubernetes", "GitLab CI/CD", "Nexus", "Grafana", "Prometheus"],
  },
  {
    id: "telecom-infra",
    client: "Cloud and DevOps: 5G telecom platform",
    engagement: "Infrastructure automation, telecom engagement",
    summary:
      "Repeatable, automated infrastructure and cost-optimised AWS provisioning for a production 5G platform.",
    challenge:
      "A production 5G telecom platform needed infrastructure that was repeatable, auditable, and automated across Dev, Staging, and Production, with reliable releases and controlled cloud spend under variable load.",
    approach:
      "We built fully automated deployments with Terraform and reusable IaC modules (VPC, EC2, RDS, EKS, S3, IAM), integrated with Jenkins CI/CD for validation, planning, and deployment. Docker and Kubernetes ran workloads across environments, Ansible handled configuration, and AWS Auto Scaling kept the platform resilient. Cloud cost optimisation used Cost Explorer, rightsizing, and Reserved Instance and Savings Plan recommendations.",
    result:
      "Deployment success rate up 35%, manual effort down 40% through reusable modules and scripted provisioning, deployment cycle time cut by over 50%, and measurable cloud cost savings from rightsizing and eliminating idle resources.",
    metrics: [
      { value: "+35%", label: "Deployment success rate" },
      { value: "-50%", label: "Deployment cycle time" },
      { value: "-40%", label: "Manual operational effort" },
    ],
    stack: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes", "Ansible"],
  },
  {
    id: "siemens-floor-planner",
    client: "Siemens: Facility Floor Planner",
    engagement: "Frontend engineering, via Connecticus Technologies",
    summary:
      "An interactive multi-floor seating tool built on a custom coordinate system.",
    challenge:
      "Admin teams at Siemens needed to manage seating across multiple floors visually, with an interactive map rather than spreadsheets, including precise placement and drag-and-drop reassignment.",
    approach:
      "We built an interactive multi-floor seating tool using Leaflet.js with a custom coordinate system, wiring drag-and-drop placement to a REST API. React and TypeScript kept the interaction model maintainable across floors and views.",
    result:
      "A visual, interactive seating planner that let admin teams manage facilities across floors directly, replacing manual tracking.",
    metrics: [
      { value: "Multi-floor", label: "Interactive seating map" },
      { value: "Drag-and-drop", label: "Direct placement and reassignment" },
      { value: "Custom grid", label: "Coordinate system on Leaflet.js" },
    ],
    stack: ["React", "TypeScript", "Leaflet.js", "REST API"],
  },
  {
    id: "siemens-teamcenter",
    client: "Siemens Teamcenter: Data grid",
    engagement: "Frontend engineering, via Connecticus Technologies",
    summary:
      "An Excel-like data grid with frozen rows and columns for PLM requirement management.",
    challenge:
      "Teamcenter requirement management needed a spreadsheet-grade editing experience in the browser: large datasets, frozen rows and columns, and rich inline editing, without the performance falling apart.",
    approach:
      "We built an Excel-like data grid with frozen rows and columns using D3.js for rendering, CKEditor 5 for rich inline editing, and Apollo for data. React and TypeScript held the interaction model together at scale.",
    result:
      "A spreadsheet-grade requirement management grid running in the browser, with frozen panes and rich editing over large PLM datasets.",
    metrics: [
      { value: "Excel-like", label: "Frozen rows and columns" },
      { value: "Rich editing", label: "Inline CKEditor 5 cells" },
      { value: "D3.js", label: "High-performance rendering" },
    ],
    stack: ["React", "TypeScript", "D3.js", "CKEditor 5", "Apollo"],
  },
  {
    id: "cigora-design-system",
    client: "Cigora & Pipes and Cigars",
    engagement: "Frontend engineering",
    summary:
      "One themeable design system powering two distinct e-commerce brands.",
    challenge:
      "Two e-commerce brands needed consistent, high-quality UI while keeping distinct visual identities, without maintaining two separate component libraries.",
    approach:
      "We built a themeable design system on design tokens and atomic design principles, with Tailwind CSS for styling. A single component layer drove both brands, with theming handled through tokens so each brand kept its own look while sharing the same foundation.",
    result:
      "One maintainable design system powering two distinct brands, with consistent components and brand-specific theming from a shared source of truth.",
    metrics: [
      { value: "1 system", label: "Powering two brands" },
      { value: "Design tokens", label: "Theme-driven styling" },
      { value: "Atomic", label: "Consistent component layer" },
    ],
    stack: ["React", "TypeScript", "Design Tokens", "Tailwind CSS", "Atomic Design"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Selected work</h1>
        <p className="text-[#a3a3a3] text-lg max-w-2xl leading-relaxed">
          Real engagements, real results. The work below was delivered by our team
          across employer and agency-client engagements, spanning frontend
          performance, conversion, and cloud infrastructure.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28 space-y-16">
        {studies.map((study) => (
          <article
            key={study.id}
            id={study.id}
            className="border border-[#262626] rounded-lg overflow-hidden scroll-mt-24"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] px-8 py-8 border-b border-[#262626]">
              <p className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-2">
                {study.client}
              </p>
              <p className="text-[#fafafa] text-xl font-medium mb-4 max-w-2xl leading-snug">
                {study.summary}
              </p>
              <p className="text-xs text-[#a3a3a3]">{study.engagement}</p>
            </div>

            {/* Metrics */}
            <div className="bg-[#0a0a0a] px-8 py-6 border-b border-[#262626] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[#ccff00] font-medium text-lg">{m.value}</p>
                  <p className="text-xs text-[#a3a3a3] mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="px-8 py-8 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-3">
                  Challenge
                </h3>
                <p className="text-sm text-[#fafafa] leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-3">
                  Approach
                </h3>
                <p className="text-sm text-[#fafafa] leading-relaxed">
                  {study.approach}
                </p>
              </div>
              <div>
                <h3 className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-3">
                  Result
                </h3>
                <p className="text-sm text-[#fafafa] leading-relaxed">
                  {study.result}
                </p>
              </div>
            </div>

            {/* Stack */}
            <div className="px-8 pb-8 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[#a3a3a3] border border-[#262626] rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
