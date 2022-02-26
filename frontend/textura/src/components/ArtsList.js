import '@styles/components/ArtsList.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import Grow from '@mui/material/Grow'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

function ArtsList(props) {
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
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
            title: 'Snacks',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
            title: 'Tower',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
            title: 'Tree',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
            title: 'Camping Car',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
            title: 'Mountain',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
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
        <div className="col-12 p-4">
            <Box sx={{ width: 1, minHeight: 829 }}>
                <Masonry columns={{ xs: 1, sm: 3, lg: 4 }} spacing={2}>
                    {itemData.map((item, index) => (
                        <Grow
                            key={index}
                            in={true}
                            style={{
                                transformOrigin: '0 0 0',
                                cursor: 'pointer',
                            }}
                            {...(true ? { timeout: 200 } : {})}
                            onClick={handleClickOpen}
                        >
                            <div>
                                <img
                                    src={`${item.img}?w=162&auto=format`}
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
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
                                <div className="d-flex pt-2">
                                    <Avatar
                                        alt="Remy Sharp"
                                        src=""
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </Grow>
                    ))}
                </Masonry>
            </Box>
            <Dialog
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
            </Dialog>
        </div>
    )
}

export default ArtsList
