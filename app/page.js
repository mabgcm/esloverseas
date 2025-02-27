'use client';
import HeroSection from "./components/Hersection";
import KeyBenefits from "./components/KeyBenefits";
import PartnerLogos from "./components/PartnerLogos";
import QuickIntro from "./components/QuickIntro";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <HeroSection />
        <QuickIntro />
        <PartnerLogos />
        <KeyBenefits />

        {/* Testimonials */}
        <h2>What People Say</h2>
        <div>
          <blockquote>
            <p>
              “Teaching in Thailand with ESL Overseas was life-changing—great support every step of the way!”
            </p>
            <cite>– Sarah, ESL Teacher</cite>
          </blockquote>
        </div>
        <div>
          <blockquote>
            <p>
              “Their teachers boosted our English program—professional and dependable.”
            </p>
            <cite>– Mr. Kim, Language Center Director</cite>
          </blockquote>
        </div>
      </div>

    </>
  );
}