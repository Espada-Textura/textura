import { Link } from 'react-router-dom'
import AuthAnimetion from '@utils/AuthInputAnimation'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/register_highlight.jpg'
import ReactLoading from 'react-loading'
import { Toast } from 'react-bootstrap'
import { RegisterValidation } from '@validations/Auth'

import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import '@styles/pages/Auth.css'

import firebase from 'firebase/compat/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth'

import { useState } from 'react'
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
// const auth = getAuth(app)

function Register() {
    AuthAnimetion('auth-input', 'auth-label')
    const [formUser, setFormUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    const [isRegistering, setRegisteringStatus] = useState(false)
    const [isRegisterError, setRegisterErrorStatus] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmits = (data) => {
        console.log(data)
    }

    let firstNameValidation = {
        required: true,
        maxLength: 20,
    }

    async function tryToSignUp() {
        const auth = getAuth(app)

        await createUserWithEmailAndPassword(
            auth,
            formUser.email,
            formUser.password
        )
            .then((resp) => {
                const user = resp.user
                createUser(user.uid).then(() => {
                    setRegisteringStatus(false)
                })
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Done send email')
                    })
                    .catch((error) => {
                        console.log('Email verification error', error)
                    })
            })
            .catch((error) => {
                setRegisteringStatus(false)
                console.log('Register error', error)
            })
    }

    async function createUser(uid) {
        const db = getFirestore(app)
        await setDoc(doc(db, 'users', uid), {
            firstName: formUser.firstName,
            lastName: formUser.lastName,
            email: formUser.email,
        })
    }

    function signUp() {
        // setRegisteringStatus(true)
        // tryToSignUp()
    }

    let createAccount = function () {
        // let email = 'misapisatto@gmail.com'
        // let password = 'Misa5454'
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user
        //         sendEmailVerification(auth.currentUser)
        //             .then(() => {
        //                 console.log('done send email')
        //             })
        //             .catch((error) => {
        //                 console.log('Email verification error', error)
        //             })
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code
        //         const errorMessage = error.message
        //     })
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <div className="col-12 d-flex auth-layout">
            <div className="col-12 col-xl-4 col-lg-6 d-flex flex-column justify-content-between p-5">
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
                        <h1 className="auth-title mt-3">Register</h1>
                        <h5 className="auth-wellcome-text mt-3">
                            One Textura account is all you need to access all
                            Textura services.
                        </h5>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmits)}
                        className="mt-4 form-group"
                    >
                        <div className="mb-4 d-flex form-row">
                            <div className="auth-input-form col">
                                <input
                                    type="text"
                                    name="firstName"
                                    className={
                                        errors.firstName
                                            ? 'invalid form-control auth-input'
                                            : 'form-control auth-input'
                                    }
                                    id="firstName"
                                    placeholder=""
                                    {...register(
                                        'firstName',
                                        RegisterValidation.firstName
                                    )}
                                ></input>
                                <label
                                    htmlFor="firstName"
                                    className={
                                        errors.firstName
                                            ? 'invalid form-label auth-label'
                                            : 'form-label auth-label'
                                    }
                                >
                                    First name
                                </label>
                            </div>
                            <div className="temp-space"></div>
                            <div className="auth-input-form col">
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control auth-input"
                                    id="lastName"
                                    placeholder=""
                                    {...register(
                                        'lastName',
                                        RegisterValidation.lastName
                                    )}
                                ></input>
                                {errors.lastName?.type}
                                <label
                                    htmlFor="lastName"
                                    className="form-label auth-label"
                                >
                                    Last name
                                </label>
                            </div>
                        </div>
                        <div className="mb-4 auth-input-form">
                            <input
                                type="text"
                                name="email"
                                className="form-control auth-input"
                                id="email"
                                placeholder=""
                                {...register('email', RegisterValidation.email)}
                            ></input>
                            {errors.email?.message && (
                                <p>{errors.email?.message}</p>
                            )}
                            <label
                                htmlFor="email"
                                className="form-label auth-label"
                            >
                                Email
                            </label>
                        </div>
                        <div className="mb-4 auth-input-form">
                            <input
                                type="password"
                                name="password"
                                className="form-control auth-input"
                                id="password"
                                placeholder=""
                                {...register(
                                    'password',
                                    RegisterValidation.password
                                )}
                            ></input>
                            {errors.password?.type}
                            <label
                                htmlFor="password"
                                className="form-label auth-label"
                            >
                                Password
                            </label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button
                                onClick={signUp}
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
                    <div>
                        <Link className="auth-a-create" to="/login">
                            Already has an account
                        </Link>

                        <h5 className="auth-wellcome-text">
                            Can not login ?
                            <Link className="auth-a-recovery" to="/recovery">
                                {' '}
                                Recovery Password
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-8 col-xl-8 col-lg-8 col-md-6 d-none d-md-flex auth-image-layout">
                <div className="position-img-outer">
                    <div className="position-img-inner">
                        <img className="position-img" src={AuthHighlight} />
                    </div>
                </div>
                <div className="auth-profile-Highlight-layout">
                    <div className="auth-profile-Highlight-layout-content">
                        <div className="d-flex">
                            <div></div>
                            <div>
                                <h5 className="auth-Highlight-text">冷霧</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                onClose={() => setRegisterErrorStatus(false)}
                show={isRegisterError}
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

export default Register
