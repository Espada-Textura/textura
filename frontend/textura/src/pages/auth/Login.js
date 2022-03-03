import { Link, useNavigate } from 'react-router-dom'
import ToggleSwiich from '@components/ToggleSwiich'
import AuthAnimetion from '@utils/AuthInputAnimation'
import ReactLoading from 'react-loading'
import { Toast } from 'react-bootstrap'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'

import TexturaLogo from '@assets/logo.png'
import { LoginValidation } from '@validations/Auth'
import { useForm } from 'react-hook-form'

import '@styles/pages/Auth.css'

import { useDispatch, useSelector } from 'react-redux'
import { signIn, getCurrentUser } from '@redux/users/operations'
import { signInAction } from '@redux/users/actions'

// import {
//     getAuth,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
//     GithubAuthProvider,
// } from 'firebase/auth'

function Login() {
    AuthAnimetion('auth-input', 'auth-label')
    const dispatch = useDispatch()
    const [isImgLoaded, setImgLoadedStatus] = useState(false)
    // const GoogleProvider = new GoogleAuthProvider()
    // const GitHubProvider = new GithubAuthProvider()

    // const singWithProvider = function (provider, rootProvider) {
    //     handleToggleLoding()
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = rootProvider.credentialFromResult(result)
    //             const token = credential.accessToken
    //             // The signed-in user info.
    //             const user = result.user
    //             console.log(user)
    //             // ...
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code
    //             const errorMessage = error.message
    //             // The email of the user's account used.
    //             const email = error.email
    //             // The AuthCredential type that was used.
    //             const credential = rootProvider.credentialFromError(error)
    //             // ...
    //         })
    // }

    const [isRegistering, setRegisteringStatus] = useState(false)
    let [isLoginError, setLoginErrorStatus] = useState(false)
    let navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    let imageHiligthPathFromGoogle =
        'https://drive.google.com/uc?export=view&id=1l2qvdx5bqzXaAEDqbENKnsFVrpPMr-JK'

    const onSubmits = (data) => {
        handleToggleLoding()
        let signInPromiss = dispatch(signIn(data))
        signInPromiss
            .then((signInResp) => {
                let getUserPromiss = dispatch(
                    getCurrentUser(signInResp.user.uid)
                )
                getUserPromiss.then((userRespData) => {
                    if (userRespData.exists()) {
                        let user = userRespData.data()
                        user.uid = signInResp.user.uid
                        user.isSignedIn = true
                        dispatch(signInAction(user))
                        navigate('/')
                    } else {
                        setLoginErrorStatus(true)
                        handleCloseLoding()
                    }
                })
            })
            .catch((error) => {
                setLoginErrorStatus(true)
                handleCloseLoding()
            })
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
                        <h1 className="auth-title mt-3">Login</h1>
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
                    {/* <div className="mb-2 col-12 d-flex">
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
                    </div> */}
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
                <Grow direction="up" in={isImgLoaded}>
                    <div className="position-img-outer">
                        <div className="position-img-inner">
                            <img
                                className="position-img"
                                src={imageHiligthPathFromGoogle}
                                onLoad={() => {
                                    setImgLoadedStatus(true)
                                }}
                            />
                        </div>
                    </div>
                </Grow>
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
