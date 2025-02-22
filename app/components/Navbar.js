'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Load Bootstrap JS client-side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container">
                {/* Brand */}
                <Link href="/" className="navbar-brand fw-bold">
                    Esloverseas
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
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/features" className="nav-link">
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/pricing" className="nav-link">
                                Pricing
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
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/dropdown1" className="dropdown-item">
                                        Dropdown 1
                                    </Link>
                                </li>
                                <li className="dropdown dropend">
                                    <a
                                        className="dropdown-item dropdown-toggle"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Deep Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/deep-dropdown1" className="dropdown-item">
                                                Deep Dropdown 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/deep-dropdown2" className="dropdown-item">
                                                Deep Dropdown 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/deep-dropdown3" className="dropdown-item">
                                                Deep Dropdown 3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/deep-dropdown4" className="dropdown-item">
                                                Deep Dropdown 4
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/deep-dropdown5" className="dropdown-item">
                                                Deep Dropdown 5
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/dropdown2" className="dropdown-item">
                                        Dropdown 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown3" className="dropdown-item">
                                        Dropdown 3
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dropdown4" className="dropdown-item">
                                        Dropdown 4
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}