import Link from "next/link";

interface CtaBandProps {
  heading?: string;
  sub?: string;
}

export default function CtaBand({
  heading = "Ready to build something fast?",
  sub = "Tell us what you need. We scope it properly before quoting, and we move quickly.",
}: CtaBandProps) {
  return (
    <section className="bg-[#1a1a1a] border-y border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-[#fafafa] mb-4">
          {heading}
        </h2>
        <p className="text-[#a3a3a3] max-w-md mx-auto mb-8">{sub}</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-[#ccff00] text-[#1a2200] font-medium rounded hover:bg-[#d9ff33] transition-colors duration-150"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
