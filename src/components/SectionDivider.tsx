import { CONTAINER_WIDTH } from "../lib/layout";

/** Full-bleed hairline between case-study sections. */
export default function SectionDivider() {
  return <div className={`border-t border-white/8 ${CONTAINER_WIDTH} mx-auto`} />;
}
