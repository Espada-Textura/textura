// modules
import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'
import { useTransition, useTrail, animated, config } from 'react-spring'

// Style
import '@styles/pages/Home.css'

// Function
import { generateVisibleGoogleDriveImageURL } from '@helper'

// Components
import ActivityMenu from '@components/home/ActivityMenu'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Footer from '@components/Footer'
import { FiChevronsDown, FiChevronDown } from 'react-icons/fi'
import {
    FiMinus,
    FiMoreHorizontal,
    FiChevronsUp,
    FiChevronUp,
} from 'react-icons/fi'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getArts } from '@redux/art/operations'
import { allArts } from '@redux/art/selectors'
import React, { useEffect, useState, useRef } from 'react'

function Home() {
    // menus
    const allMenu = [
        {
            title: 'Now Trending ART',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            width: 350,
            image: '10ZikNlF86q_oB2Jy_c97UfDL8mv_rlo8',
        },
        {
            title: 'Now Trending ART',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            width: 350,
            image: '1LxfNe067obyHGxcNHinX6NljPPw4QHR4',
        },
        {
            title: 'ARTs',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            width: 350,
            image: '1tZmhWvGXsY-JrZSwGjUYXS1Rs0DtYvNj',
        },
        {
            title: 'Setting',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            width: 300,
            image: '1xPqmBYPBc9H5vxFpn4kfOOfRtRsgbck1',
        },
    ]

    // Animation
    const [mounted, toggleMounted] = useState(false)
    const [showFooter, toggleShowFooter] = useState(false)
    const [footerHigth, setFooterHigth] = useState(0)

    // Elements
    const footerRef = useRef(null)

    const navigate = useNavigate()
    let location = useLocation()
    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }
    // Data
    let [arts, setArts] = useState([])

    // redux
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    // Actions
    useEffect(() => {
        // dispatch(getArts())
        // toggleMounted(!mounted)
        let current = footerRef.current.clientHeight
        setFooterHigth(showFooter ? current : 0)
    }, [showFooter])
    useEffect(() => {
        // setArts(allArts(selector))
    }, [allArts(selector)])

    return (
        <div className="home-main-layout">
            <div>
                <img
                    className="background-img"
                    src={generateVisibleGoogleDriveImageURL()}
                    onLoad={() => {
                        toggleMounted(!mounted)
                    }}
                ></img>
            </div>
            <div className="home-main-content-layout">
                <div className="p-5">
                    <div
                        className="d-flex flex-row "
                        onClick={() => {
                            toggleShowFooter(!showFooter)
                        }}
                    >
                        <h3>TEXTURA |</h3>
                        <h6 className="p-2">ART COMMINUNITY</h6>
                    </div>
                </div>

                <div>
                    <div
                        className="home-main-content-layout-activity-items p-5 pb-0"
                        style={{ transform: `translate(0,-${footerHigth}px)` }}
                    >
                        {allMenu.map((element, index) => {
                            return (
                                <Grow
                                    key={index}
                                    in={mounted}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(mounted
                                        ? { timeout: 500 * (index + 1) }
                                        : {})}
                                >
                                    <div>
                                        <ActivityMenu
                                            title={element.title}
                                            content={element.content}
                                            image={generateVisibleGoogleDriveImageURL(
                                                element.image
                                            )}
                                            width={element.width}
                                        />
                                    </div>
                                </Grow>
                            )
                        })}
                    </div>
                    <div
                        className="footer-trigger"
                        onClick={() => {
                            toggleShowFooter(!showFooter)
                        }}
                    >
                        <FiChevronUp className="footer-open-button mt-2"></FiChevronUp>
                    </div>
                </div>
            </div>
            <div
                id="home-footer"
                ref={footerRef}
                className={
                    showFooter ? 'footer-layout active' : 'footer-layout'
                }
            >
                <div
                    className="footer-close-trigger"
                    onClick={() => {
                        toggleShowFooter(!showFooter)
                    }}
                >
                    <FiChevronDown className="footer-close-button"></FiChevronDown>
                    <FiChevronsDown
                        className="footer-close-button"
                        style={{ color: '#fff' }}
                    />
                    <FiChevronDown className="footer-close-button"></FiChevronDown>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
