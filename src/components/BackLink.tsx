import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackLinkProps {
  to: string;
  label: string;
  className: string;
}

/* The label always names a destination ("Back to Kuber Tech", "Back to
   newsletter"), so this always navigates there. It used to call router.back()
   whenever any browser history existed, which meant it behaved as a browser
   back button and landed wherever the visitor happened to come from — e.g.
   "Back to Kuber Tech" on /contact returned to the previous site instead of
   the homepage. A real <Link> also restores middle-click, open-in-new-tab
   and crawlable markup, which the <button> lost. */
export default function BackLink({ to, label, className }: BackLinkProps) {
  return (
    <Link href={to} className={className}>
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
