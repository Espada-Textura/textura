import { Link, useLocation, useNavigate } from 'react-router-dom'
import ToggleSwiich from '@components/ToggleSwiich'
import AuthAnimetion from '@utils/AuthInputAnimation'
import { Toast } from 'react-bootstrap'
import { useState } from 'react'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/login_highlight.png'

import '@styles/pages/Auth.css'

import firebase from 'firebase/compat/app'
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyA-l-SFtlQtcSF_BG-b9HX40UBhFUSLYmE',
    authDomain: 'textura-9fcd3.firebaseapp.com',
    databaseURL:
        'https://textura-9fcd3-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'textura-9fcd3',
    storageBucket: 'textura-9fcd3.appspot.com',
    messagingSenderId: '57186236723',
    appId: '1:57186236723:web:427c0020ffd3f8318b2646',
    measurementId: 'G-5D6TBYG6BD',
}

const app = firebase.initializeApp(firebaseConfig)

function Login() {
    AuthAnimetion('auth-input', 'auth-label')

    let [formUser, setFormUser] = useState({ email: '', password: '' })
    let [user, setUser] = useState({})
    let [logoText, setLogoText] = useState('LOGIN')
    let [isLoginError, setLoginErrorStatus] = useState(false)
    let navigate = useNavigate()
    let imageHiligthPathFromGoogle =
        'https://drive.google.com/uc?export=view&id=1l2qvdx5bqzXaAEDqbENKnsFVrpPMr-JK'

    async function getUsers(uid) {
        const db = getFirestore(app)
        await getDoc(doc(db, 'users', uid)).then((resp) => {
            if (resp.exists()) {
                setUser(resp.data())
                let user = resp.data()
                setLogoText(`Hi ${user.firstName} ${user.lastName}`)
                navigate('/')
            } else {
                console.log('Failed to get user data by UID')
            }
        })
    }

    async function tryToLogin() {
        const auth = getAuth(app)
        await signInWithEmailAndPassword(
            auth,
            formUser.email,
            formUser.password
        )
            .then((userCredential) => {
                const user = userCredential.user
                let uid = userCredential.user.uid
                getUsers(uid)
            })
            .catch((error) => {
                setLoginErrorStatus(true)
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    let login = function () {
        tryToLogin()
    }

    return (
        <div className="col-12 d-flex auth-layout">
            <div className="col-12 col-lg-4 col-md-6 d-flex flex-column justify-content-between p-5">
                <div>
                    <div className="d-flex">
                        <div className="text-center">
                            <Link to="/">
                                <img
                                    className="auth-image m-2"
                                    src={TexturaLogo}
                                />
                            </Link>
                            <h5 className="auth-logo-text">Textura</h5>
                        </div>
                    </div>
                    <div className="mt-3 mb-3">
                        <h1 className="auth-title mt-3">{logoText}</h1>
                        <h5 className="auth-wellcome-text mt-3">
                            Wellcome back to the textura.
                        </h5>
                    </div>

                    <div className="mt-4">
                        <div className="mb-4 auth-input-form">
                            <input
                                type="email"
                                name="email"
                                className="form-control auth-input"
                                id="email"
                                placeholder=""
                                onChange={handleFormChange}
                            ></input>
                            <label
                                htmlFor="email"
                                className="form-label auth-label"
                            >
                                Email
                            </label>
                        </div>
                        <div className="mb-4 auth-input-form">
                            <input
                                name="password"
                                type="password"
                                className="form-control auth-input"
                                id="password"
                                placeholder=""
                                onChange={handleFormChange}
                            ></input>
                            <label
                                htmlFor="password"
                                className="form-label auth-label"
                            >
                                Password
                            </label>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex auth-stay-logined-in">
                                <ToggleSwiich fors="stay" />
                                <label
                                    htmlFor="stay"
                                    className="auth-stay-logined-in-text"
                                >
                                    Stay logined in
                                </label>
                            </div>

                            <button onClick={login} className="btn auth-button">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Link className="auth-a-create" to="/register">
                            Create an account
                        </Link>

                        <h5 className="auth-wellcome-text">
                            Can not login ?{' '}
                            <Link className="auth-a-recovery" to="/recovery">
                                Recovery Password
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-8 col-lg-8 col-md-6 d-none d-md-flex auth-image-layout">
                <div className="position-img-outer">
                    <div className="position-img-inner">
                        <img
                            className="position-img"
                            src={imageHiligthPathFromGoogle}
                        />
                    </div>
                </div>
                <div className="auth-profile-Highlight-layout">
                    <div className="auth-profile-Highlight-layout-content">
                        <div className="d-flex">
                            <div></div>
                            <div>
                                <h5 className="auth-Highlight-text">Daily</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                onClose={() => setLoginErrorStatus(false)}
                show={isLoginError}
                className="auth-toast"
                delay={10000}
                autohide
                animation={true}
            >
                <Toast.Header>
                    <strong className="me-auto">Authentication</strong>
                    <small>Error</small>
                </Toast.Header>
                <Toast.Body>
                    Failed to login, Invalid email or password.
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default Login
