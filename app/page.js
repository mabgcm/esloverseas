'use client';
import CTA from "./components/Cta";
import HeroSection from "./components/Hersection";
import PartnerLogos from "./components/PartnerLogos";
import QuickIntro from "./components/QuickIntro";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <HeroSection />
        <QuickIntro />
        <PartnerLogos />
        <CTA />
      </div>

    </>
  );
}