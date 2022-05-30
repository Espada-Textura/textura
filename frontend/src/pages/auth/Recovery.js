import { Link } from 'react-router-dom'
import AuthAnimetion from '@utils/AuthInputAnimation'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/recovery_highlight.png'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '@redux/users/operations'
import ReactLoading from 'react-loading'
import { Toast } from 'react-bootstrap'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import { useForm } from 'react-hook-form'
import { RecoveryValidation } from '@validations/Auth'

import '@styles/pages/Auth.css'
import { useState } from 'react'

function Recovery() {
    AuthAnimetion('auth-input', 'auth-label')
    const dispatch = useDispatch()

    const [isRequesting, setRequestingStatus] = useState(false)
    const [isRecoveryError, setRecoveryErrorStatus] = useState(false)
    const [isRecoveryComplete, setRecoveryCompleteStatus] = useState(false)
    const [isImgLoaded, setImgLoadedStatus] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmits = (data) => {
        setRequestingStatus(true)
        setRecoveryErrorStatus(false)
        setRecoveryCompleteStatus(false)

        let recoveryPromiss = dispatch(resetPassword(data.email))
        recoveryPromiss
            .then((resp) => {
                setRecoveryCompleteStatus(true)
                setRequestingStatus(false)
            })
            .catch((error) => {
                setRecoveryErrorStatus(true)
                setRequestingStatus(false)
            })
    }

    return (
        <div className="col-12 d-flex auth-layout">
            <div className="col-12 col-sm-12 col-md-6 col-xl-4 d-flex flex-column justify-content-between p-5 auth-form-layout">
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
                    {!isRecoveryComplete ? (
                        <div>
                            <div className="mt-3 mb-3">
                                <h1 className="auth-title mt-3">Recovery</h1>
                                <h5 className="auth-wellcome-text mt-3">
                                    Enter your Textura email to get started.
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
                                        {...register(
                                            'email',
                                            RecoveryValidation.email
                                        )}
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

                                <div className="d-flex justify-content-end">
                                    <button
                                        type="submit"
                                        className="btn auth-button auth-button-animetion d-flex"
                                        disabled={isRequesting}
                                    >
                                        {!isRequesting
                                            ? 'Next'
                                            : 'Registering '}
                                        {isRequesting ? (
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
                    ) : (
                        <Fade in={isRecoveryComplete}>
                            <div className="mt-3 mb-3">
                                <h1 className="auth-title mt-3">
                                    Recovery is completed
                                </h1>
                                <h5 className="auth-wellcome-text mt-3">
                                    We have sent you an email. <br />
                                    Please check your email and follow the
                                    process in email to change your new
                                    password.
                                </h5>
                            </div>
                        </Fade>
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
            <div className="col-0 col-md-6 col-xl-8 d-none d-md-flex auth-image-layout">
                <div className="auth-img-position-layout">
                    <Grow in={isImgLoaded}>
                        <img
                            className="position-img"
                            src={AuthHighlight}
                            onLoad={() => {
                                setImgLoadedStatus(true)
                            }}
                        />
                    </Grow>
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
            <Toast
                onClose={() => setRecoveryErrorStatus(false)}
                show={isRecoveryError}
                className="auth-toast"
                delay={20000}
                autohide
                animation={true}
            >
                <Toast.Header>
                    <strong className="me-auto">Authentication</strong>
                    <small className="text-danger">Recovery error</small>
                </Toast.Header>
                <Toast.Body>
                    Invalid email or email does not exists. <br />
                    Please recheck your email.
                </Toast.Body>
            </Toast>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isRequesting}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Recovery
