import { Link, useLocation, useNavigate } from 'react-router-dom'
import ToggleSwiich from '@components/ToggleSwiich'
import AuthAnimetion from '@utils/AuthInputAnimation'
import ReactLoading from 'react-loading'
import { Toast } from 'react-bootstrap'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/login_highlight.png'
import { LoginValidation } from '@validations/Auth'
import { useForm } from 'react-hook-form'

import '@styles/pages/Auth.css'

import firebase from 'firebase/compat/app'
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
} from 'firebase/firestore'

import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth'

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

    const GoogleProvider = new GoogleAuthProvider()
    const GitHubProvider = new GithubAuthProvider()

    const singWithProvider = function (provider, rootProvider) {
        const auth = getAuth(app)

        handleToggleLoding()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = rootProvider.credentialFromResult(result)
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                console.log(user)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.email
                // The AuthCredential type that was used.
                const credential = rootProvider.credentialFromError(error)
                // ...
            })
    }

    const [isRegistering, setRegisteringStatus] = useState(false)
    let [user, setUser] = useState({})
    let [logoText, setLogoText] = useState('LOGIN')
    let [isLoginError, setLoginErrorStatus] = useState(false)
    let navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

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
    const onSubmits = (data) => {
        tryToLogin(data)
    }

    async function tryToLogin(userData) {
        const auth = getAuth(app)
        const userForm = userData
        handleToggleLoding()
        await signInWithEmailAndPassword(
            auth,
            userForm.email,
            userForm.password
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
                handleCloseLoding()
            })
    }

    let login = function () {
        tryToLogin()
    }

    const [open, setOpen] = useState(false)
    const handleCloseLoding = () => {
        setOpen(false)
    }
    const handleToggleLoding = () => {
        setOpen(!open)
    }

    return (
        <div className="col-12 d-flex auth-layout">
            <div className="col-12 col-lg-4 col-md-6 d-flex flex-column justify-content-between p-5 auth-form-layout">
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
                    <form
                        onSubmit={handleSubmit(onSubmits)}
                        className="mt-4 form-group"
                    >
                        <div className="auth-input-form">
                            <input
                                type="text"
                                name="email"
                                className={
                                    'form-control auth-input ' +
                                    (errors.email ? 'invalid ' : '')
                                }
                                id="email"
                                placeholder=""
                                {...register('email', LoginValidation.email)}
                            ></input>
                            <p className="auth-invalid-message-text">
                                {errors.email?.message}
                            </p>

                            <label
                                htmlFor="email"
                                className={'form-label auth-label'}
                            >
                                Email
                            </label>
                        </div>
                        <div className="auth-input-form">
                            <input
                                type="password"
                                name="password"
                                className={
                                    'form-control auth-input ' +
                                    (errors.password ? 'invalid ' : '')
                                }
                                id="password"
                                placeholder=""
                                {...register(
                                    'password',
                                    LoginValidation.password
                                )}
                            ></input>
                            <p className="auth-invalid-message-text">
                                {errors.password?.message}
                            </p>
                            <label
                                htmlFor="password"
                                className={'form-label auth-label'}
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
                            <button
                                type="submit"
                                className="btn auth-button auth-button-animetion d-flex"
                                disabled={isRegistering}
                            >
                                {!isRegistering ? 'Next' : 'Registering '}
                                {isRegistering ? (
                                    <ReactLoading
                                        type={'bubbles'}
                                        color={'#fff'}
                                        height={'20px'}
                                        width={'33px'}
                                    />
                                ) : (
                                    ''
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="mb-2 col-12 d-flex">
                        <Button
                            size="large"
                            variant="outlined"
                            startIcon={<GoogleIcon size="large" />}
                            onClick={() => {
                                singWithProvider(
                                    GoogleProvider,
                                    GoogleAuthProvider
                                )
                            }}
                            sx={{ width: 1, mr: 0.25 }}
                        >
                            Google
                        </Button>
                        <Button
                            size="large"
                            variant="outlined"
                            startIcon={<GitHubIcon size="large" />}
                            onClick={() => {
                                singWithProvider(
                                    GitHubProvider,
                                    GithubAuthProvider
                                )
                            }}
                            sx={{ width: 1, ml: 0.25 }}
                        >
                            Git Hub
                        </Button>
                    </div>
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
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Login
