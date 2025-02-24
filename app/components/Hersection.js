import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';

const HeroSection = () => {
    // Array of motivational phrases for the typewriter effect
    const phrases = [
        'Explore vibrant cultures.',
        'Impact students’ lives.',
        'Find financial freedom.',
        'Join a supportive community.',
    ];

    // Typewriter hook configuration
    const [text] = useTypewriter({
        words: phrases,
        loop: true,
        typeSpeed: 65,
        deleteSpeed: 50,
        delaySpeed: 1500,
    });

    return (
        <section className="min-vh-100 d-flex align-items-center" style={{ width: '100vw' }}>
            <div className="row align-items-center w-100 h-100 m-0">
                {/* Left Column: Image (5/12 width) */}
                <div className="col-5 d-flex justify-content-center">
                    <img
                        src="/images/hero-teacher-asia.jpg" // Replace with your image path
                        alt="Teacher in Asia"
                        className="img-fluid rounded w-100 h-100 object-fit-cover"
                        style={{ maxHeight: '100vh' }}
                    />
                </div>

                {/* Right Column: Typewriter Text (7/12 width) */}
                <div className="col-md-7 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-3">Escape the Ordinary. Teach in Asia.</h1>
                    <p className="lead mb-4">Discover a world of adventure, purpose, and growth.</p>
                    <p className="fs-4 mb-5">
                        {text}
                        <Cursor cursorStyle="|" />
                    </p>
                    <Link href="/for-teachers">
                        <button className="btn btn-primary btn-lg">Apply Now and Change Your Life</button>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;