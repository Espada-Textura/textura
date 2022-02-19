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
            <div className="footer-main-layout d-flex justify-content-between">
                <div className="footer-info-left d-flex">
                    <div className="footer-margin">
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
                            <li type="none">Contact Us</li>
                            <li type="none">Help &amp; FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-margin">
                        <h5 className="footer-link-text-title mb-3">EXPLORE</h5>
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
                            share their works.<br></br>Share with us.
                        </p>
                        <br></br>
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
            <div className="footer-copyright-text">
                &copy; 2022 TEXTURA, Espada Team - Cambodia
            </div>
        </div>
    )
}

export default Footer
