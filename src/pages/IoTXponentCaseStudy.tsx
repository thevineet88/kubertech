import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";

const metrics = [
  {
    value: "6 mo",
    label: "Active engagement building and evolving the IoT platform.",
  },
  {
    value: "AWS IoT",
    label: "Greengrass-powered edge deployments and OTA updates.",
  },
  {
    value: "Secure",
    label: "Private connectivity using Tailscale with no public exposure.",
  },
  {
    value: "Fleet",
    label: "Centralized deployment, versioning and rollback across devices.",
  },
];

const approach = [
  {
    n: "01",
    title: "Secure device provisioning",
    body: "Every Raspberry Pi joined a private network through Tailscale before registration with AWS IoT Greengrass, enabling secure remote management without exposing devices to the public internet.",
  },
  {
    n: "02",
    title: "Automated deployments",
    body: "GitHub Actions and AWS IoT Greengrass delivered repeatable over-the-air deployments for every managed device with consistent release workflows.",
  },
  {
    n: "03",
    title: "Fleet version management",
    body: "Every deployed component maintained version history, traceability and controlled rollback capabilities across the complete fleet.",
  },
  {
    n: "04",
    title: "Real-time communication",
    body: "MQTT powered live telemetry and command exchange between Raspberry Pi devices and AWS IoT Core.",
  },
  {
    n: "05",
    title: "Offline-first architecture",
    body: "Devices continued operating locally while storing telemetry and automatically synchronizing with the cloud when connectivity returned.",
  },
  {
    n: "06",
    title: "Production-ready infrastructure",
    body: "Provisioning, firmware storage, deployment automation and infrastructure were designed for long-term scalability and operational reliability.",
  },
];

const stack = [
  { category: "Edge Computing", items: "Raspberry Pi, AWS IoT Greengrass" },
  {
    category: "Infrastructure",
    items: "AWS IoT Core, Amazon S3, AWS ECR, GitHub Actions",
  },
  { category: "Connectivity", items: "MQTT, CAN Bus, Tailscale" },
  {
    category: "Backend",
    items: "Provisioning, firmware management, OTA deployments",
  },
  { category: "DevOps", items: "CI/CD, fleet management, rollback strategy" },
  {
    category: "Team",
    items: "Frontend, Backend, DevOps and QA (mobile app excluded)",
  },
];

export default function IoTXponentCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Seo
        title="Smart IoT Device Management Platform | Kuber Tech Solutions"
        description="Case study covering secure IoT fleet management, AWS IoT Greengrass deployments and Raspberry Pi edge infrastructure."
        path="/case-studies/iot-platform"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6">
        <BackLink
          fallback="/case-studies"
          label="Back"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] transition-colors duration-200"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-12">
        <p className="text-[12px] uppercase tracking-wider text-[color:var(--color-accent)] mb-4">
          IoT case study
        </p>

        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(1.75rem,5vw,3.8rem)" }}
        >
          Smart IoT Device Management Platform
        </h1>

        <p className="text-[18px] text-white/60 max-w-3xl leading-[1.6]">
          A cloud-connected IoT platform managing Raspberry Pi powered devices
          through secure provisioning, real-time communication and over-the-air
          deployments. The challenge was building a reliable edge platform that
          worked both online and offline while managing an entire device fleet.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-[color:var(--color-accent)] text-3xl font-semibold">
                {m.value}
              </p>
              <p className="text-white/60 text-sm mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 max-w-[1440px] mx-auto" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 grid lg:grid-cols-[280px_1fr] gap-12">
        <p className="uppercase text-white/30 text-xs tracking-wider">
          The problem
        </p>
        <div className="space-y-6 text-white/75 leading-7">
          <p>
            The platform powered Raspberry Pi controllers responsible for
            motors, batteries, awnings, solar systems and hardware peripherals.
            Devices needed to remain secure, remotely manageable and
            continuously reliable.
          </p>
          <p>
            The biggest challenge was securely provisioning devices, deploying
            software remotely, synchronizing cloud and local state and
            maintaining reliable operation even without internet connectivity.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-[1440px] mx-auto" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <p className="uppercase text-white/30 text-xs tracking-wider mb-10">
          What we built
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approach.map((a) => (
            <div
              key={a.n}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <p className="text-[color:var(--color-accent)] text-4xl font-semibold mb-4">
                {a.n}
              </p>
              <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
              <p className="text-white/60 text-sm leading-7">{a.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 max-w-[1440px] mx-auto" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <p className="uppercase text-white/30 text-xs tracking-wider mb-8">
          Tech stack
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((s) => (
            <div
              key={s.category}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-[color:var(--color-accent)] uppercase text-xs font-semibold mb-2">
                {s.category}
              </p>
              <p className="text-white/60 text-sm leading-6">{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 max-w-[1440px] mx-auto" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <h2 className="text-4xl mb-4">Building connected products?</h2>
        <p className="text-white/60 max-w-xl mb-8">
          We help teams build secure, scalable cloud-connected platforms for
          IoT, embedded systems and modern web applications.
        </p>

        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C4DE8] rounded-full pl-6 pr-2 py-3 transition-colors duration-300"
        >
          <span>See all work</span>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowRight size={12} />
          </div>
        </Link>
      </div>
    </div>
  );
}
