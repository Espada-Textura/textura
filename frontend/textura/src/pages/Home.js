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

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getArts } from '@redux/art/operations'
import { allArts } from '@redux/art/selectors'
import React, { useEffect, useState } from 'react'

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
            width: 600,
            image: '1tZmhWvGXsY-JrZSwGjUYXS1Rs0DtYvNj',
        },
        {
            title: 'Setting',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.',
            width: 400,
            image: '1xPqmBYPBc9H5vxFpn4kfOOfRtRsgbck1',
        },
    ]

    // Animation
    const [mounted, toggleMounted] = useState(false)

    const navigate = useNavigate()
    let location = useLocation()
    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }
    // data
    let [arts, setArts] = useState([])

    // redux
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    useEffect(() => {
        // dispatch(getArts())
        // toggleMounted(!mounted)
    }, [])
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
                    <div className="d-flex flex-row ">
                        <h3>TEXTURA |</h3>
                        <h6 className="p-2">ART COMMINUNITY</h6>
                    </div>
                </div>

                <div className="home-main-content-layout-activity-items p-5">
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
            </div>
        </div>
    )
}

export default Home
