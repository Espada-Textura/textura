import '@styles/pages/ContactUs.css'

function ContactUs() {
    return (
        <div className="contactUs-main-layout">
            <section className="contactUs-info-sec pt-5 pb-5">
                <div className="contactUs-info col-sm-12 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="contactUs-info-title text-center align-items-center pt-md-3 pb-md-3 pt-sm-0 pb-sm-0">
                        CONTACT TEXTURA
                    </div>
                    <div className="contactUs-info-text text-center align-items-center mt-md-3 mb-md-3 mt-sm-0 mb-sm-0 mr-sm-3 ml-sm-3">
                        Textura welcomes you here, of course, feel free to ask
                        for helps, report issues, and feedback us. We are happy
                        to answer your question.
                    </div>
                </div>
            </section>
            <section className="contactUs-contact-sec pt-5 pb-5">
                <div className="contactUs-contact col-sm-12 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <form className="contactUs-form">
                        <div className="form-box mt-md-3 mb-md-3 mt-sm-1 mb-sm-1">
                            <label>Topic</label>
                            <select className="form-select" required="required">
                                <option value="General/Feedback">
                                    General/Feedback
                                </option>
                                <option value="Copyrightt/Trademark Violation">
                                    Copyrightt/Trademark Violation
                                </option>
                                <option value="Account Mute/Ban">
                                    Account Mute/Ban
                                </option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="form-box mb-3">
                            <label>Full Name</label>
                            <input
                                required="required"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            ></input>
                        </div>
                        <div className="form-box mb-3">
                            <label>E-mail Address</label>
                            <input
                                required="required"
                                type="email"
                                className="form-control"
                                placeholder="E-mail"
                            ></input>
                        </div>
                        <div className="form-box mb-3">
                            <label>Subject</label>
                            <input
                                required="required"
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                            ></input>
                        </div>
                        <div className="form-box mb-3">
                            <label>Message</label>
                            <textarea
                                required="required"
                                class="form-control"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                            className="btn-send-message mt-3 mb-md-3 mt-md-sm-1 mb-sm1"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
