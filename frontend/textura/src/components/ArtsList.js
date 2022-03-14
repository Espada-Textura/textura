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

function ArtsList(props) {
    const [currentArt, setCurrentArt] = React.useState({})
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
    const itemData = [
        {
            path: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            path: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
            title: 'Snacks',
        },
        {
            path: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            path: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
            title: 'Tower',
        },
        {
            path: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            path: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            path: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            path: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            path: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
            title: 'Tree',
        },
        {
            path: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            path: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            path: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            path: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
            title: 'Camping Car',
        },
        {
            path: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            path: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            path: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
            title: 'Mountain',
        },
        {
            path: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ]
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
                {(props.arts ? props.arts : itemData).map((item, index) => (
                    <Grow
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
                                src={`${item.path}?w=162&auto=format`}
                                srcSet={`${item.path}?w=162&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderRadius: 12,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                            <div className="d-flex mt-1">
                                {/* <Avatar
                                    alt="Remy Sharp"
                                    src=""
                                    sx={{ width: 24, height: 24 }}
                                /> */}
                                <p className="m-0">{item.title}</p>
                            </div>
                        </div>
                    </Grow>
                ))}
            </Masonry>
            {/* <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog> */}
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
