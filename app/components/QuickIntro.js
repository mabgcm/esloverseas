'use client';
import Image from 'next/image';
import { FaCheckCircle, FaStar, FaHome, FaMoneyBillWave, FaGlobe, FaUserCheck, FaSearch, FaGraduationCap, FaUsers, FaClock, FaThumbsUp, FaHandshake, FaFileContract } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/QuickIntro.module.css';

const QuickIntro = () => {
    return (
        <section className={`py-5 ${styles.quickIntro}`}>
            <div className="container">
                <h2 className="display-5 fw-bold mb-4 text-center col-12">Who We Are</h2>

                {/* Hero Image and Text Side by Side */}
                <div className="row align-items-stretch mb-5" style={{ minHeight: '400px' }}>
                    <div className="col-12 col-md-6">
                        <div style={{ height: '100%', width: '100%', overflow: 'hidden', borderRadius: '8px' }}>
                            <Image
                                src="/images/teacher-asia-map.jpg"
                                alt="Map of Asia with teacher"
                                width={600}
                                height={400}
                                className="img-fluid rounded shadow-sm"
                                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center mt-sm-5">
                        <div>
                            <h4 className='text-center'>Your Gateway to Teaching in Asia.</h4>
                            <p className="lead mb-3 text-md-start">
                                Welcome to ESL Overseas, where your dream of teaching in Asia becomes a reality. We know the journey can feel overwhelming—cultural unknowns, job searches, paperwork, and those nagging what-ifs.
                            </p>
                            <p className="lead mb-3 text-md-start">
                                That’s why we’re here: to guide you every step of the way with confidence and clarity. From planning to thriving abroad, we’ve got you covered.</p>
                            <div className="text-center mt-4">
                                <Link href="/for-teachers">
                                    <button className={`btn btn-primary btn-lg `}>Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Trust Us? - With Icons and Cards */}
                <h2 className="display-5 fw-bold mb-4 text-center col-12">Why Trust Us?</h2>
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 d-flex justify-content-center align-items-center">
                            <FaCheckCircle className="text-success display-6 mb-3" />
                            <h4 className="card-title fw-bold">Insiders with Experience</h4>
                            <p className="lead card-text">
                                We’re more than a service—we’re your partner in adventure. Whether you’re unsure where to begin, how to qualify, or what living abroad entails, our all-in-one solutions transform stress into excitement. Explore Asia’s classrooms with the confidence that comes from our team’s extensive, hands-on experience across the region.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 d-flex justify-content-center align-items-center">
                            <FaStar className="text-success display-6 mb-3" />
                            <h4 className="card-title fw-bold">Proven Expertise</h4>
                            <p className="lead card-text">
                                With years of proven expertise, we offer unmatched insight to help teachers and schools succeed. Our deep regional knowledge—gained from every level and country—ensures you’re in expert hands. Step into your journey with the support needed to thrive, guided by insiders who’ve been there.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold mb-4 text-center col-12">How We Can Help You</h1>
                    <p className="lead text-muted">
                        Tailored solutions to make your journey seamless and exciting.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* Service 1 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaGlobe className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Find Your Perfect Fit
                                </h4>
                                <p className="card-text text-muted">
                                    Discover the right country and job for you with personalized assessments and immersive previews. No more guesswork—just a clear path forward.
                                </p>
                                <Link href="/services/find-your-perfect-fit">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaSearch className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Simplify the Search
                                </h4>
                                <p className="card-text text-muted">
                                    Access curated job listings, expert guides, and real-time advice. We cut through the noise so you don’t have to.
                                </p>
                                <Link href="/services/simplify-the-search">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaGraduationCap className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Get Qualified, Fast
                                </h4>
                                <p className="card-text text-muted">
                                    Boost your credentials with our fast-track programs and verification help. We’ll make sure you’re ready to shine.
                                </p>
                                <Link href="/services/get-qualified-fast">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaMoneyBillWave className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Ease the Money Worries
                                </h4>
                                <p className="card-text text-muted">
                                    Plan your finances with tailored tools, affordable loans, and a safety net for peace of mind.
                                </p>
                                <Link href="/services/ease-the-money-worries">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaUsers className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Bring Family Along
                                </h4>
                                <p className="card-text text-muted">
                                    Get resources to prep your loved ones and stay connected, no matter the distance.
                                </p>
                                <Link href="/services/bring-family-along">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaClock className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Time It Right
                                </h4>
                                <p className="card-text text-muted">
                                    Sync your move with hiring seasons and secure your spot—on your terms.
                                </p>
                                <Link href="/services/time-it-right">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 7 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaThumbsUp className="text-primary display-6 mb-3" />
                                <h4 className=" fw-bold">
                                    Build Your Confidence
                                </h4>
                                <p className="card-text text-muted">
                                    Master the skills and mindset to thrive with workshops, mentors, and a no-fail backup plan.
                                </p>
                                <Link href="/services/build-your-confidence">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 8 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaHandshake className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Trust the Process
                                </h4>
                                <p className="card-text text-muted">
                                    Work with vetted schools and recruiters, backed by honest reviews and on-the-ground insights.
                                </p>
                                <Link href="/services/trust-the-process">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 9 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <FaFileContract className="text-primary display-6 mb-3" />
                                <h4 className="card-title fw-bold">
                                    Commit with Ease
                                </h4>
                                <p className="card-text text-muted">
                                    Navigate contracts worry-free with expert reviews and flexible exit options.
                                </p>
                                <Link href="/services/commit-with-ease">
                                    <p className="text-primary small" style={{ textDecoration: 'none' }}>Learn More</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickIntro;