'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import Slider from 'react-slick';
import styles from '../styles/PartnerLogos.module.css'; // Custom CSS module

const PartnerLogos = () => {
    const partners = [
        { name: 'Partner 1', src: '/images/partner1-logo.png', alt: 'Partner 1 Logo' },
        { name: 'Partner 2', src: '/images/partner2-logo.png', alt: 'Partner 2 Logo' },
        { name: 'Partner 3', src: '/images/partner3-logo.png', alt: 'Partner 3 Logo' },
        { name: 'Partner 4', src: '/images/partner4-logo.png', alt: 'Partner 4 Logo' },
        { name: 'Partner 5', src: '/images/partner5-logo.png', alt: 'Partner 5 Logo' },
    ];

    // Fade-in animation for the section
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 150);
        });
    }, []);

    // Slick slider settings
    const sliderSettings = {
        dots: false, // No dots
        infinite: true, // Infinite loop
        speed: 5000, // 5 seconds per slide transition
        slidesToShow: 5, // Show 5 logos on large screens
        slidesToScroll: 1, // Scroll 1 logo at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 0, // Continuous sliding (speed controlled by cssEase)
        cssEase: 'linear', // Smooth continuous motion
        pauseOnHover: true, // Pause on hover
        responsive: [
            {
                breakpoint: 1024, // Tablet and below
                settings: {
                    slidesToShow: 3, // Show 3 logos
                },
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 2, // Show 2 logos
                },
            },
        ],
    };

    return (
        <section className="py-4 bg-white border-top border-bottom">
            <div className="container">
                <p className={`text-center mb-4 ${styles.fadeIn}`}>
                    Whether you’re a teacher seeking adventure or a school looking for reliable talent, we make it happen—seamlessly and with confidence.
                </p>
                <div className={styles.sliderWrapper}>
                    <Slider {...sliderSettings}>
                        {partners.map((partner, index) => (
                            <div key={index} className={styles.logoItem}>
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    width={150} // Adjust based on your logo sizes
                                    height={80} // Adjust based on your logo sizes
                                    className="img-fluid"
                                    style={{ objectFit: 'contain', maxHeight: '80px' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;