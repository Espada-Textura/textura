// modules
import './MenuButton.css'
import { useNavigate, useLocation } from 'react-router-dom'

// components
import Box from '@mui/material/Box'

function MenuButton(props) {
    const pages = props.pages ? props.pages : []

    const navigate = useNavigate()
    const location = useLocation()
    const PushTo = function (e, pathname = '') {
        e.preventDefault()
        if (location.pathname !== '/' + pathname) navigate(pathname)
    }

    return (
        <div>
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
                {pages.map((page) => (
                    <button
                        key={page.tag}
                        onClick={(e) => {
                            if (page.hasOwnProperty('to')) {
                                PushTo(e, page.to)
                            } else {
                                page.action()
                            }
                        }}
                        className={
                            page.to === location.pathname
                                ? 'active ' + page.style
                                : page.style
                        }
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                            borderRadius: 16,
                            mx: 1,
                            px: 2,
                        }}
                    >
                        {/* {page.icon} */}
                        {page.tag}
                    </button>
                ))}
            </Box>
        </div>
    )
}

export default MenuButton
