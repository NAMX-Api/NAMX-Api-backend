import React from 'react';
import '../assets/css/styles.css';

function Footer() {
    return (
        <div  className="footer section">
            {/* <footer className="footer section"> */}
                <div className="shape shape__big"></div>
                <div className="shape shape__small"></div>

                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="ri-steering-line"></i> Elecar
                        </a>
                        <p className="footer__description">
                            <p>We offer the best electric cars of</p>
                            <p>the most recognized brands in</p>
                            <p>the world.</p>
                        </p>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">
                            Company
                        </h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Cars</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">History</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Shop</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">
                            Information
                        </h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Request a quote</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Find a dealer</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Contact us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">
                            Follow us
                        </h3>

                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social_link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social_link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social_link">
                                <i className="ri-twitter-line"></i>
                            </a>
                        </ul>
                    </div>
                </div>

                <span className="footer__copy">
                    &#169; bsdNamx. All rigths reserved
                </span>
            {/* </footer> */}
        </div>
    )
}

export default Footer;