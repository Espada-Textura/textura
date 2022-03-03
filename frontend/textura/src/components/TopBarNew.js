import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import { MdLineStyle } from 'react-icons/md'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import UploadForm from '@components/UploadForm'
import { Modal } from 'react-bootstrap'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Settings, Logout } from '@mui/icons-material'
import Divider from '@mui/material/Divider'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import { useDispatch, useSelector } from 'react-redux'
import { getIsSignedIn, getCurrentUser } from '@redux/users/selectors'

import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

import { useState } from 'react'

import '@styles/components/Topbar.css'

//  images
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import { FaHome, FaSearch } from 'react-icons/fa'
import { BsFillPaletteFill } from 'react-icons/bs'
import TexturaLogo from '@assets/logo.png'
import ProfileImg from '@images/ado.jpg'

const TopBarNew = () => {
    const [show, setShow] = useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const navigate = useNavigate()
    let location = useLocation()

    const selector = useSelector((state) => state)
    const isSignedIn = getIsSignedIn(selector)
    const currentUser = getCurrentUser(selector)

    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let demoSetting = {
        tag: 'Profile',
        to: '/profile',
        icon: <Settings fontSize="small" />,
    }

    const settings = [
        {
            tag: 'Logout',
            action: function () {
                console.log('logout')
                handleToggleLoding()
            },
            icon: <Logout fontSize="small" />,
        },
    ]

    const pages = [
        {
            tag: 'Home',
            style: 'topbar-btn',
            icon: <FaHome className="topber-btn-icon" />,
            to: '/',
        },
        {
            tag: 'Art',
            style: 'topbar-btn',
            icon: <BsFillPaletteFill className="topber-btn-icon" />,
            to: '/art',
        },
        {
            tag: 'Post',
            style: 'topbar-btn-create-post ',
            icon: <FiPlusCircle className="topber-btn-icon" />,
            action: function () {
                handleShow()
            },
        },
        {
            tag: 'Sing up',
            style: 'topbar-btn-sing-up',
            icon: <FiLogIn className="topber-btn-icon" />,
            to: '/register',
        },
    ]

    const [open, setOpen] = useState(false)
    const handleCloseLoding = () => {
        setOpen(false)
    }
    const handleToggleLoding = () => {
        setOpen(!open)
    }

    return (
        <AppBar position="static" className="topbar-main-layout" elevation={3}>
            <Container maxWidth="" className="topbar-main-layout">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                            flexDirection: 'row',
                        }}
                    >
                        <div className="Topbar-logo-image">
                            <img
                                src={TexturaLogo}
                                alt="Textura Logo"
                                width="40px"
                                height="40px"
                            ></img>
                        </div>
                        <div className="topbar-logo-text ">Textura</div>
                    </Typography>
                    {isSignedIn}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            {/* <MenuIcon /> */}
                            <MdLineStyle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.tag}
                                    onClick={(e) => {
                                        if (page.hasOwnProperty('to')) {
                                            PushTo(e, page.to)
                                        } else if (
                                            page.hasOwnProperty('action')
                                        ) {
                                            page.action()
                                        }
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.icon}
                                        {page.tag}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <div className="Topbar-logo-image">
                            <img
                                src={TexturaLogo}
                                alt="Textura Logo"
                                width="40px"
                                height="40px"
                            ></img>
                        </div>
                    </Typography>

                    {/* <div className="topbar-search-layout">
                        <input
                            className="topbar-search-input"
                            type="text"
                            placeholder="Search..."
                        ></input>
                        <FaSearch className="topbar-search-input-icon" />
                    </div> */}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                                justifyContent: 'flex-end',
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.tag}
                                onClick={(e) => {
                                    if (page.hasOwnProperty('to')) {
                                        PushTo(e, page.to)
                                    } else {
                                        page.action()
                                    }
                                }}
                                className={page.style}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    borderRadius: 16,
                                    mx: 1,
                                    px: 2,
                                }}
                            >
                                {page.icon}
                                {page.tag}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, ml: 1 }}>
                        {isSignedIn ? (
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar alt="Remy Sharp" src={ProfileImg} />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            ''
                        )}

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem
                                onClick={function (event) {
                                    PushTo(event, 'profile')
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={ProfileImg}
                                    sx={{ mr: '16px' }}
                                />
                                {currentUser.firstName +
                                    ' ' +
                                    currentUser.lastName}
                                <br />
                                {currentUser.email}
                            </MenuItem>
                            <Divider />
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting.tag}
                                    onClick={function (event) {
                                        handleCloseUserMenu()
                                        if (setting.hasOwnProperty('to')) {
                                            PushTo(event, setting.to)
                                        } else if (
                                            setting.hasOwnProperty('action')
                                        ) {
                                            setting.action()
                                        }
                                    }}
                                >
                                    <ListItemIcon>{setting.icon}</ListItemIcon>
                                    {setting.tag}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                size="lg"
            >
                <Modal.Body className="topbar-popup-body">
                    <UploadForm />
                </Modal.Body>
            </Modal>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleCloseLoding}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </AppBar>
    )
}
export default TopBarNew
