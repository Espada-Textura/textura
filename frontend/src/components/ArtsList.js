import '@styles/components/ArtsList.css'

import * as React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import Grow from '@mui/material/Grow'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArtDetail from '@components/ArtDetail'
import Avatar from '@mui/material/Avatar'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateView } from '@redux/art/operations'

import { FaEye } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'

import InfiniteScroll from 'react-infinite-scroll-component'

function ArtsList(props) {
    const [currentArt, setCurrentArt] = React.useState({})
    const dispatch = useDispatch()

    const [like, setLike] = useState(false)
    // const [artForm, setArtForm] = useState({})
    const handleClick = () => setLike(!like)

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
    function getDate(date) {
        return date.substring(0, date.indexOf('T'))
    }
    return (
        <div
            className="col-12 d-flex flex-row justify-content-center p-3"
            style={{
                minHeight: '100vh',
                minWidth: '100vh',
            }}
        >
            <InfiniteScroll
                dataLength={props.arts ? props.arts.length : 0}
                next={props.fetchMoreData}
                hasMore={true}
                className="col-12 flex-column justify-content-center p-3"
                style={{
                    minWidth: '100vh',
                }}
            >
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
                                dispatch(updateView(item))
                            }}
                        >
                            <div className="img-wrapper">
                                <img
                                    className="img-darken"
                                    src={item.path}
                                    srcSet={item.path}
                                    alt={item.title}
                                    style={{
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderRadius: 12,
                                        display: 'block',
                                        width: '100%',
                                        minHeight: '200px',
                                        backgroundColor: '#f0f0f0',
                                    }}
                                />

                                <div className="art-info fade-display slide-up-display flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <FaEye
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}
                                            className="views-icon"
                                        />
                                        {item.views ? item.views : 0}
                                    </div>
                                    <div className="align-items-center pt-1 pb-1">
                                        {item.title}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Avatar
                                            alt={
                                                item.user.firstName +
                                                item.user.lastName
                                            }
                                            src={item.user.avatarIcon}
                                            style={{
                                                width: 38,
                                                height: 38,
                                            }}
                                        />
                                        <div className="">
                                            <div className="flex">
                                                <div className="art-info-username pt-1">
                                                    <h6
                                                        style={{
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        {item.user.firstName}{' '}
                                                        {item.user.lastName}
                                                    </h6>
                                                </div>
                                                <div className="art-info-username">
                                                    <Typography
                                                        variant="caption"
                                                        display="block"
                                                        gutterBottom
                                                    >
                                                        {getDate(
                                                            item.timeCreated
                                                        )}
                                                    </Typography>
                                                </div>
                                            </div>
                                            {/*Like Button on HOVER*/}
                                            {/* <div>
                                            <Button
                                                onClick={handleClick}
                                                sx={{
                                                    color: `${
                                                        like
                                                            ? '#E64E4E !important'
                                                            : '#00000080 !important'
                                                    }`,
                                                }}
                                                variant="text"
                                                startIcon={<AiFillHeart />}
                                                className="art-detail-left-side-btn w-35 w-sm-100 w-lg-35"
                                                style={{ minWidth: '100px' }}
                                            ></Button>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </Masonry>
            </InfiniteScroll>

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
