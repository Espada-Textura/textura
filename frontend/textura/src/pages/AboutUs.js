import TexturaLogo from '@assets/logo.png'
import { FiMail } from 'react-icons/fi'

import '@styles/pages/AboutUs.css'

function AboutUs() {
    return (
        <div className="aboutUs-main-layout">
            <section className="aboutUs-info pb-5 pt-5">
                <div className="d-flex m-4 justify-content-between">
                    <div className="aboutUs-info-part col-7">
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
                    <div className="aboutUs-logo-part col-4 d-flex m-8">
                        <img
                            className="logo"
                            src={TexturaLogo}
                            alt="Textura Logo"
                        ></img>
                    </div>
                </div>
            </section>
            <section className="aboutUs-dev-info pb-5 pt-5">
                <div className="row pd-3">
                    <h2 className="dev-info-title pt-4 pb-4">DEVELOPER</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-4 mb-3 mb-md-0 text-center">
                        <img
                            className="dev-profile"
                            src={TexturaLogo}
                            alt="Espada Logo"
                        ></img>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <h4 className="mb-3">
                            <b>ESPADA TEAM</b>
                        </h4>
                        <h5 className="mb-3"> CEO And Developer</h5>
                        <p className="mb-4">
                            ESPADA is a group of four students majors in
                            Information Technology Engineering, Royal University
                            of Phnom Penh, Cambodia.
                            <br></br>We are developing techs to help people.
                        </p>
                        <div className="contact">
                            <FiMail size={30} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
