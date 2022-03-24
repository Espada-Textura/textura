import TexturaLogo from '@assets/logo.png'
import FacebookLogo from '@assets/images/facebook.png'
import IGLogo from '@assets/images/instagram.png'
import TwitterLogo from '@assets/images/twitter.png'
import GitHubLogo from '@assets/images/github.png'

import { Link } from 'react-router-dom'

import '@styles/components/Footer.css'

function Footer() {
    return (
        <div>
            <hr></hr>
            <div className="footer-main-layout d-flex flex-lg-row flex-column justify-content-between">
                <div className="footer-info-left d-flex flex-row justify-content-between col-12 col-lg-6">
                    <div className="footer-list">
                        <h5 className="footer-link-text-title mb-3">ABOUT</h5>
                        <ul>
                            <li type="none">
                                <Link
                                    to="/aboutus"
                                    className="footer-link-text"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/contactus"
                                    className="footer-link-text"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Branding
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Events
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className="footer-link-text-title mb-3">PAGE</h5>
                        <ul>
                            <li type="none">
                                <Link to="/" className="footer-link-text">
                                    Home
                                </Link>
                            </li>
                            <li type="none">
                                <Link to="/art" className="footer-link-text">
                                    Arts
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/profile"
                                    className="footer-link-text"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className="footer-link-text-title mb-3">EXPLORE</h5>
                        <ul>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Helps
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Forum
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/contactus"
                                    className="footer-link-text"
                                >
                                    Feedbacks
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className="footer-link-text-title mb-3">
                            DEVELOPER
                        </h5>
                        <ul>
                            <li type="none">
                                <Link
                                    to="/aboutus"
                                    className="footer-link-text"
                                >
                                    Our Developer
                                </Link>
                            </li>
                            <li type="none">
                                <Link
                                    to="/helpnfaq"
                                    className="footer-link-text"
                                >
                                    Support Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-right">
                    <div>
                        <img
                            src={TexturaLogo}
                            alt="Textura Logo"
                            width="115px"
                            height="115px"
                        ></img>
                        <div className="footer-logo-text">Textura</div>
                    </div>
                    <div className="footer-web-info">
                        <p className="non-margin">
                            Textura is a website, community, for digital artists
                            share their works.<br></br>Share your arts with us.
                        </p>
                        <br></br>
                        <div className="community-title mb-2">COMMUNITY</div>
                        <div className="footer-web-info-logo d-flex">
                            <div className="footer-logo-link">
                                <Link to="/">
                                    <img
                                        className="small-logo"
                                        src={TexturaLogo}
                                        alt="Textura Logo"
                                    ></img>
                                </Link>
                            </div>
                            <div className="footer-logo-link">
                                <img
                                    className="small-logo"
                                    src={FacebookLogo}
                                    alt="Facebook Logo"
                                ></img>
                            </div>
                            <div className="footer-logo-link">
                                <img
                                    className="small-logo"
                                    src={IGLogo}
                                    alt="Instagram Logo"
                                ></img>
                            </div>
                            <div className="footer-logo-link">
                                <img
                                    className="small-logo"
                                    src={TwitterLogo}
                                    alt="Twitter Logo"
                                ></img>
                            </div>
                            <div className="footer-logo-link">
                                <img
                                    className="small-logo"
                                    src={GitHubLogo}
                                    alt="GitHub Logo"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-copyright-text d-flex justify-content-between">
                <div>&copy; 2022 TEXTURA. All Right Reserved.</div>
                <div>By - Espada Team, Cambodia</div>
            </div>
        </div>
    )
}

export default Footer
