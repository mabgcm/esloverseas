'use client';
import { useEffect } from 'react';
import { FaGlobe, FaUsers, FaCheckCircle } from 'react-icons/fa'; // Import icons from react-icons
import styles from '../styles/KeyBenefits.module.css'; // Optional custom CSS module

const KeyBenefits = () => {
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
        <section className="py-5 bg-light">
            <div className="container">
                {/* Main Heading */}
                <h2 className="display-5 fw-bold text-center mb-5 fade-in">Why Choose ESL Overseas?</h2>

                {/* Benefits Cards */}
                <div className="row g-4 justify-content-center">
                    {/* For Teachers Card */}
                    <div className="col-12 col-md-4 fade-in">
                        <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <FaGlobe className="display-4 text-primary mb-3" />
                                <h3 className="card-title h4 fw-bold">For Teachers: Adventure Awaits</h3>
                                <p className="card-text lead">
                                    Teach English and explore Asia’s vibrant cultures, from bustling cities to serene
                                    landscapes—all with our support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* For Schools Card */}
                    <div className="col-12 col-md-4 fade-in">
                        <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <FaUsers className="display-4 text-success mb-3" />
                                <h3 className="card-title h4 fw-bold">For Schools: Trusted Teachers</h3>
                                <p className="card-text lead">
                                    Get vetted, native English speakers who bring energy and skill to your classrooms,
                                    improving student outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* For Both Card */}
                    <div className="col-12 col-md-4 fade-in">
                        <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
                            <div className="card-body d-flex flex-column align-items-center">
                                <FaCheckCircle className="display-4 text-info mb-3" />
                                <h3 className="card-title h4 fw-bold">For Both: Hassle-Free Process</h3>
                                <p className="card-text lead">
                                    We handle the details—visas, placement, and more—so teachers and schools can focus on
                                    what matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;