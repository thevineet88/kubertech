import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackLinkProps {
  fallback: string;
  label: string;
  className: string;
  alwaysFallback?: boolean;
}

export default function BackLink({ fallback, label, className, alwaysFallback = false }: BackLinkProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (alwaysFallback) {
      navigate(fallback);
      return;
    }
    const state = window.history.state as { idx?: number } | null;
    if (state && typeof state.idx === "number" && state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button type="button" onClick={handleBack} className={className}>
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}
