import Link from 'next/link';
import Image from 'next/image'; // For optimized images (optional, for the map or teacher image)
import { useEffect } from 'react';
import styles from '../styles/QuickIntro.module.css';


const QuickIntro = () => {
    // Simple fade-in animation using useEffect and CSS classes
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200); // Staggered animation (200ms delay per element)
        });
    }, []);

    return (
        <section className={`py-5 ${styles.quickIntro}`}>
            <div className="container">
                {/* Main Heading with Subtle Animation */}
                <h2 className="display-5 fw-bold mb-4 text-center fade-in">Who We Are</h2>

                {/* Hero Image and Text Side by Side */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 fade-in">
                        <Image
                            src="/images/teacher-asia-map.jpg" // Replace with your image path (e.g., a map of Asia or teacher in Asia)
                            alt="Map of Asia with teacher"
                            width={600} // Adjust based on your image
                            height={400} // Adjust based on your image
                            className="img-fluid rounded shadow-sm"
                            priority // Loads image eagerly for better performance
                        />
                    </div>
                    <div className="col-md-6 fade-in">
                        <h4 className='text-start'>ESL Overseas: Your Trusted Partner for Teaching in Asia</h4>
                        <p className="lead mb-3 text-md-start">
                            We are your gateway to an unforgettable teaching experience in Asia, connecting passionate native English
                            speakers with schools and language centers eager for quality education.
                        </p>
                        <p className="lead mb-3 text-md-start">
                            We understand the challenges you might face — <strong> adapting to new cultures, navigating visas, or stepping into teaching for the first time</strong>. We’ve been there, done that, and faced those same hurdles ourselves. With our deep, firsthand experience across every level and country in Asia, we’re here to guide you every step of the way, solving your problems and ensuring a seamless, rewarding journey.
                        </p>
                        <Link href="/for-teachers">
                            <button className='btn btn-primary btn-lg'>Apply Now and Change Your Life</button>
                        </Link>
                    </div>
                </div>

                {/* Why Trust Us? - With Icons and Cards */}
                <h2 className="display-5 fw-bold mb-4 text-center fade-in">Why Trust Us?</h2>
                <div className="row g-4">
                    <div className="col-md-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3">
                            <i className="bi bi-check-circle-fill text-success display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Insiders with Experience</h4>
                            <p className="lead card-text">
                                We’ve been there—on both sides, at every level, in every country. Our deep understanding of the region ensures you’re in expert hands.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3">
                            <i className="bi bi-star-fill text-success display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Proven Expertise</h4>
                            <p className="lead card-text">
                                With years of hands-on experience, we bring unmatched insight to help teachers and schools thrive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Offer - Styled as Colored Cards Similar to Attachment */}
                <h3 className="h5 fw-bold mb-4 mt-5 text-center text-md-start fade-in">What We Offer</h3>
                <p className="lead mb-3 text-center text-md-start fade-in">
                    We’re committed to providing the best conditions for everyone involved:
                </p>
                <div className="row g-4">
                    <div className="col-md-3 col-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3" style={{ backgroundColor: '#fef3f2', borderRadius: '12px' }}>
                            <i className="bi bi-house-fill text-danger display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Accommodation</h4>
                            <p className="card-text">
                                Comfortable, convenient housing tailored to your needs.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3" style={{ backgroundColor: '#f0f7ff', borderRadius: '12px' }}>
                            <i className="bi bi-cash-stack-fill text-primary display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Allowance</h4>
                            <p className="card-text">
                                Competitive pay and benefits to support your adventure.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3" style={{ backgroundColor: '#e8f8f5', borderRadius: '12px' }}>
                            <i className="bi bi-globe-fill text-success display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Ideal Locations</h4>
                            <p className="card-text">
                                Vibrant, culturally rich destinations across Asia.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 fade-in">
                        <div className="card h-100 border-0 shadow-sm p-3" style={{ backgroundColor: '#fef3f2', borderRadius: '12px' }}>
                            <i className="bi bi-person-check-fill text-danger display-6 mb-3"></i>
                            <h4 className="card-title fw-bold">Top-Tier Teachers</h4>
                            <p className="card-text">
                                Vetted, dedicated native speakers for schools; comprehensive support for teachers.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="lead mt-4 text-center text-md-start fade-in">
                    Whether you’re a teacher seeking adventure or a school looking for reliable talent, we make it happen—seamlessly and with confidence.
                </p>
            </div>
        </section>
    );
};

export default QuickIntro;