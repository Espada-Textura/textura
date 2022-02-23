import { Link } from 'react-router-dom'
import AuthAnimetion from '@utils/AuthInputAnimation'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/register_highlight.jpg'
import ReactLoading from 'react-loading'
import { Toast } from 'react-bootstrap'
import { RegisterValidation } from '@validations/Auth'

import { useForm } from 'react-hook-form'

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

    const [isRegistering, setRegisteringStatus] = useState(false)
    const [isRegisterError, setRegisterErrorStatus] = useState(false)
    const [isRegisterComplete, setRegisterCompleteStatus] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmits = (data) => {
        setRegisteringStatus(true)
        tryToSignUp(data)
    }

    async function tryToSignUp(userData) {
        const auth = getAuth(app)
        const userForm = userData
        await createUserWithEmailAndPassword(
            auth,
            userForm.email,
            userForm.password
        )
            .then((resp) => {
                const user = resp.user
                createUser(user.uid, userForm)
                    .then(() => {
                        setRegisteringStatus(true)
                    })
                    .catch(() => {
                        setRegisteringStatus(false)
                        setRegisterErrorStatus(true)
                    })
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setRegisterCompleteStatus(true)
                    })
                    .catch((error) => {
                        console.log('Email verification error', error)
                        setRegisterErrorStatus(true)
                    })
            })
            .catch((error) => {
                setRegisteringStatus(false)
                setRegisterErrorStatus(true)
                console.log('Register error', error)
            })
    }

    async function createUser(uid, userData) {
        const db = getFirestore(app)
        await setDoc(doc(db, 'users', uid), {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
        })
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

    return (
        <div className="col-12 d-flex auth-layout">
            <div className="col-12 col-sm-12 col-md-6 col-xl-4 p-5 d-flex flex-column justify-content-between auth-form-layout">
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
                        <div className="d-flex form-row">
                            <div className="auth-input-form col">
                                <input
                                    type="text"
                                    name="firstName"
                                    className={
                                        'form-control auth-input ' +
                                        (errors.firstName ? 'invalid ' : '')
                                    }
                                    id="firstName"
                                    placeholder=""
                                    {...register(
                                        'firstName',
                                        RegisterValidation.firstName
                                    )}
                                ></input>
                                <p className="auth-invalid-message-text">
                                    {errors.firstName?.message}
                                </p>
                                <label
                                    htmlFor="firstName"
                                    className={'form-label auth-label'}
                                >
                                    First name
                                </label>
                            </div>
                            <div className="temp-space"></div>
                            <div className="auth-input-form col">
                                <input
                                    type="text"
                                    name="lastName"
                                    className={
                                        'form-control auth-input ' +
                                        (errors.lastName ? 'invalid ' : '')
                                    }
                                    id="lastName"
                                    placeholder=""
                                    {...register(
                                        'lastName',
                                        RegisterValidation.lastName
                                    )}
                                ></input>
                                <p className="auth-invalid-message-text">
                                    {errors.lastName?.message}
                                </p>
                                <label
                                    htmlFor="lastName"
                                    className={'form-label auth-label'}
                                >
                                    Last name
                                </label>
                            </div>
                        </div>
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
                                {...register('email', RegisterValidation.email)}
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
                                    RegisterValidation.password
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
                        <div className="d-flex justify-content-end">
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
            <div className="col-0 col-md-6 col-xl-8 d-none d-md-flex auth-image-layout">
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
                delay={20000}
                autohide
                animation={true}
            >
                <Toast.Header>
                    <strong className="me-auto">Authentication</strong>
                    <small>Registering error</small>
                </Toast.Header>
                <Toast.Body>
                    Invalid email or email has been registered. Please try
                    another email.
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default Register
