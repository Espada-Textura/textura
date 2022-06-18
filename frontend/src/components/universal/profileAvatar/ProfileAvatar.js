// Components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import { Settings, Logout } from '@mui/icons-material'

import { useDispatch, useSelector } from 'react-redux'
import { getIsSignedIn, getCurrentUser } from '@redux/users/selectors'
import { signOut } from '@redux/users/operations'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import './ProfileAvatar.css'
import React from 'react'

function ProfileAvatar(props) {
    // data
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
    let currentUser = props.currentUser ? props.currentUser : {}

    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [anchorElUser, setAnchorElUser] = useState(null)

    return (
        <Box sx={{ flexGrow: 0, ml: 1 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                        alt={currentUser.firstName ? currentUser.firstName : ''}
                        src={
                            currentUser.avatarIcon ? currentUser.avatarIcon : ''
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
                        alt={currentUser.firstName ? currentUser.firstName : ''}
                        src={
                            currentUser.avatarIcon ? currentUser.avatarIcon : ''
                        }
                        sx={{ mr: '16px' }}
                    />
                    {currentUser.firstName + ' ' + currentUser.lastName}
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
                            } else if (setting.hasOwnProperty('action')) {
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
    )
}

export default ProfileAvatar
