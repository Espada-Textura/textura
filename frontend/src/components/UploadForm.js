import * as React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Grow from '@mui/material/Grow'

import { useForm } from 'react-hook-form'
import { CreateArtValidation } from '@validations/Art'
import Grid from '@mui/material/Grid'

import '@styles/components/UploadForm.css'
import { MdCloudUpload } from 'react-icons/md'

import LinearProgress from '@mui/material/LinearProgress'
import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { createArt } from '@redux/art/operations'
import { getUpdateRequesetStatus } from '@redux/system/selectors'
import { resetRequesetStatusAction } from '@redux/system/actions'

// drag and drop config
import { FileUploader } from 'react-drag-drop-files'
import Loading from '@components/universal/Loading'
const fileTypes = ['JPG', 'PNG', 'GIF']

function UploadForm(props) {
    // redux
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm()

    const [progress, setProgress] = React.useState(0)
    const [file, setFile] = React.useState(null)
    const [open, setOpen] = React.useState(false)
    const handleCloseLoding = () => {
        setOpen(false)
    }
    const handleToggleLoding = () => {
        setOpen(!open)
    }
    const onSubmits = (data) => {
        handleToggleLoding()
        let submitData = { ...data }
        submitData.file = file
        dispatch(createArt(submitData))
    }

    const handleChange = (data) => {
        setFile(data)
    }

    // system
    React.useEffect(() => {
        setProgress(
            getUpdateRequesetStatus(selector).progress
                ? getUpdateRequesetStatus(selector).progress
                : 0
        )
        // close upload form after request successed
        if (getUpdateRequesetStatus(selector).requestSuccessed) {
            props.close()
            dispatch(resetRequesetStatusAction())
        } else if (getUpdateRequesetStatus(selector).requestError) {
            handleCloseLoding()
        }
    }, [getUpdateRequesetStatus(selector)])

    return (
        <div className="d-flex flex-column">
            <div className="upload-form-text">
                <div className="upload-form-text-header">
                    <p> UPLOAD MY ART </p>
                </div>
                <div className="upload-form-text-paragraph">
                    <p>Uplaod art you want to share with the world.</p>
                </div>
            </div>
            <div className="upload-form-input-all">
                <form
                    onSubmit={handleSubmit(onSubmits)}
                    className="mt-4 form-group"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FileUploader
                                className="col-12"
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                                classes={
                                    file
                                        ? 'uploead-from-drag-and-drop-layout-selected'
                                        : 'uploead-from-drag-and-drop-layout'
                                }
                                children={
                                    <div className="text-center">
                                        {!file ? (
                                            <div className="upload-form-upload-box-text">
                                                <MdCloudUpload className="uploead-from-upload-icon" />
                                                <p>
                                                    Drag and drop art here or
                                                    click here to browse art
                                                </p>
                                            </div>
                                        ) : (
                                            ' '
                                        )}
                                        <Grow in={file ? true : false}>
                                            <div className="col-12">
                                                <img
                                                    className="col-12 upload-form-selected-img-layout"
                                                    src={
                                                        file
                                                            ? URL.createObjectURL(
                                                                  file
                                                              )
                                                            : ''
                                                    }
                                                ></img>
                                            </div>
                                        </Grow>
                                    </div>
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                className="col-12"
                                size="small"
                                id="title"
                                error={errors.title ? true : false}
                                label="Title"
                                defaultValue=""
                                helperText={errors.title?.message}
                                {...register(
                                    'title',
                                    CreateArtValidation.title
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                className="col-12"
                                size="small"
                                id="description"
                                error={errors.description ? true : false}
                                label="Description"
                                defaultValue=""
                                helperText={errors.description?.message}
                                {...register(
                                    'description',
                                    CreateArtValidation.description
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="filled"
                                size="small"
                                className="col-12"
                                id="tag"
                                error={errors.tag ? true : false}
                                label="Tag"
                                defaultValue=""
                                helperText={errors.tag?.message}
                                {...register('tag', CreateArtValidation.tag)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="filled"
                                className="col-12"
                                size="small"
                                id="tool"
                                error={errors.tool ? true : false}
                                label="Tool"
                                defaultValue=""
                                helperText={errors.tool?.message}
                                {...register('tool', CreateArtValidation.tool)}
                            />
                        </Grid>
                    </Grid>
                    <div className="d-flex flex-row justify-content-end pt-3">
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                props.close()
                            }}
                            className="upload-form-button-upload mx-3 chancel"
                        >
                            Cancel
                        </button>
                        <button className="upload-form-button-upload">
                            Upload
                        </button>
                    </div>
                    <div className="d-flex flex-row justify-content-end pt-3">
                        <Backdrop
                            sx={{
                                color: '#fff',
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open={open}
                        >
                            <Loading />
                        </Backdrop>
                        <Fade
                            in={getUpdateRequesetStatus(selector).requestting}
                        >
                            <LinearProgress
                                className="col-12"
                                variant="determinate"
                                value={progress}
                            />
                        </Fade>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadForm
