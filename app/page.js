'use client';
import CTA from "./components/Cta";
import HeroSection from "./components/Hersection";
import PartnerLogos from "./components/PartnerLogos";
import QuickIntro from "./components/QuickIntro";
import dynamic from 'next/dynamic';


// Dynamically import ReelsDisplay with SSR disabled
const ReelsDisplay = dynamic(() => import('./components/ReelsDisplay'), {
  ssr: false,
});

export default function Home() {

  const reels = [
    { url: 'https://www.instagram.com/reel/DGlIhdQNSYU' },
    { url: 'https://www.instagram.com/reel/DCxIYTxtxab' },
    { url: 'https://www.instagram.com/reel/DCYpRSLoLzK' },
    { url: 'https://www.instagram.com/reel/DFvnpO2o3_N' },
  ];

  return (
    <>
      <div className="text-center">
        <HeroSection />
        <QuickIntro />
        <PartnerLogos />
        <CTA />
        <ReelsDisplay reels={reels} />
      </div>

    </>
  );
}