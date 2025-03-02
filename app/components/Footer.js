'use client';
import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import React Icons
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const [newsletterStatus, setNewsletterStatus] = useState(null);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setNewsletterStatus('loading');
        // Simulate API call or form submission
        setTimeout(() => {
            setNewsletterStatus('sent');
        }, 2000);
    };

    return (
        <div id="footer" className={styles.footer}>
            <div className={styles['footer-top']}>
                <div className={styles.row}>
                    <div className={styles['footer-about']}>
                        <a href="/" className={styles.logo}>
                            <img src="images/logo.png" alt="ESL Overseas Logo" />
                        </a>

                        <div className={styles['social-links']}>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className={styles['footer-links']}>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className={styles['footer-links']}>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className={styles['footer-newsletter']}>
                        <h4>Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form
                            action="forms/newsletter.php"
                            method="post"
                            className={styles['php-email-form']}
                            onSubmit={handleNewsletterSubmit}
                        >
                            <div className={styles['newsletter-form']}>
                                <input type="email" name="email" placeholder="Your email" required />
                                <input type="submit" value="Subscribe" />
                            </div>
                            {newsletterStatus === 'loading' && (
                                <div className={`${styles.loading} ${styles.show}`}>Loading</div>
                            )}
                            {newsletterStatus === 'sent' && (
                                <div className={`${styles['sent-message']} ${styles.show}`}>
                                    Your subscription request has been sent. Thank you!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>
                    © <span>Copyright</span> <strong className={styles.sitename}>ESL Overseas</strong> <span>All Rights Reserved</span>
                </p>
                <div className={styles.credits}>
                    Designed by <a href="https://bootstrapmade.com/">RavLink</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;