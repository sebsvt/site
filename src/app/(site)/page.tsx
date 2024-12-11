"use client";

import FeaturesSection from "@/components/(site)/feature-section";
import HeroSection from "@/components/(site)/hero-section";
import PricingSection from "@/components/(site)/pricing-section";
import ProductSection from "@/components/(site)/product-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <ProductSection />
    </>
  );
}
