"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackLinkProps {
  fallback: string;
  label: string;
  className: string;
  alwaysFallback?: boolean;
}

export default function BackLink({ fallback, label, className, alwaysFallback = false }: BackLinkProps) {
  const router = useRouter();

  const handleBack = () => {
    if (alwaysFallback) {
      router.push(fallback);
      return;
    }
    // react-router tracked its own stack position via history.state.idx.
    // Next has no equivalent, so fall back to whether there's history at all.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button type="button" onClick={handleBack} className={className}>
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}
