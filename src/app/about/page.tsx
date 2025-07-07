import AboutFeature from "@/components/about-feat";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Erik Industrial Rentals",
  description: "Learn about our reliable construction and industrial rental services.",
};

export default function AboutPage() {
  return <AboutFeature />;
}
