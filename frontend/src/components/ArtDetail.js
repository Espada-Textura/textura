import '@styles/components/ArtDetail.css'

import { HiArchive } from 'react-icons/hi'
import { BsThreeDotsVertical, BsBrushFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdChatbubbles } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'
import { RiShareFill } from 'react-icons/ri'
import { FaTrashAlt, FaEye } from 'react-icons/fa'

import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContentText from '@mui/material/DialogContentText'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from '@redux/users/selectors'
import { deleteArt, updateArt } from '@redux/art/operations'
import { useForm } from 'react-hook-form'
import { CreateArtValidation } from '@validations/Art'

function ArtDetail(props) {
    const [like, setLike] = useState(false)
    // const [artForm, setArtForm] = useState({})
    const handleClick = () => setLike(!like)

    const selector = useSelector((state) => state)
    const currentUser = getCurrentUser(selector)
    const dispatch = useDispatch()

    function getDate(date) {
        return date.substring(0, date.indexOf('T'))
    }

    const [isConfirmModel, toggleConfirmModel] = useState(false)
    const closeConfirmModel = () => {
        toggleConfirmModel(false)
    }
    const openConfirmModel = () => {
        toggleConfirmModel(true)
    }

    const [isUpdateDialog, toggleUpdateDialog] = useState(false)
    const closeUpdateDialog = () => {
        toggleUpdateDialog(false)
    }
    const openUpdateDialog = () => {
        toggleUpdateDialog(true)
    }

    const {
        register,
        formState: { errors, isValid },
        getValues,
    } = useForm({
        defaultValues: {
            ...props.art,
        },
    })

    let tryToUpdate = (data) => {
        dispatch(
            updateArt(getValues(), () => {
                closeUpdateDialog()
                props.close()
            })
        )
    }

    return (
        <div
            className="art-detail-layout d-flex flex-column flex-lg-row"
            style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                overflow: 'scroll',
            }}
        >
            <section className="art-detail-left-bar-layout p-3 d-flex flex-column order-lg-1 order-2">
                <div className="d-lg-flex flex-column ">
                    <div className="d-flex col-12 mb-3 ">
                        <Avatar
                            alt={`${currentUser.firstName} ${currentUser.lastName}`}
                            src={props.art.user.avatarIcon}
                            style={{
                                width: 45,
                                height: 45,
                            }}
                        />
                        <div className="d-flex flex-column pt-1 w-100">
                            <h6 className="m-0 mx-3 art-detail-poster">
                                {props.art.user.firstName}{' '}
                                {props.art.user.lastName}
                            </h6>
                            <h6 className="m-0 mx-3 text-secondary">
                                <Typography
                                    sx={{
                                        fontSize: '0.8rem',
                                    }}
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    {getDate(props.art.timeCreated)}
                                </Typography>
                            </h6>
                        </div>
                        <div className="d-flex align-self-center ">
                            <BsThreeDotsVertical />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between col-12">
                        <h4 className=" h5 art-detail-art-title">
                            {props.art.title}
                        </h4>
                        <div className="d-flex align-items-center">
                            <FaEye
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                className="views-icon"
                            />
                            {props.art.views ? props.art.views : 0}
                        </div>
                    </div>

                    <p style={{ overflowY: 'scroll' }}>
                        {props.art.description}
                    </p>
                    <div
                        className="d-flex flex-row art-detail-buttons "
                        style={{
                            borderBottom: '1px solid grey',
                            borderRadius: '0.5px',
                            color: 'black',
                            overflow: 'auto',
                        }}
                    >
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
                        >
                            {like ? 'Liked' : 'Like'}
                        </Button>
                        <Button
                            variant="text"
                            startIcon={<IoMdChatbubbles />}
                            className="art-detail-left-side-btn"
                            style={{ width: '100%', minWidth: '100px' }}
                        >
                            Comment
                        </Button>
                        <Button
                            variant="text"
                            startIcon={<RiShareFill />}
                            className="art-detail-left-side-btn d-lg-none"
                            style={{ width: '100%', minWidth: '100px' }}
                        >
                            Share
                        </Button>
                    </div>
                </div>
                <div className="art-detail-comments pt-3 w-100">
                    <div className="art-detail-commenter d-flex flex-row">
                        <Avatar
                            alt={`${currentUser.firstName} ${currentUser.lastName}`}
                            src={currentUser.avatarIcon}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />

                        <div
                            className="d-flex align-items-center mx-2 w-100"
                            style={{
                                background: '#00000020',
                                borderRadius: '0.5rem',
                            }}
                        >
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}
                                variant="outlined"
                                className="art-detail-textfield"
                                fullWidth={true}
                                size="small"
                                id="comment box"
                                placeholder="Write a comment..."
                                multiline
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="art-detail-main-layout d-flex algin-items-center justify-content-center p-2 px-4 text-center order-1 order-lg-2"
                style={{
                    maxHeight: '100vh',
                    height: '100vh',
                }}
            >
                <img
                    src={`${props.art.path}`}
                    style={{
                        borderRadius: '12px !important',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        verticalAlign: 'middle',
                    }}
                />
            </div>

            <IconButton
                sx={{
                    p: 1.5,
                    background: 'rgba(0,0,0,0.6)',
                    width: 45,
                    height: 45,
                    borderRadius: '5px !important',
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
                aria-label="close-button"
                variant="contained"
                style={{ color: '#fff' }}
                onClick={() => {
                    props.close()
                }}
            >
                <CgClose />
            </IconButton>

            <section
                className="art-detail-right-bar-layout d-none d-lg-flex flex-lg-column flex-row align-items-lg-center gap-4 text-center mx-1 order-3"
                style={{ marginTop: '70px' }}
            >
                <IconButton
                    aria-label="art-detail-poster-avatar"
                    variant="contained"
                    style={{ color: '#000', background: 'white' }}
                    onClick={() => {
                        props.close()
                    }}
                >
                    <Avatar
                        alt={props.art.user.firstName + props.art.user.lastName}
                        src={props.art.user.avatarIcon}
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    />
                </IconButton>

                {currentUser.uid === props.art.user.uid ? (
                    <IconButton
                        sx={{ p: 2 }}
                        aria-label="tool-button"
                        variant="contained"
                        style={{ color: '#000', background: 'white' }}
                        onClick={() => {
                            openUpdateDialog()
                        }}
                    >
                        <BsBrushFill
                            className=""
                            style={{
                                padding: 2,
                                width: 26,
                                height: 26,
                            }}
                        />
                    </IconButton>
                ) : (
                    ''
                )}

                <IconButton
                    sx={{ p: 2 }}
                    aria-label="archive-button"
                    variant="contained"
                    style={{ color: '#000', background: 'white' }}
                >
                    <HiArchive
                        className=""
                        style={{
                            padding: 2,
                            width: 26,
                            height: 26,
                        }}
                    />
                </IconButton>

                <IconButton
                    sx={{ p: 2 }}
                    aria-label="share-button"
                    variant="contained"
                    style={{ color: '#000', background: 'white' }}
                >
                    <RiShareFill
                        className=""
                        style={{
                            padding: 2,
                            width: 26,
                            height: 26,
                        }}
                    />
                </IconButton>

                <IconButton
                    sx={{ p: 2 }}
                    aria-label="share-button"
                    variant="contained"
                    style={{
                        color: '#000',
                        background: `${like ? '#e64e4e' : 'white'}`,
                    }}
                    onClick={handleClick}
                >
                    <AiFillHeart
                        className=""
                        style={{
                            padding: 2,
                            width: 26,
                            height: 26,
                            color: `${like ? 'white' : 'black'}`,
                        }}
                    />
                </IconButton>

                {currentUser.uid === props.art.user.uid ? (
                    <IconButton
                        sx={{ p: 2 }}
                        aria-label="archive-button"
                        variant="contained"
                        style={{ color: '#000', background: 'white' }}
                        onClick={openConfirmModel}
                    >
                        <FaTrashAlt
                            className=""
                            style={{
                                padding: 2,
                                width: 26,
                                height: 26,
                            }}
                        />
                    </IconButton>
                ) : (
                    ''
                )}
            </section>
            <Dialog
                id="confirm-dialog"
                open={isConfirmModel}
                keepMounted
                onClose={closeConfirmModel}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Are your sure?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you really want to delete this art ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            closeConfirmModel()
                            dispatch(deleteArt(props.art, props.close))
                        }}
                    >
                        Yes
                    </Button>
                    <Button color="error" onClick={closeConfirmModel}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                id="update-art-dialog"
                open={isUpdateDialog}
                onClose={closeUpdateDialog}
            >
                <DialogTitle>Edit Art</DialogTitle>
                <form className="form-group">
                    <DialogContent>
                        <DialogContentText className="mb-3">
                            Edit your art information and click update to save
                            change.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            color="secondary"
                            helperText={errors.tool?.message}
                            {...register('title', CreateArtValidation.title)}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            color="secondary"
                            helperText={errors.tool?.message}
                            {...register(
                                'description',
                                CreateArtValidation.description
                            )}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Tag"
                            type="text"
                            fullWidth
                            color="secondary"
                            helperText={errors.tool?.message}
                            {...register('tag', CreateArtValidation.tag)}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Tool"
                            type="text"
                            fullWidth
                            color="secondary"
                            helperText={errors.tool?.message}
                            {...register('tool', CreateArtValidation.tool)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={(event) => {
                                event.preventDefault()
                                closeUpdateDialog()
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={(event) => {
                                event.preventDefault()
                                tryToUpdate()
                            }}
                        >
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default ArtDetail
