import React from 'react'
import image from '../../Images/MyLogo1.jpg'
import './FooterComponent.css'

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        {/* Your logo here */}
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="footer__links">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/about">About</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/services">Services</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social-media">
                        {/* Add your social media icons or links here */}
                        <a href="https://www.facebook.com">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default FooterComponent;