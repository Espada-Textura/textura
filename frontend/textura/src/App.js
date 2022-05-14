import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Main from '@layouts/Main'

import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Art from '@pages/Art'
import AboutUs from '@pages/AboutUs'
import ContactUs from '@pages/ContactUs'
import HelpNFaq from '@pages/HelpNFaqs'

import Login from '@pages/auth/Login'
import Register from '@pages/auth/Register'
import Recovery from '@pages/auth/Recovery'

import NotFound from '@pages/NotFound'
import { getCookie, getCookieNoneParse } from '@utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '@redux/users/actions'
import { auth } from '@fire/index'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
    const dispatch = useDispatch()
    let currentUser = getCookie('currentUser')
    let currentUserAvatar = getCookieNoneParse('avatarIcon')

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid
        } else {
        }
    })

    if (currentUser) {
        currentUser.avatarIcon = currentUserAvatar
        dispatch(signInAction(currentUser))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="art" element={<Art />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="helpnfaq" element={<HelpNFaq />} />
                </Route>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery" element={<Recovery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
