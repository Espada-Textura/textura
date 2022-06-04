import '@styles/components/ArtsList.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import Grow from '@mui/material/Grow'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import ArtDetail from '@components/ArtDetail'
import Avatar from '@mui/material/Avatar'
import { useDispatch } from 'react-redux'
import { updateView } from '@redux/art/operations'

function ArtsList(props) {
    const [currentArt, setCurrentArt] = React.useState({})
    const dispatch = useDispatch()

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        border: 'none',
        boxShadow: 0,
    }

    const Label = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'start',
        color: theme.palette.text.secondary,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }))
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="col-12 d-flex flex-row justify-content-center p-3">
            <Masonry columns={{ xs: 1, sm: 3, lg: 4 }} spacing={2}>
                {(props.arts ? props.arts : []).map((item, index) => (
                    <Fade
                        key={index}
                        in={true}
                        style={{
                            transformOrigin: '0 0 0',
                            cursor: 'pointer',
                        }}
                        {...(true ? { timeout: 200 } : {})}
                        onClick={() => {
                            setCurrentArt(item)
                            handleClickOpen()
                        }}
                    >
                        <div>
                            <img
                                src={item.path}
                                srcSet={item.path}
                                alt={item.title}
                                style={{
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderRadius: 12,
                                    display: 'block',
                                    width: '100%',
                                    minHeight: '50px',
                                    backgroundColor: '#f0f0f0',
                                }}
                                onClick={() => {
                                    dispatch(updateView(item))
                                }}
                            />
                        </div>
                    </Fade>
                ))}
            </Masonry>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={modalStyle}>
                            <ArtDetail art={currentArt} close={handleClose} />
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default ArtsList
