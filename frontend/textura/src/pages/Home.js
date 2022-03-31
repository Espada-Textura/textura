import '@styles/pages/Home.css'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import HomepagePic from '@images/HomePage_Pic.png'
import EspadaLogo from '@images/Espada.svg'
import UploadForm from '@components/UploadForm'
import ArtistProfile from '@images/ado.jpg'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Masonry from '@mui/lab/Masonry'
import ArtsList from '@components/ArtsList'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getArts } from '@redux/art/operations'
import { allArts } from '@redux/art/selectors'
import { useEffect, useState } from 'react'

import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

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
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
    ]
    return (
        <div className="home-main-layout">
            <section className="pb-5">
                <div className=" col-12 home-background">
                    {/* <img
                        className="homwpage-pic col-12"
                        src={HomepagePic}
                        alt="Homepage Picture"
                    ></img> */}
                    <div className="flex col-12 col-md-6 p-5 home-main-info-layout">
                        <div className="home-info">
                            <h1 className="home-info-title pb-3">
                                Together Grow
                            </h1>
                            <h4 className="">
                                Textura is a place, likely a community, for our
                                Cambodian and Artists to share their arts, earn
                                recognition, express feeling, and emotion
                                through art, and more importantly is to improve
                                the artist community in Cambodia.
                            </h4>
                        </div>
                        <div className="col-12 pt-3 pb-3">
                            <Button
                                className="home-btn-create-post col-12"
                                onClick={handleShow}
                            >
                                <FiPlusCircle className="home-icon" />
                                CREATE POST
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="home-btn-sign-up col-12"
                                onClick={(e) => {
                                    PushTo(e, 'register')
                                }}
                            >
                                <FiLogIn className="home-icon" />
                                SIGN UP
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="leaderboard-title p-4">New arts</div>
                <ArtsList arts={arts}></ArtsList>
            </section>
        </div>
    )
}

export default Home
