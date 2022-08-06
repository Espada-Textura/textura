import TexturaLogo from '@assets/logo.png'
import FacebookLogo from '@assets/images/facebook.png'
import IGLogo from '@assets/images/instagram.png'
import TwitterLogo from '@assets/images/twitter.png'
import GitHubLogo from '@assets/images/github.png'

import { Link } from 'react-router-dom'

import '@styles/components/Footer.css'

function Footer() {
    return (
        <div className="container-fluid bg-dark pt-3 ">
            <div className="row">
                <div className="col-lg-4 col-sm-12 pb-5 pb-sm-4 logo-setion">
                    <img
                        src={TexturaLogo}
                        className="ms-2 footer-logo"
                        alt="Textura Logo"
                    />
                    <p className="fs-5 text-light ">TEXTURA </p>
                    <p className="col-9 footer-logo-text text-secondary">
                        Textura is a website, community, for digital artists
                        share their works. Share your arts with us.
                    </p>
                    <p className="fs-6 text-light ">Our community </p>
                    <img
                        src={FacebookLogo}
                        className="footer-com-logo"
                        alt="FacebookLogo"
                    />
                    <img
                        src={IGLogo}
                        className="footer-com-logo"
                        alt="IGLogo"
                    />
                    <img
                        src={TwitterLogo}
                        className="footer-com-logo"
                        alt="TwitterLogo"
                    />
                    <img
                        src={GitHubLogo}
                        className="footer-com-logo"
                        alt="IGLogo"
                    />
                </div>
                <div className="col-lg-8 col-sm-12">
                    {/* new row */}
                    <div className="row">
                        <div className="col-6">
                            <p
                                className="footer-underline-head text-secondary fs-6 fw-bolder mb-2"
                                children="About"
                            />
                            <ul className="list-quality text-start">
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/aboutus"
                                        children="About Us"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-1"
                                        to="ContactUs"
                                        children="Contact Us"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="Branding"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-1"
                                        to="/helpnfaq"
                                        children="Events"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/TermsPage"
                                        children="Terms"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 ">
                            <p className="footer-underline-head text-secondary fs-md-6 fw-bolder mb-2">
                                {' '}
                                Explore{' '}
                            </p>
                            <ul className="list-quality text-start align-top">
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="Helps"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="FAQs"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="Forum"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="Feedbacks"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <p className="footer-underline-head text-secondary fs-md-6 fw-bolder mb-2">
                                Page
                            </p>
                            <ul className=" list-quality text-start align-top">
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/"
                                        children="Home"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="Art"
                                        children="Art"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="Profile"
                                        children="Profile"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <p className="footer-underline-head text-secondary fs-md-6 fw-bolder mb-2">
                                {' '}
                                Delveloper{' '}
                            </p>
                            <ul className="list-quality text-start align-top">
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/aboutus"
                                        children="Our developer"
                                    />
                                </li>
                                <li>
                                    <Link
                                        className="list-item text-light lh-lg"
                                        to="/helpnfaq"
                                        children="Support developer"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="col-14 bg-bottom text-light row align-middle"
                width="1200px"
            >
                <div className="col-12 col-md-6 align-middle pt-2 ">
                    <p className="footer-logo-text text-center text-xxl-start ">
                        © 2022 TEXTURA. All Right Reserved
                    </p>
                </div>
                <div className="col-12 col-md-6 align-middle pt-md-2 pb-1">
                    <p className="footer-logo-text text-center text-xxl-end ">
                        By - Espada Team, Cambodia
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
