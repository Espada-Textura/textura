import React, { useEffect, useState } from 'react'
import '@styles/components/EditProfile.css'
import profilePic from '@assets/images/ado.jpg'
import { CgClose } from 'react-icons/cg'
import { FiCamera } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import TextareaAutosize from '@mui/base/TextareaAutosize'

function EditProfile(props) {
    const body = document.getElementsByTagName('body')[0]
    let topbar = document.getElementsByClassName('main-layout-header')[0]
    if (props.trigger) {
        body.classList.add('overflow-hidden')
        topbar.classList.add('invisible')
    }

    useEffect(() => {
        topbar = document.getElementsByClassName('main-layout-header')[0]

        const observer = new ResizeObserver((entries) => {
            let width = entries[0].contentRect.width

            if (
                props.trigger == false &&
                width <= 576 &&
                topbar.classList.contains('invisible')
            ) {
                topbar.classList.remove('invisible')
            } else if (width > 576 && topbar.classList.contains('invisible')) {
                topbar.classList.remove('invisible')
            } else if (
                props.trigger &&
                width <= 576 &&
                !topbar.classList.contains('invisible')
            ) {
                topbar.classList.add('invisible')
            }
        })

        observer.observe(body)
        const nav = document.getElementsByClassName('editpro-nav-item')

        for (let index = 0; index < nav.length; index++) {
            nav[index].addEventListener('click', () => {
                document
                    .getElementsByClassName('editpro-nav-actived')[0]
                    .classList.remove('editpro-nav-actived')
                nav[index].classList.add('editpro-nav-actived')
            })
        }
    })

    return props.trigger ? (
        <div className="editpro-container d-flex flex-row justify-content-center ">
            <div className="editpro-inner p-2 col-sm-8 container-sm">
                <button
                    className="editpro-close p-2"
                    type="button"
                    onClick={() => {
                        props.setTrigger(false)
                        if (body.classList.contains('overflow-hidden')) {
                            body.classList.remove('overflow-hidden')
                        }
                    }}
                >
                    <CgClose id="editpro-close-icon" className="fs-4" />
                </button>

                <div className="editpro-header col-12 row justify-content-center container m-0 pt-3 pb-3">
                    <img
                        className="editpro-propic img-fluid col"
                        src={profilePic}
                    ></img>
                    <div className="editpro-name col d-flex flex-column justify-content-center">
                        <p className=" editpro-proname fs-2">
                            Username Lastname
                        </p>
                        <div
                            className="editpro-email"
                            style={{ color: '#0075FF' }}
                        >
                            <a>username@somemail.com</a>
                        </div>
                    </div>
                </div>

                <div className="editpro-content row px-5 pt-3">
                    <div className="editpro-nav col-md-4 p-0 pe-3 text-end ">
                        <div className="editpro-nav-item editpro-nav-actived">
                            <a href="#" id="editpro-general">
                                General
                            </a>
                        </div>
                        <div
                            className="editpro-nav-item "
                            id="editpro-personal-info"
                        >
                            <a href="#">Personal Info</a>
                        </div>
                        <div
                            className="editpro-nav-item"
                            id="editpro-popularity"
                        >
                            <a href="#">Popularity</a>
                        </div>
                        <div className="editpro-nav-item" id="editpro-contact">
                            <a href="#">Contact</a>
                        </div>
                        <div
                            className=" editpro-nav-item"
                            id="editpro-activity-log"
                        >
                            <a href="#">Activity Log</a>
                        </div>
                        <div
                            className=" editpro-nav-item"
                            id="editpro-personal-data"
                        >
                            <a href="#">Personal Data</a>
                        </div>

                        <Dropdown className="d-none editpro-morebtn ">
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                                className="p-0"
                            >
                                More
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="propage-dropdown-menu">
                                <Dropdown.Item
                                    className="editpro-dropdown-item "
                                    id="editpro-dropdown-personal-info"
                                >
                                    <div>Personal Info</div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className=" editpro-dropdown-item"
                                    id="editpro-dropdown-popularity"
                                >
                                    <div>Popularity</div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="editpro-dropdown-item"
                                    id="editpro-dropdown-contact"
                                >
                                    <div>Contact</div>
                                </Dropdown.Item>
                                <Dropdown.Item className="editpro-dropdown-item">
                                    <div>Activity Log</div>
                                </Dropdown.Item>
                                <Dropdown.Item className="editpro-dropdown-item">
                                    <div>Personal Data</div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="editpro-workplace col-md-8 px-3 container">
                        <div className="editpro-pcc ">
                            <div className="editpro-title pt-1">
                                PROFILE AND COVER PHOTO
                            </div>
                            <div className="editpro-pcc-section flex-wrap">
                                <div className="editpro-pcc-pf d-flex flex-row pt-2 pb-2">
                                    <img
                                        className="editpro-pcc-propic img-fluid"
                                        src={profilePic}
                                        alt="profile picture"
                                    ></img>
                                    <div className="editpro-changebtns">
                                        <button
                                            type="button"
                                            className="editpro-change-btn"
                                        >
                                            <FiCamera />
                                        </button>
                                        <button
                                            type="button"
                                            className="editpro-delete-btn"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                <div className="editpro-pcc-pc d-flex flex-row pt-2 pb-2">
                                    <img
                                        className="editpro-pcc-cpic img-fluid"
                                        src="https://drive.google.com/uc?export=view&id=1rG9YQh8LNzFAO6RrzMbTcrDkfGsgaLt-"
                                        alt="cover picture"
                                    ></img>
                                    <div className="editpro-changebtns">
                                        <button
                                            type="button"
                                            className="editpro-change-btn"
                                        >
                                            <FiCamera />
                                        </button>
                                        <button
                                            type="button"
                                            className="editpro-delete-btn"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="editpro-bio pt-1 pb-2">
                            <div className="editpro-title">BIO</div>
                            <div>
                                <TextareaAutosize
                                    className="editpro-bio-textarea"
                                    aria-label="BIO"
                                    style={{
                                        width: '100%',
                                        outline: 'none',
                                        border: '1px solid #C4C4C4',
                                        borderRadius: '10px',
                                        minHeight: '25%',
                                        padding: '1% 2%',
                                    }}
                                    placeholder="First, I drink coffee ☕. Then I do things 👨‍💻.
                                    Follow Facebook-> @giovanni_max
                                    textura.art/im_auser "
                                />
                            </div>
                        </div>
                        <div className="editpro-save-cancle d-flex justify-content-end gap-3">
                            <button className="editpro-savebtn">Save</button>
                            <button
                                className="editpro-closebtn"
                                onClick={() => {
                                    props.setTrigger(false)
                                    if (
                                        body.classList.contains(
                                            'overflow-hidden'
                                        )
                                    ) {
                                        body.classList.remove('overflow-hidden')
                                    }
                                }}
                            >
                                Cancle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ''
    )
}

export default EditProfile
