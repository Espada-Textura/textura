import TexturaLogo from '@assets/logo.png'
import EspadaLogo from '@images/Espada.svg'
import { FiMail } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'

import ArtistProfile from '@images/ado.jpg'

import '@styles/pages/AboutUs.css'

function AboutUs() {
    return (
        <div className="aboutUs-main-layout">
            <section className="aboutUs-info pb-5 pt-5">
                <div className="d-flex justify-content-between d-flex flex-column flex-md-row-reverse flex-lg-row m-4 align-items-center">
                    <div className="aboutUs-logo-part d-flex col-md-3 col-sm-12 justify-content-center">
                        <img
                            className="logo"
                            src={TexturaLogo}
                            alt="Textura Logo"
                        ></img>
                    </div>
                    <div className="aboutUs-info-part col-md-9 col-sm-12">
                        <h4 className="info-title">ABOUT TEXTURA</h4>
                        <p className="info-text">
                            Textura is a place, likely a community, for our
                            Cambodian Artists to share their arts, earn
                            recognition, express feeling and emotion through
                            art, and more importantly is to improve the artist
                            community in Cambodia. Textura mainly focuses on
                            Digital Art and Digital painting. We are developing
                            and growing bigger and will add more than just
                            Digital Arts.
                        </p>
                    </div>
                </div>
            </section>
            <section className="aboutUs-dev-team-info pb-5 pt-5">
                <div className=" ">
                    <h2 className="dev-info-title pt-4 pb-4">DEVELOPER</h2>
                </div>
                <div className="d-flex justify-content-center flex-nowrap mt-3 mb-3">
                    <img
                        className="dev-team-profile"
                        src={EspadaLogo}
                        alt="Espada Logo"
                    ></img>
                </div>
                <div className="flex align-items-center justify-content-center">
                    <h4 className="dev-info-title mb-3 text-center">
                        <b>ESPADA TEAM</b>
                    </h4>
                    <p className="info-text mb-4 text-center">
                        ESPADA is a team of four students majors in department
                        of Information Technology Engineering, Royal University
                        of Phnom Penh, Cambodia.
                        <br></br>We are developing techs to help people.
                    </p>
                </div>
            </section>
            <section className="aboutUs-dev-members-info col-12 d-flex justify-content-center pb-5 pt-5">
                <div className="col-12 col-md-7">
                    <div className=" pd-3">
                        <h2 className="dev-info-title pt-4 pb-4">
                            OUR TEAM MEMBERS
                        </h2>
                    </div>
                    <div className="d-flex align-items-center d-flex pt-3 pb-3">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0 text-center">
                            <img
                                className="dev-profile"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="col-sm-12 text-sm-left col-md-8">
                            <h4 className="dev-name mb-3">
                                <b>Misa Pisatto</b>
                            </h4>
                            <h5 className="dev-role mb-3">
                                Fullstack Developer
                            </h5>
                            <p className="mb-4">Im handsome.</p>
                            <div className="contact">
                                <FiMail size={30} />
                                <FaFacebookSquare size={26} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-row-reverse pt-3 pb-3">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0 text-center">
                            <img
                                className="dev-profile"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="col-sm-12 col-md-8 text-end">
                            <h4 className="dev-name mb-3">
                                <b>Hok Lenghak</b>
                            </h4>
                            <h5 className="dev-role mb-3">
                                Frontend Developer
                            </h5>
                            <p className="mb-4">Im handsome.</p>
                            <div className="contact">
                                <FiMail size={30} />
                                <FaFacebookSquare size={26} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center pt-3 pb-3">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0 text-center">
                            <img
                                className="dev-profile"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <h4 className="dev-name mb-3">
                                <b>Yorn Chanvisal</b>
                            </h4>
                            <h5 className="dev-role mb-3">
                                IT Engineering Student/ Frontend Developer Of
                                Textura
                            </h5>
                            <p className="mb-4">
                                Chanvisal is a Second Year College Student who
                                majors in IT Engineering at Royal University of
                                Phnom Penh, Cambodia. He has been developing
                                Textura alongside his teammates, and take part
                                in Frontend.
                            </p>
                            <div className="contact">
                                <FiMail size={30} />
                                <a href="https://web.facebook.com/profile.php?id=100022241988928">
                                    <FaFacebookSquare size={26} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-row-reverse pt-3 pb-3">
                        <div className="col-sm-12 col-md-4 mb-3 mb-md-0 text-center">
                            <img
                                className="dev-profile col-md-4"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="col-sm-12 col-md-8 text-end">
                            <h4 className="dev-name mb-3">
                                <b>Veong Chamreoun</b>
                            </h4>
                            <h5 className="dev-role mb-3">
                                Frontend Developer
                            </h5>
                            <p className="mb-4">Im handsome.</p>
                            <div className="contact">
                                <FiMail size={30} />
                                <FaFacebookSquare size={26} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
