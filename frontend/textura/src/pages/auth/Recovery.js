import { Link } from 'react-router-dom'
import AuthAnimetion from '@utils/AuthInputAnimation'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/recovery_highlight.png'

import '@styles/pages/Auth.css'
import { useState } from 'react'

function Recovery() {
    AuthAnimetion('auth-input', 'auth-label')

    let [currentStage, setStage] = useState(0)

    const upStage = () => {
        currentStage < 2 ? setStage(currentStage + 1) : setStage(currentStage)
    }
    const downStage = () => {
        currentStage > 0 ? setStage(currentStage - 1) : setStage(currentStage)
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
                        <h1 className="auth-title mt-3">Recovery</h1>
                    </div>
                    {currentStage === 0 ? (
                        <div id="Stage1">
                            <div className="mt-3 mb-3">
                                <h5 className="auth-wellcomet-text mt-3">
                                    Enter your Textura email to get started.
                                </h5>
                            </div>
                            <div className="mt-4 form-group">
                                <div className="mb-4 auth-input-form">
                                    <input
                                        type="email"
                                        className="form-control auth-input"
                                        id="email"
                                        placeholder=""
                                    ></input>
                                    <label
                                        htmlFor="email"
                                        className="form-label auth-label"
                                    >
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={upStage}
                                    className="btn auth-button"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    {currentStage === 1 ? (
                        <div id="Stage2">
                            <div className="mt-3 mb-3">
                                <h5 className="auth-wellcomet-text mt-3">
                                    We have sent you an verification email.{' '}
                                    <br /> Input verification code which contain
                                    in email.
                                </h5>
                            </div>
                            <div className="mt-4 form-group">
                                <div className="mb-4 auth-input-form">
                                    <input
                                        type="number"
                                        className="form-control auth-input"
                                        id="OTP"
                                        placeholder=""
                                    ></input>
                                    <label
                                        htmlFor="email"
                                        className="form-label auth-label"
                                    >
                                        Verification code
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={upStage}
                                    className="btn auth-button"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    {currentStage === 2 ? (
                        <div id="Stage3">
                            <div className="mt-3 mb-3">
                                <h5 className="auth-wellcomet-text mt-3">
                                    Verification code has been verified
                                    successfully.
                                    <br /> Input your new password.
                                </h5>
                            </div>
                            <div className="mt-4 form-group">
                                <div className="mb-4 auth-input-form">
                                    <input
                                        type="password"
                                        className="form-control auth-input"
                                        id="password"
                                        placeholder=""
                                    ></input>
                                    <label
                                        htmlFor="password"
                                        className="form-label auth-label"
                                    >
                                        New password
                                    </label>
                                </div>
                                <div className="mb-4 auth-input-form">
                                    <input
                                        type="password"
                                        className="form-control auth-input"
                                        id="confirmPassword"
                                        placeholder=""
                                    ></input>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="form-label auth-label"
                                    >
                                        Confirm password
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn auth-button">
                                    Next
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                <div>
                    <div>
                        <Link className="auth-a-create" to="/register">
                            Create an account
                        </Link>

                        <h5 className="auth-wellcome-text">
                            <Link className="auth-a-recovery" to="/login">
                                Already has an account
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
                                <h5 className="auth-Highlight-text">
                                    spectacle
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recovery
