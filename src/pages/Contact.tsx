import { useEffect } from "react";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0B]">
      <AmbientMeshBackground />
      <PageHeader
        seo={{
          title: "Contact Kuber Tech Solutions",
          description:
            "Contact Kuber Tech Solutions to scope AI, cloud, and full-stack product engineering work.",
          path: "/contact",
        }}
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Contact"
        title="Tell us what you're building, or what's broken."
        description="Send the details, or book a 30-minute call. We will scope the work before quoting."
      />
      <ContactSection showIntro={false} showFooter={false} />
    </div>
  );
}
