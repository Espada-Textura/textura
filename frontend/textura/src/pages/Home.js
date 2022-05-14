// modules
import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

// Style
import '@styles/pages/Home.css'

// Function
import { generateVisibleGoogleDriveImageURL } from '@helper'

// Components
import ActivityMenu from '@components/home/ActivityMenu'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getArts } from '@redux/art/operations'
import { allArts } from '@redux/art/selectors'
import { useEffect, useState } from 'react'

function Home() {
    // Animation
    const [state, toggle] = useState(false)

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    let location = useLocation()
    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    // data
    let [arts, setArts] = useState([])

    // redux
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    useEffect(() => {
        dispatch(getArts())
    }, [])
    useEffect(() => {
        setArts(allArts(selector))
    }, [allArts(selector)])
    return (
        <div className="home-main-layout">
            <div>
                <img
                    className="background-img"
                    rel="preload"
                    src={generateVisibleGoogleDriveImageURL()}
                ></img>
            </div>
            <div className="home-main-content-layout">
                <div className="p-5">
                    <div className="d-flex flex-row ">
                        <h3>TEXTURA |</h3>
                        <h6 className="p-2">ART COMMINUNITY</h6>
                    </div>
                </div>

                <div className="home-main-content-layout-activity-items p-5">
                    <ActivityMenu />
                    <ActivityMenu />
                    <ActivityMenu />
                    <ActivityMenu />
                    <ActivityMenu />
                </div>
            </div>
        </div>
    )
}

export default Home
