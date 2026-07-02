import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-paper flex items-center">
      <Seo
        title="Page not found | Kuber Tech Solutions"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 text-center">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-brand mb-4">
          404
        </p>
        <h1
          className="font-medium leading-[1.15] tracking-[-0.03em] text-gray-900 mb-6"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)" }}
        >
          This page doesn't exist.
        </h1>
        <p className="text-[16px] text-gray-500 leading-[1.55] mb-8">
          The link might be broken, or the page may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white text-[14px] font-medium rounded-full px-5 py-2.5 hover:bg-gray-800 transition-colors duration-200"
        >
          Back to Kuber Tech
        </Link>
      </div>
    </div>
  );
}
