import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import RivianCaseStudy from "@/views/RivianCaseStudy";

export const metadata: Metadata = buildMetadata({
  title: "Rivian RAG Knowledge Engine Case Study | Kuber Tech Solutions",
  description:
    "Hybrid dense + sparse retrieval indexing 500k+ documents at sub-200ms latency, 35% lower cloud cost, deployed on Kubernetes.",
  path: "/case-studies/rag-knowledge-engine",
  ogType: "article",
});

export default function Page() {
  return <RivianCaseStudy />;
}
