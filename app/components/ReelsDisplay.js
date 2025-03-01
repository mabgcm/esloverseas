'use client';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReelsDisplay = ({ reels }) => {
    // Use a ref to ensure the slider initializes properly
    const sliderRef = useRef(null);

    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Process Instagram embeds after the script loads
        const handleScriptLoad = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        script.onload = handleScriptLoad;

        // Cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Slider settings
    const sliderSettings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop through slides
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Show 3 reels at a time (adjust for responsiveness)
        slidesToScroll: 1, // Scroll 1 reel at a time
        centerMode: true, // Center the active slide
        centerPadding: '0', // No padding on sides (adjust if needed)
        arrows: true, // Show navigation arrows for easier manual sliding
        autoplay: true, // Automatically slide (optional, can remove if not desired)
        autoplaySpeed: 3000, // Slide every 3 seconds (optional)
        responsive: [
            {
                breakpoint: 1024, // Medium screens and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 600, // Small screens and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
        // Ensure slider initializes after Instagram embeds are processed
        afterChange: () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        },
    };

    return (
        <div className="container mt-5 mb-5"> {/* Margin top (mt-5) and bottom (mb-5) */}
            <Slider ref={sliderRef} {...sliderSettings}>
                {reels.map((reel, index) => (
                    <div key={index} className="col text-center">
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '300px',
                                height: '400px',
                                overflow: 'hidden',
                                margin: '0 auto',
                            }}
                        >
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={reel.url} // e.g., "https://www.instagram.com/reel/ABC123/"
                                data-instgrm-version="14"
                                style={{
                                    position: 'absolute',
                                    top: '-50px', // Shift up to crop the top
                                    left: '-50px', // Shift left to crop the left edge
                                    width: '400px', // Fixed width to constrain the visible area
                                    margin: 0,
                                    maxWidth: '540px',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReelsDisplay;