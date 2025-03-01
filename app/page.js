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
    { url: 'https://www.instagram.com/reel/DDw4nORo2ul' },
    { url: 'https://www.instagram.com/reel/DCEVO-motSi' },
    { url: 'https://www.instagram.com/reel/DB1BzNMBesu' },
    { url: 'https://www.instagram.com/reel/DBYtAvwo_HP' },
    { url: 'https://www.instagram.com/reel/DBOWaqAoX5p' },
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