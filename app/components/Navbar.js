'use client';
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle = {
        color: '#4682b4', // Replace with your desired text color
    };

    const linkHoverStyle = {
        color: '#ff5055', //Theme green
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
                <a href="/" className={styles.logo}>
                    <img src="images/toplogo.png" alt="ESL Overseas Logo" />
                </a>

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
                            <Link href="/teachers" className="nav-link"
                                style={hoveredLink === 'teachers' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('teachers')}
                                onMouseLeave={handleMouseLeave}>
                                For Teachers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/schools" className="nav-link"
                                style={hoveredLink === 'schools' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('schools')}
                                onMouseLeave={handleMouseLeave}>
                                For Schools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/faq" className="nav-link"
                                style={hoveredLink === 'faq' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('faq')}
                                onMouseLeave={handleMouseLeave}>
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                style={hoveredLink === 'jobs' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('jobs')}
                                onMouseLeave={handleMouseLeave}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Jobs
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/china" className="dropdown-item"
                                        style={hoveredLink === 'china' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('china')}
                                        onMouseLeave={handleMouseLeave}>
                                        China
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/japan" className="dropdown-item"
                                        style={hoveredLink === 'japan' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('japan')}
                                        onMouseLeave={handleMouseLeave}>
                                        Japan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/korea" className="dropdown-item"
                                        style={hoveredLink === 'korea' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('korea')}
                                        onMouseLeave={handleMouseLeave}>
                                        Korea
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vietnam" className="dropdown-item"
                                        style={hoveredLink === 'vietnam' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('vietnam')}
                                        onMouseLeave={handleMouseLeave}>
                                        Vietnam
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hong" className="dropdown-item"
                                        style={hoveredLink === 'hong' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('hong')}
                                        onMouseLeave={handleMouseLeave}>
                                        Hong Kong
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/thailand" className="dropdown-item"
                                        style={hoveredLink === 'thailand' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('thailand')}
                                        onMouseLeave={handleMouseLeave}>
                                        Thailand
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/malaysia" className="dropdown-item"
                                        style={hoveredLink === 'malaysia' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('malaysia')}
                                        onMouseLeave={handleMouseLeave}>
                                        Malaysia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/singapore" className="dropdown-item"
                                        style={hoveredLink === 'singapore' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('singapore')}
                                        onMouseLeave={handleMouseLeave}>
                                        Singapore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/taiwan" className="dropdown-item"
                                        style={hoveredLink === 'taiwan' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('taiwan')}
                                        onMouseLeave={handleMouseLeave}>
                                        Taiwan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cambodia" className="dropdown-item"
                                        style={hoveredLink === 'cambodia' ? linkHoverStyle : linkStyle}
                                        onMouseEnter={() => handleMouseEnter('cambodia')}
                                        onMouseLeave={handleMouseLeave}>
                                        Cambodia
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link"
                                style={hoveredLink === 'contact' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeave}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login" className="nav-link"
                                style={hoveredLink === 'login' ? linkHoverStyle : linkStyle}
                                onMouseEnter={() => handleMouseEnter('login')}
                                onMouseLeave={handleMouseLeave}>
                                Log In
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}