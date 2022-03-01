import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MdVerified, MdRssFeed } from 'react-icons/md'
import { FaIdBadge, FaUserFriends, FaArchive, FaTags } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import { AiFillSetting, AiFillEdit } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import { BsArrowRepeat } from 'react-icons/bs'
import profilePic from '@assets/images/ado.jpg'
import '@styles/pages/Profile.css'
import ArtsList from '@components/ArtsList'

function Profile() {
    return (
        <div className="proPage-mainLayout">
            {/*----------------- COVER PAGE  -----------------*/}
            <div className="proPage-cover" id="proPage-coverPic">
                <button className="proPage-editPro-btn">
                    <AiFillEdit id="proPage-editPro-icon" />
                    Edit Profile
                </button>

                <div className="proPage-profile">
                    <div className="proPage-proText">
                        <p className="proPage-name">Profile Name</p>
                        <p className="proPage-username">@iam_auser</p>
                    </div>
                    <div className="proPage-proPicOutLine">
                        <img
                            id="proPage-proPic"
                            src={profilePic}
                            alt="Profile Picture"
                        ></img>
                        <button className="proPage-proPic-edit">
                            <BsArrowRepeat id="proPage-changeIcon" />
                            <p>Edit</p>
                        </button>
                    </div>
                </div>

                <div className="proPage-blurBack"></div>
            </div>
            {/*---------------------------- END COVER PAGE  ----------------------------*/}

            {/*---------------------------- NAV CONTAINER  ----------------------------*/}
            <div className="proPage-navContainer">
                <div className="proPage-followInfo">
                    <div className="proPage-postInfo">
                        <p>Posts</p>
                        <p id="proPage-postCount">--</p>
                    </div>

                    <div className="proPage-followerInfo">
                        <p>Followers</p>
                        <p id="proPage-followerCount">--</p>
                    </div>

                    <div className="proPage-followingInfo">
                        <p>Followings</p>
                        <p id="proPage-followingCount">--</p>
                    </div>

                    <div id="proPage-bio">No Bio.</div>
                </div>

                <ul className="proPage-navMenu">
                    <li>
                        <div className="proPage-navTag"></div>
                        <MdRssFeed className="proPage-icon" />
                        <p>Timeline Feeds</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <FaIdBadge className="proPage-icon" />
                        <p>About</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <FaUserFriends className="proPage-icon" />
                        <p>Friends</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <FiActivity className="proPage-icon" />
                        <p>Activities</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <FaArchive className="proPage-icon" />
                        <p>Archives</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <FaTags className="proPage-icon" />
                        <p>Popular Tags</p>
                    </li>
                    <li>
                        <div className="proPage-navTag"></div>
                        <AiFillSetting className="proPage-icon" />
                        <p>Settings</p>
                    </li>

                    <li>
                        <div className="proPage-navTag"></div>
                        <GiExitDoor className="proPage-icon" />
                        <p>Log Out</p>
                    </li>
                </ul>
            </div>
            {/*---------------------------- END NAV CONTAINER  ----------------------------*/}

            {/*---------------------------- POST PANEL  ----------------------------*/}
            <div className="proPage-postPanel">
                <p>Post</p>
                <div className="proPage-postPics">
                    <ArtsList></ArtsList>
                </div>
            </div>
            {/*---------------------------- END POST PANEL ----------------------------*/}
        </div>
    )
}

export default Profile
