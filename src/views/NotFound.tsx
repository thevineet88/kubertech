import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center">
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 text-center">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#8B5CF6] mb-4">
          404
        </p>
        <h1
          className="font-medium leading-[1.15] tracking-[-0.03em] text-[#FAFAFA] mb-6"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)" }}
        >
          This page doesn't exist.
        </h1>
        <p className="text-[16px] text-white/50 leading-[1.55] mb-8">
          The link might be broken, or the page may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white text-[14px] font-medium rounded-full px-5 py-2.5 hover:bg-[#8B5CF6]-dark transition-colors duration-200"
        >
          Back to Kuber Tech
        </Link>
      </div>
    </div>
  );
}
