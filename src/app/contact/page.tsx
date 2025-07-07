import type React from "react";

import { Metadata } from "next";
import ContactFeat from "@/components/contact-feat";

export const metadata: Metadata = {
  title: "About Erik Industrial Rentals",
  description: "Reach out to us about our reliable construction and industrial rental service",
};

export default function ContactPage() {
  return <ContactFeat />;
}
