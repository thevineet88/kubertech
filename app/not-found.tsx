import type { Metadata } from "next";
import NotFound from "@/views/NotFound";

export const metadata: Metadata = {
  title: "Page not found | Kuber Tech Solutions",
  description: "The page you're looking for doesn't exist.",
  // 404s should never be indexed or canonicalised to a real URL.
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NotFound />;
}
