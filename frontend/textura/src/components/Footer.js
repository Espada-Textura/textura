import TexturaLogo from '@assets/logo.png'

import '@styles/components/Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer-main-layout col-12">
                <div className="col-2 d-flex">
                    <img
                        src={TexturaLogo}
                        alt="Textura Logo"
                        width="100px"
                        height="100px"
                    ></img>

                    <div className="footer-logo-text">Textura</div>
                </div>
                <div className="col-10"></div>
            </div>
        </div>
    )
}

export default Footer
