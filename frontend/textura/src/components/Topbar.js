import '@styles/components/Topbar.css'
import { FaSearch } from 'react-icons/fa'
import TexturaLogo from '@assets/logo.png'

function Topbar() {
    return (
        <div className="Topbar-main-layout d-flex flex-row">
            <div className="Topbar-logo-wrapper">
                <div className="Topbar-logo-image">
                    <img
                        src={TexturaLogo}
                        alt="Textura Logo"
                        width="40px"
                        height="40px"
                    ></img>
                </div>
                <div className="Topbar-logo-text">TEXTURA</div>
            </div>

            <div className="Topbar-vertical-line"> </div>

            <div className="Topbar-search-bar-wrapper">
                <div className="Topbar-search-bar">
                    <div className="Topbar-icon"></div>
                    <FaSearch className="Topbar-search-icon" />
                    <input
                        className="Topbar-input-box"
                        type="text"
                        placeholder="Search..."
                    ></input>
                </div>
                <div className="Topbar-home-nav"></div>
                <div className="Topbar-art-nav"></div>
            </div>

            <div className="Topbar-vertical-line"></div>

            <div className="Topbar-right-button-wrapper">
                <div className="Topbar-create-post-btn"></div>
                <div className="Topbar-signup-btn"></div>
            </div>
        </div>
    )
}
export default Topbar
