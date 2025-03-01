import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Herosection.module.css';


const HeroSection = () => {
    // Array of motivational phrases for the typewriter effect
    const phrases = [
        'Explore vibrant cultures.',
        'Impact students’ lives.',
        'Find financial freedom.',
        'Join a supportive community.',
    ];

    // Array of image URLs
    const images = [
        '/images/hero-teacher-asia/1.jpg',
        '/images/hero-teacher-asia/2.jpg',
        '/images/hero-teacher-asia/3.jpg',
        '/images/hero-teacher-asia/4.jpg',
    ];

    // Typewriter hook configuration
    const [text] = useTypewriter({
        words: phrases,
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 30,
        delaySpeed: 1500,
    });

    // State to manage the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effect to change the image at regular intervals
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={`m-auto pt-5 min-vh-90 d-flex align-items-center ${styles.heroSection}`} style={{ width: '90vw' }}>
            <div className="row align-items-center w-100 h-100 m-0">
                {/* Left Column: Image (5/12 width on desktop, full width on mobile) */}
                <div className="col-12 col-xl-6 d-flex justify-content-center">
                    <img
                        src={images[currentImageIndex]}
                        alt="Teacher exploring Asia"
                        className={`img-fluid rounded w-100 h-auto object-fit-cover ${styles.heroImage}`}
                        style={{ maxHeight: '100vh' }}
                    />
                </div>

                {/* Right Column: Typewriter Text (7/12 width) */}
                <div className="col-xl-6 text-center ml-5">
                    <h1 className={`display-4 fw-bold mb-3 ${styles.heroTitle}`}>Escape the Ordinary. <br /> Teach in Asia.</h1>
                    <p className={`lead mb-4" ${styles.heroSubtitle}`}>Discover a world of adventure, purpose, and growth.</p>
                    <p className={`mb-5 ${styles.heroType}`}>
                        {text}
                        <Cursor cursorStyle="|" />
                    </p>
                    <Link href="/for-teachers">
                        <button className={`btn btn-primary btn-lg `}>Apply Now and Change Your Life</button>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;