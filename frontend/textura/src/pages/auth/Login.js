import { Link } from 'react-router-dom'
import ToggleSwiich from '@components/ToggleSwiich'
import AuthAnimetion from '@utils/AuthInputAnimation'

import TexturaLogo from '@assets/logo.png'
import AuthHighlight from '@images/login_highlight.png'

import '@styles/pages/Auth.css'

function Login() {
    AuthAnimetion('auth-input', 'auth-label')
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
                        <h1 className="auth-title mt-3">Login</h1>
                        <h5 className="auth-wellcome-text mt-3">
                            Wellcome back to the textura.
                        </h5>
                    </div>

                    <div className="mt-4">
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

                            <button className="btn auth-button">Next</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Link className="auth-a-create" to="/register">
                            Create an account
                        </Link>

                        <h5 className="auth-wellcome-text">
                            Can not login ?
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
                        <img className="position-img" src={AuthHighlight} />
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
        </div>
    )
}

export default Login
