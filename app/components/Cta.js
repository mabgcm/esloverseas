'use client';
import React from 'react';

const CTA = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mb-4 fw-bold text-dark">
                            Ready to Teach Abroad?
                        </h2>
                        <p className="mb-4 fs-5 text-muted">
                            With ESL Overseas, you’re never alone. Join a community of explorers,
                            tap into proven resources, and let us handle the details. Your questions?
                            Answered. Your concerns? Solved. Your next chapter? Unforgettable.
                        </p>
                        <a
                            href="#get-started"
                            className="btn btn-primary btn-lg px-4 py-2 fw-semibold"
                        >
                            Start Your Journey
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;