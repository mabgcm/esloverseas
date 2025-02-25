'use client';
import HeroSection from "./components/Hersection";
import QuickIntro from "./components/QuickIntro";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <HeroSection />

        <QuickIntro />

        {/* Key Benefits */}
        <h2>Why Choose ESL Overseas?</h2>
        <div>
          <h3>For Teachers: Adventure Awaits</h3>
          <p>
            Teach English and explore Asia’s vibrant cultures, from bustling cities to serene landscapes—all
            with our support.
          </p>
        </div>
        <div>
          <h3>For Schools: Trusted Teachers</h3>
          <p>
            Get vetted, native English speakers who bring energy and skill to your classrooms, improving
            student outcomes.
          </p>
        </div>
        <div>
          <h3>For Both: Hassle-Free Process</h3>
          <p>
            We handle the details—visas, placement, and more—so teachers and schools can focus on what matters.
          </p>
        </div>

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