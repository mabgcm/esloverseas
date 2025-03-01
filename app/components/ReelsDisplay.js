'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReelsDisplay = ({ reels }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

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
    };

    return (
        <div className="container mt-5 mb-5"> {/* Added margin top (mt-5) and bottom (mb-5) */}
            <Slider {...sliderSettings}>
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