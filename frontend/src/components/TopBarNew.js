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

import { MdLensBlur, MdLogin } from 'react-icons/md'

import { useTheme } from '@mui/material/styles'

import { useDispatch, useSelector } from 'react-redux'

import { getIsSignedIn, getCurrentUser } from '@redux/users/selectors'
import { signOut } from '@redux/users/operations'
import PleaseSignInDialog from '@components/PleaseSignInDialog'
import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'

import { useState, useEffect } from 'react'

import '@styles/components/Topbar.css'

// Dialog
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'

//  images
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import { FaHome, FaSearch } from 'react-icons/fa'
import { BsFillPaletteFill } from 'react-icons/bs'
import TexturaLogo from '@assets/logo.png'
import ProfileImg from '@images/ado.jpg'

const TopBarNew = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const [pleaseSignInDialogStatus, setPleaseSignInDialogStatus] =
        useState(false)
    const navigate = useNavigate()
    let location = useLocation()
    const dispatch = useDispatch()

    const selector = useSelector((state) => state)
    const isSignedIn = getIsSignedIn(selector)
    const currentUser = getCurrentUser(selector)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {}, [])

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

    let demoSetting = {
        tag: 'Profile',
        to: '/profile',
        icon: <Settings fontSize="small" />,
    }

    const settings = [
        {
            tag: 'Logout',
            action: function () {
                dispatch(signOut())
                navigate('login')
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
                if (isSignedIn) {
                    handleShow()
                } else {
                    setPleaseSignInDialogStatus(true)
                }
            },
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
        <AppBar
            position="static"
            className="topbar-main-layout"
            sx={{ opacity: 0.98 }}
            elevation={0}
        >
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
                            <MdLensBlur />
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

                    {isSignedIn ? (
                        <Box sx={{ flexGrow: 0, ml: 1 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt={
                                            currentUser.firstName
                                                ? currentUser.firstName
                                                : ''
                                        }
                                        src={
                                            currentUser.avatarIcon
                                                ? currentUser.avatarIcon
                                                : ''
                                        }
                                    />
                                </IconButton>
                            </Tooltip>

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
                                        alt={
                                            currentUser.firstName
                                                ? currentUser.firstName
                                                : ''
                                        }
                                        src={
                                            currentUser.avatarIcon
                                                ? currentUser.avatarIcon
                                                : ''
                                        }
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
                                        <ListItemIcon>
                                            {setting.icon}
                                        </ListItemIcon>
                                        {setting.tag}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        <Button
                            onClick={(e) => {
                                navigate('register')
                            }}
                            className={'topbar-btn-sing-up'}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                borderRadius: 16,
                                mx: { xs: 0, md: 1 },
                                px: { xs: 0, md: 2 },
                            }}
                        >
                            <MdLogin className="topber-btn-icon" />
                            {matches ? 'Sign Up' : ''}
                        </Button>
                    )}
                </Toolbar>
            </Container>
            <PleaseSignInDialog
                open={pleaseSignInDialogStatus}
                toggleDialog={setPleaseSignInDialogStatus}
                agreeAction={() => {
                    navigate('login')
                }}
            />

            {/* <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                size="lg"
            >
                <Modal.Body className="topbar-popup-body">
                    <UploadForm />
                </Modal.Body>
            </Modal> */}

            <Dialog
                fullScreen={fullScreen}
                open={show}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                scroll="body"
            >
                <DialogContent>
                    <div className="">
                        <UploadForm close={handleClose} />
                    </div>
                </DialogContent>
            </Dialog>
        </AppBar>
    )
}
export default TopBarNew
