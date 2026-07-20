import type { ReactNode } from "react";
import { BACK_LINK_MUTED_CLASS } from "../lib/layout";
import JsonLd from "./JsonLd";
import BackLink from "./BackLink";

interface PageHeaderProps {
  /** Title/description/canonical now come from each route's generateMetadata. */
  jsonLd?: object | object[];
  backTo: { fallback: string; label: string; alwaysFallback?: boolean };
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: "wide" | "article";
  children?: ReactNode;
}

const variants = {
  wide: {
    maxWidth: "max-w-[1440px]",
    containerPadding: "px-5 sm:px-8 lg:px-12",
    backTopPad: "pt-6 sm:pt-8",
    heroTopPad: "pt-10 sm:pt-14",
    heroBottomPad: "pb-8 sm:pb-10",
    titleClamp: "clamp(1.75rem, 5vw, 3.4rem)",
    titleClass: "max-w-3xl",
    descriptionClass: "text-[16px] sm:text-[18px] text-[color:var(--color-text-muted)] leading-[1.6] max-w-2xl",
  },
  article: {
    maxWidth: "max-w-[680px]",
    containerPadding: "px-5 sm:px-0",
    backTopPad: "pt-6 sm:pt-10",
    heroTopPad: "pt-10 sm:pt-12",
    heroBottomPad: "pb-8",
    titleClamp: "clamp(1.75rem, 4.5vw, 2.6rem)",
    titleClass: "",
    descriptionClass: "text-[17px] sm:text-[19px] text-[color:var(--color-text-subtle)] leading-[1.55]",
  },
} as const;

export default function PageHeader({
  jsonLd,
  backTo,
  eyebrow,
  title,
  description,
  variant = "wide",
  children,
}: PageHeaderProps) {
  const v = variants[variant];

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}

      <div className={`relative z-10 ${v.maxWidth} mx-auto ${v.containerPadding} ${v.backTopPad}`}>
        <BackLink
          fallback={backTo.fallback}
          label={backTo.label}
          alwaysFallback={backTo.alwaysFallback}
          className={BACK_LINK_MUTED_CLASS}
        />
      </div>

      <div className={`relative z-10 ${v.maxWidth} mx-auto ${v.containerPadding} ${v.heroTopPad} ${v.heroBottomPad}`}>
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-4">
          {eyebrow}
        </p>
        <h1
          className={`font-medium leading-[1.15] tracking-[-0.03em] text-[color:var(--color-text)] mb-6 ${v.titleClass}`}
          style={{ fontSize: v.titleClamp }}
        >
          {title}
        </h1>
        {description && <div className={v.descriptionClass}>{description}</div>}
        {children}
      </div>
    </>
  );
}
