'use client';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Load Bootstrap JS client-side
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //     }
    // }, []);

    const linkStyle = {
        color: '#FFFFFF', // Replace with your desired text color
    };

    const linkHoverStyle = {
        color: '#FFD700', // Replace with your desired hover text color
    };

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.customnavbar}`}>
            <div className="container">
                {/* Brand */}
                <Link href="/" className="navbar-brand fw-bold" style={linkStyle}>
                    Esl Overseas
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div
                    className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className="nav-link"
                                style={hoveredLink === 'home' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link"
                                style={hoveredLink === 'about' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/teachers" className="nav-link">
                                For Teachers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/schools" className="nav-link">
                                For Schools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/faq" className="nav-link">
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Jobs
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/dropdown1" className="dropdown-item">
                                        China
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown2" className="dropdown-item">
                                        Japan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown3" className="dropdown-item">
                                        Korea
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown4" className="dropdown-item">
                                        Vietnam
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown5" className="dropdown-item">
                                        Hong Kong
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown6" className="dropdown-item">
                                        Thailand
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown7" className="dropdown-item">
                                        Malaysia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown8" className="dropdown-item">
                                        Singapore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown9" className="dropdown-item">
                                        Taiwan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown10" className="dropdown-item">
                                        Cambodia
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">
                                Log In
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}