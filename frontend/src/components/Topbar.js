import '@styles/components/Topbar.css'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import { FaHome, FaSearch } from 'react-icons/fa'
import { BsFillPaletteFill } from 'react-icons/bs'

import { Modal } from 'react-bootstrap'

import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

import { useState } from 'react'

import TexturaLogo from '@assets/logo.png'
import ProfileImg from '@images/ado.jpg'

import UploadForm from '@components/UploadForm'

function Topbar({ children, ...props }) {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    let location = useLocation()
    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="topbar-main-layout col-12">
            <div className="col-12 d-flex  flex-row justify-content-between">
                <div className="d-flex">
                    <div className="Topbar-logo-image">
                        <img
                            src={TexturaLogo}
                            alt="Textura Logo"
                            width="40px"
                            height="40px"
                        ></img>
                    </div>
                    <div className="topbar-logo-text ">Textura</div>
                </div>

                <div></div>

                <div className="d-flex flex-row">
                    <div className="topbar-search-layout">
                        <input
                            className="topbar-search-input"
                            type="text"
                            placeholder="Search..."
                        ></input>
                        <FaSearch className="topbar-search-input-icon" />
                    </div>

                    <div className="">
                        <button
                            className="topbar-btn"
                            onClick={(e) => {
                                PushTo(e, '')
                            }}
                        >
                            <FaHome className="topber-btn-icon" /> Home
                        </button>
                    </div>
                    <div className="">
                        <button
                            className="topbar-btn"
                            onClick={(e) => {
                                PushTo(e, 'art')
                            }}
                        >
                            <BsFillPaletteFill className="topber-btn-icon" />{' '}
                            Arts
                        </button>
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="">
                        <button
                            className="topbar-btn topbar-btn-create-post"
                            onClick={handleShow}
                        >
                            <FiPlusCircle className="topber-btn-icon" /> Create
                            Post
                        </button>
                    </div>
                    <div className="">
                        <button
                            className="topbar-btn topbar-btn-sing-up"
                            onClick={(e) => {
                                PushTo(e, 'register')
                            }}
                        >
                            <FiLogIn className="topber-btn-icon" /> Sing Up
                        </button>
                    </div>
                    <img
                        className="topbar-profile-img"
                        src={ProfileImg}
                        alt="Textura Logo"
                        width="40px"
                        height="40px"
                        onClick={(e) => {
                            PushTo(e, 'profile')
                        }}
                    ></img>
                </div>
            </div>
        </div>
    )
}
export default Topbar
