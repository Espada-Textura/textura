// mudules
import '@styles/components/Topbar.css'
import {
    useNavigate,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
import {
    useTheme,
    Divider,
    MenuItem,
    Tooltip,
    Button,
    Avatar,
    Container,
    Menu,
    Typography,
    IconButton,
    Toolbar,
    Box,
    AppBar,
    ListItemIcon,
    Dialog,
    DialogContent,
    useMediaQuery,
} from '@mui/material'
import { Logout } from '@mui/icons-material'
import { MdLensBlur, MdLogin } from 'react-icons/md'
import { BsFillGearFill, BsFillPaletteFill } from 'react-icons/bs'
import { FiPlusCircle } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import PleaseSignInDialog from '@components/PleaseSignInDialog'
import MenuButton from '@components/topBar/MenuButton'
import UploadForm from '@components/UploadForm'

// State
import { useDispatch, useSelector } from 'react-redux'
import { getIsSignedIn, getCurrentUser } from '@redux/users/selectors'
import { signOut } from '@redux/users/operations'

// Images
import TexturaLogo from '@assets/logo.png'
import { ClassNames } from '@emotion/react'

const TopBarNew = () => {
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
            style: 'top-bar-btn',
            icon: <FaHome className="topber-btn-icon" />,
            to: '/',
        },
        {
            tag: 'Art',
            style: 'top-bar-btn ',
            icon: <BsFillPaletteFill className="topber-btn-icon" />,
            to: '/art',
        },

        {
            tag: 'Post',
            style: 'top-bar-btn',
            icon: <FiPlusCircle className="topber-btn-icon" />,
            action: function () {
                if (isSignedIn) {
                    handleShow()
                } else {
                    setPleaseSignInDialogStatus(true)
                }
            },
        },
        {
            tag: 'Setting',
            style: 'top-bar-btn',
            icon: <BsFillGearFill className="topber-btn-icon" />,
            action: function () {
                if (isSignedIn) {
                    // handleShow()
                    if (location.pathname !== '/profile') navigate('/profile')
                } else {
                    setPleaseSignInDialogStatus(true)
                }
            },
        },
    ]
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [currentPath, setPath] = useState('')
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [pleaseSignInDialogStatus, setPleaseSignInDialogStatus] =
        useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const selector = useSelector((state) => state)
    const isSignedIn = getIsSignedIn(selector)
    const currentUser = getCurrentUser(selector)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    // methods
    const PushTo = function (e = {}, pathname = '') {
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

    return (
        <AppBar
            position="static"
            className="topbar-main-layout"
            sx={{ opacity: 0.95 }}
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
                                justifyContent: 'center',
                            },
                        }}
                    >
                        <MenuButton pages={pages} currentPath={currentPath} />
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
                            className={
                                'topbar-btn-sing-up d-flex flex-row gap-2 align-content-center algin-items-center'
                            }
                            sx={{
                                my: 2,
                                fontWeight: 'bold',
                                color: '#E64E4E !important',
                                display: 'block',
                                borderRadius: 16,
                                mx: { xs: 0, md: 1 },
                                padding: matches ? '0.3rem 2rem' : '0.6rem',
                            }}
                        >
                            <MdLogin
                                className={'topber-btn-icon align-self-center'.concat(
                                    matches ? ' d-none' : ''
                                )}
                            />
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
