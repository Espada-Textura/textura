import '@styles/pages/HelpNFaqs.css'

import helper from '../assets/images/helper.png'
import background from '../assets/images/questions.svg'

import React, { useState } from 'react'

export default function HelpNFaq() {
    const [question, setQuestion] = useState([
        {
            qKey: '1',
            qText: 'Question one',
            bs_target: '#q1',
            qId: 'q1',

            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
        },
        {
            qKey: '2',
            qText: 'Question two',
            bs_target: '#q2',
            qId: 'q2',
            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
        },
        {
            qKey: '3',
            qText: 'Question Three',
            bs_target: '#q3',
            qId: 'q3',
            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
        },
        {
            qKey: '4',
            qText: 'Question Four',
            bs_target: '#q4',
            qId: 'q4',
            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
        },
        {
            qKey: '5',
            qText: 'Question Five',
            bs_target: '#q5',
            qId: 'q5',
            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        },
        {
            qKey: '6',
            qText: 'Question Six',
            bs_target: '#q6',
            qId: 'q6',
            qTextAns:
                'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.',
        },
    ])

    return (
        <div className="container-fluid">
            <div
                className=" top-section mb-3 mb-sm-4 mb-xl-4"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container-sm  bg-top ">
                    <div className=" mt-3 d-flex justify-content-center">
                        <img
                            src={helper}
                            className="top-logo mt-3"
                            alt="logo"
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <p
                            className="fs-5 fw-bold  "
                            children="How Can We Help You?"
                        />
                    </div>
                    <div className="d-flex justify-content-center mb-5 ">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Tell Us Your Issue"
                            aria-label="default input example"
                        />
                    </div>
                </div>
            </div>

            <div className="container-sm header-text">
                <p
                    className="fs-6 text-start fw-bolder"
                    children="Browse Help"
                />
            </div>

            <div className="container-sm second-section mb-5">
                {question.map((qObj) => (
                    <div
                        className="question-container d-grid gap-2 "
                        key={qObj.qKey}
                    >
                        <button
                            className="btn btn-outline-secondary btn-custom"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={qObj.bs_target}
                            aria-expanded="false"
                            aria-controls="collapse"
                            // onClick={() => setOpen((state) => !open)}
                        >
                            <div className="row">
                                <span className="col-11 d-flex justify-content-start align-middle question-text ">
                                    {qObj.qText}
                                </span>
                                <span className="col-1 text-black dropdown-toggle"></span>
                            </div>
                        </button>

                        <div className="collapse" id={qObj.qId}>
                            <div className="card card-body text-white ">
                                <p className="card-text answer-text">
                                    {qObj.qTextAns}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
