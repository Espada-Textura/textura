import '@styles/pages/Home.css'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import HomepagePic from '@images/HomePage_Pic.png'
import EspadaLogo from '@images/Espada.svg'
import UploadForm from '@components/UploadForm'
import ArtistProfile from '@images/ado.jpg'

import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

import { useState } from 'react'

function Home() {
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
        <div className="home-main-layout">
            <section className="pb-5">
                <div className="col-12">
                    <img
                        className="homwpage-pic col-12"
                        src={HomepagePic}
                        alt="Homepage Picture"
                    ></img>
                    <div className="flex col-5">
                        <div className="home-info">
                            <div className="home-info-title">Together Grow</div>
                            <div className="home-info-text">
                                Textura is a place, likely a community, for our
                                Cambodian and Artists to share their arts, earn
                                recognition, express feeling, and emotion
                                through art, and more importantly is to improve
                                the artist community in Cambodia.
                            </div>
                        </div>
                        <div>
                            <button
                                className="home-btn-create-post"
                                onClick={handleShow}
                            >
                                <FiPlusCircle className="home-icon" />
                                CREATE POST
                            </button>
                        </div>
                        <div>
                            <button
                                className="home-btn-sign-up"
                                onClick={(e) => {
                                    PushTo(e, 'register')
                                }}
                            >
                                <FiLogIn className="home-icon" />
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5">
                <div className='mx-4'>
                    <div className="leaderboard-title">Trending Post</div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            {/*Post Ranking #1*/}
                            <img
                                className="ranked-art img-fluid img-thumbnail"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="">
                            {/*Post Ranking #2*/}
                            <img
                                className="ranked-art img-fluid img-thumbnail"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="">
                            {/*Post Ranking #3*/}
                            <img
                                className="ranked-art img-fluid img-thumbnail"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="">
                            {/*Post Ranking #4*/}
                            <img
                                className="ranked-art img-fluid img-thumbnail"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="">
                            {/*Post Ranking #5*/}
                            <img
                                className="ranked-art img-fluid img-thumbnail"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    <div className="leaderboard-title">Popular Arttists</div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            {/*Profile Ranking #1 Artist*/}
                            <img
                                className="artist-profile img-fluid img-thumbnail"
                                src={ArtistProfile}
                                alt="Profile Picture"
                            ></img>
                        </div>
                        <div className="">
                            {/*Profile Ranking #2 Artist*/}
                            <img
                                className="artist-profile img-fluid img-thumbnail"
                                src={ArtistProfile}
                                alt="Profile Picture"
                            ></img>
                        </div>
                        <div className="">
                            {/*Profile Ranking #3 Artist*/}
                            <img
                                className="artist-profile img-fluid img-thumbnail"
                                src={ArtistProfile}
                                alt="Profile Picture"
                            ></img>
                        </div>
                        <div className="">
                            {/*Profile Ranking #4 Artist*/}
                            <img
                                className="artist-profile img-fluid img-thumbnail"
                                src={ArtistProfile}
                                alt="Profile Picture"
                            ></img>
                        </div>
                        <div className="">
                            {/*Profile Ranking #5 Artist*/}
                            <img
                                className="artist-profile img-fluid img-thumbnail"
                                src={ArtistProfile}
                                alt="Profile Picture"
                            ></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
