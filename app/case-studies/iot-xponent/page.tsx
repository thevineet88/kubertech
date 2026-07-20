import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import IoTXponentCaseStudy from "@/views/IoTXponentCaseStudy";

export const metadata: Metadata = buildMetadata({
  title: "Smart IoT Device Management Platform | Kuber Tech Solutions",
  description:
    "Case study covering secure IoT fleet management, AWS IoT Greengrass deployments and Raspberry Pi edge infrastructure.",
  // The Vite app pointed this canonical at /case-studies/iot-platform, a URL
  // that doesn't exist. Corrected to the real route.
  path: "/case-studies/iot-xponent",
});

export default function Page() {
  return <IoTXponentCaseStudy />;
}
