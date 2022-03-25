import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import EditProfile from '@components/EditProfile.js'
import '@styles/pages/Profile.css'
import profilePic from '@assets/images/ado.jpg'
import ArtsList from '@components/ArtsList'

import {
    MdRssFeed,
    MdAssignmentInd,
    MdSupervisorAccount,
    MdInventory,
    MdPersonAdd,
} from 'react-icons/md'
import { FaTags, FaPaperPlane } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import { AiFillSetting, AiFillEdit } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import Dropdown from 'react-bootstrap/Dropdown'

function Profile() {
    const [showPopup, setshowPopup] = useState(false)

    useEffect(() => {
        const navtag = document.getElementsByClassName('propage-navtag')

        //!------- Active State -------!//

        for (let index = 0; index < navtag.length; index++) {
            navtag[index].addEventListener('click', () => {
                document
                    .getElementsByClassName('propage-active')[0]
                    .classList.remove('propage-active')
                navtag[index].classList.add('propage-active')
            })
        }
        //!------- End Active State -------!//
    }, [])

    return (
        <>
            <div className="propage-mainlayout">
                {/*----------------- COVER PAGE  -----------------*/}
                <div className="container-fuid propage-cover-container d-flex flex-row align-items-end justify-content-between">
                    <img
                        id="propage-procover"
                        className="sticky-top"
                        src="https://drive.google.com/uc?export=view&id=1rG9YQh8LNzFAO6RrzMbTcrDkfGsgaLt-"
                        alt="cover picture"
                    ></img>
                    <div>
                        <button
                            className="propage-editpro-btn btn d-inline-flex flex-row justify-items-center align-items-center m-3 me-0 p-0"
                            type="button"
                            onClick={() => {
                                setshowPopup(true)
                            }}
                        >
                            <AiFillEdit className="m-3 propage-pro-icon" />
                            <p
                                id="propage-editpro-text"
                                className="m-0 p-3 ps-0"
                            >
                                Edit Profile
                            </p>
                        </button>
                        <div className="propage-viewother-btn d-flex flex-column m-0 d-none">
                            <button
                                className=" propage-addfriend-btn btn d-inline-flex flex-row justify-items-center align-items-center m-3 me-0 p-0 col"
                                type="button"
                            >
                                <MdPersonAdd className="m-3 propage-pro-icon" />
                            </button>

                            <button
                                className="propage-message-btn btn d-inline-flex flex-row justify-items-center align-items-center m-3  me-0 p-0 col"
                                type="button"
                            >
                                <FaPaperPlane className="m-3 propage-pro-icon" />
                            </button>
                        </div>
                    </div>

                    <div className="propage-profile d-flex flex-row align-items-center m-3 ms-0">
                        <div className="propage-protext d-flex flex-column">
                            <p className="propage-name text-end m-0 fs-1">
                                Profile Name
                            </p>
                            <p className="propage-username text-end m-0 fs-6">
                                @iam_auser
                            </p>
                        </div>

                        <img
                            className="img-fluid propage-propic"
                            //id="propage-proPic"
                            src={profilePic}
                            alt="Profile Picture"
                        ></img>
                    </div>
                </div>
                {/*---------------------------- END COVER PAGE  ----------------------------*/}

                {/*---------------------------- NAV CONTAINER  ----------------------------*/}
                <div className="propage-navcontainer bg-white d-flex flex-column">
                    <div className="propage-poppularityinfo d-flex flex-row align-items-center justify-content-center p-2 px-0">
                        <div className="propage-postinfo text-center px-3 position-relative">
                            <p>Posts</p>
                            <p id="propage-postcount" className="fw-bold">
                                60
                            </p>
                        </div>

                        <div className="propage-followerinfo text-center px-3 position-relative">
                            <p>Followers</p>
                            <p id="propage-followercount" className="fw-bold">
                                5k
                            </p>
                        </div>

                        <div className="propage-followinginfo text-center px-3 position-relative">
                            <p>Followings</p>
                            <p id="propage-followingcount" className="fw-bold">
                                2k
                            </p>
                        </div>
                    </div>

                    <div className="propage-bio d-flex flex-wrap align-items-center justify-content-center text-center px-4 pb-3 pt-2">
                        First, I drink coffee ☕. Then I do things 👨‍💻. Follow
                        Facebook-{'>'} @giovanni_max textura.art/im_auser
                    </div>

                    <div className="propage-navmenu px-4 pt-4 m-0">
                        <div>
                            <a
                                className="propage-navtag propage-active"
                                href="#"
                            >
                                <MdRssFeed className="propage-icon" />
                                Posts
                            </a>
                        </div>
                        <div>
                            <a className="propage-navtag" href="#">
                                <MdAssignmentInd className="propage-icon" />
                                About
                            </a>
                        </div>
                        <div id="propage-friends-nav">
                            <a className="propage-navtag" href="#">
                                <MdSupervisorAccount className="propage-icon " />
                                Friends
                            </a>
                        </div>
                        <div id="propage-activities-nav">
                            <a className="propage-navtag" href="#">
                                <FiActivity className="propage-icon " />
                                Activities
                            </a>
                        </div>
                        <div id="propage-archives-nav">
                            <a className="propage-navtag" href="#">
                                <MdInventory className="propage-icon " />
                                Archives
                            </a>
                        </div>
                        <div className="propage-hide">
                            <a className="propage-navtag" href="#">
                                <FaTags className="propage-icon " />
                                Popular Tags
                            </a>
                        </div>
                        <div className="propage-hide">
                            <a className="propage-navtag" href="#">
                                <AiFillSetting className="propage-icon " />
                                Settings
                            </a>
                        </div>

                        <div className="propage-hide">
                            <a
                                className="propage-navtag mt-3"
                                id="propage-logout-btn"
                                href="#"
                            >
                                <GiExitDoor className="propage-icon " />
                                Log Out
                            </a>
                        </div>

                        <Dropdown className="d-none propage-morebtn">
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                                className="p-0"
                            >
                                More
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="propage-dropdown-menu">
                                <Dropdown.Item
                                    href="#"
                                    className="propage-dropdown-hide"
                                    id="propage-friends-dnav"
                                >
                                    <div>
                                        <MdSupervisorAccount className="propage-icon " />
                                        Friends
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#"
                                    className="propage-dropdown-hide"
                                    id="propage-activites-dnav"
                                >
                                    <div>
                                        <FiActivity className="propage-icon " />
                                        Activities
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#"
                                    className="propage-dropdown-hide"
                                    id="propage-archives-dnav"
                                >
                                    <div>
                                        <MdInventory className="propage-icon " />
                                        Archives
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div>
                                        <FaTags className="propage-icon " />
                                        Popular Tags
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div>
                                        <AiFillSetting className="propage-icon " />
                                        Settings
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {/*---------------------------- END NAV CONTAINER  ----------------------------*/}

                {/*---------------------------- POST PANEL  ----------------------------*/}
                <div className="propage-postpanel bg-white m-2 mt-3 ">
                    <p className="propage-widget-title fs-4 fw-bold m-0 px-4">
                        Post
                    </p>
                    <div>
                        <ArtsList className="propage-postpics pt-0"></ArtsList>
                    </div>
                </div>
                {/*---------------------------- END POST PANEL ----------------------------*/}

                <EditProfile trigger={showPopup} setTrigger={setshowPopup} />
            </div>
        </>
    )
}

export default Profile
