import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import {
    MdRssFeed,
    MdAssignmentInd,
    MdSupervisorAccount,
    MdInventory,
} from 'react-icons/md'
import { FaTags } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import { AiFillSetting, AiFillEdit } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import profilePic from '@assets/images/ado.jpg'
import '@styles/pages/Profile.css'

function Profile() {
    useEffect(() => {
        const navmenu = document.getElementsByClassName('propage-navtag')
        for (let item = 0; item < navmenu.length; item++) {
            navmenu[item].addEventListener('click', () => {
                document
                    .getElementsByClassName('propage-active')[0]
                    .classList.remove('propage-active')
                navmenu[item].classList.add('propage-active')
            })
        }
    }, [])

    return (
        <div className="propage-mainlayout">
            {/*----------------- COVER PAGE  -----------------*/}
            <div className="container-fuid propage-cover-container d-flex flex-row align-items-end justify-content-between">
                <img
                    id="propage-procover"
                    className="sticky-top"
                    src="https://drive.google.com/uc?export=view&id=1rG9YQh8LNzFAO6RrzMbTcrDkfGsgaLt-"
                    alt="cover picture"
                ></img>

                <button
                    className="propage-editpro-btn btn d-inline-flex flex-row justify-items-center align-items-center m-3 p-0"
                    type="button"
                >
                    <AiFillEdit
                        id="propage-editpro-icon"
                        className="m-3 me-2"
                    />
                    <p id="propage-editpro-text" className="m-0 p-3 ps-0">
                        Edit Profile
                    </p>
                </button>

                <div className="propage-profile d-flex flex-row align-items-center m-3">
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
                <div className="propage-poppularityinfo d-flex flex-row align-items-center justify-content-center p-2 px-4">
                    <div className="propage-postinfo text-center px-3 position-relative">
                        <p className="fw-lighter">Posts</p>
                        <p id="propage-postcount" className="fw-bold">
                            60
                        </p>
                    </div>

                    <div className="propage-followerinfo text-center px-3 position-relative">
                        <p className="fw-lighter">Followers</p>
                        <p id="propage-followercount" className="fw-bold">
                            5k
                        </p>
                    </div>

                    <div className="propage-followinginfo text-center px-3 position-relative">
                        <p className="fw-lighter">Followings</p>
                        <p id="propage-followingcount" className="fw-bold">
                            2k
                        </p>
                    </div>
                </div>

                <div className="propage-bio d-flex flex-wrap align-items-center justify-content-center text-center px-4 pb-3 pt-2">
                    First, I drink coffee ☕. Then I do things 👨‍💻. Follow
                    Facebook-{'>'} @giovanni_max textura.art/im_auser
                </div>

                <ul className="propage-navmenu px-4 pt-4">
                    <li>
                        <a className="propage-navtag propage-active" href="#">
                            <MdRssFeed className="propage-icon" />
                            Timeline Feeds
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <MdAssignmentInd className="propage-icon" />
                            About
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <MdSupervisorAccount className="propage-icon " />
                            Friends
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <FiActivity className="propage-icon " />
                            Activities
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <MdInventory className="propage-icon " />
                            Archives
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <FaTags className="propage-icon " />
                            Popular Tags
                        </a>
                    </li>
                    <li>
                        <a className="propage-navtag" href="#">
                            <AiFillSetting className="propage-icon " />
                            Settings
                        </a>
                    </li>

                    <li>
                        <a
                            className="propage-navtag mt-3"
                            id="propage-logout-btn"
                            href="#"
                        >
                            <GiExitDoor className="propage-icon " />
                            Log Out
                        </a>
                    </li>
                </ul>
            </div>
            {/*---------------------------- END NAV CONTAINER  ----------------------------*/}

            {/*---------------------------- POST PANEL  ----------------------------*/}
            <div className="propage-postpanel bg-white m-2 mt-3">
                <p className="fs-4 fw-bold m-0">Post</p>
                <div className="propage-postpics"></div>
            </div>
            {/*---------------------------- END POST PANEL ----------------------------*/}
        </div>
    )
}

export default Profile
