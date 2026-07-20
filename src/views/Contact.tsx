import AmbientMeshBackground from "../components/AmbientMeshBackground";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0B]">
      <AmbientMeshBackground />
      <PageHeader
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Contact"
        title="Tell us what you're building, or what's broken."
        description="Send the details, or book a 30-minute call. We will scope the work before quoting."
      />
      <ContactSection showIntro={false} showFooter={false} />
    </div>
  );
}
