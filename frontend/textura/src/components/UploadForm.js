import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grow from '@mui/material/Grow'

import { useForm } from 'react-hook-form'
import { CreateArtValidation } from '@validations/Art'
import Grid from '@mui/material/Grid'

import '@styles/components/UploadForm.css'
import { MdCloudUpload } from 'react-icons/md'
// import UploadPic from './UploadPic';

import { FileUploader } from 'react-drag-drop-files'
const fileTypes = ['JPG', 'PNG', 'GIF']

let Sytel = () => {}

function UploadForm(props) {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm()

    const [file, setFile] = React.useState(null)
    const onSubmits = (data) => {}

    const handleChange = (data) => {
        setFile(data)
    }

    const cTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#10649C',
            fontSize: 13,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#EBF5FD',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '3px solid #EBF5FD',
                borderRadius: 15,

                fontFamily: 'Lato',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',

                width: '100%',
            },
            '&:hover fieldset': {
                borderColor: '#10649C',
                color: '#10649C',
            },
            '&.Mui-focused fieldset': {
                color: '#FFFFFF',
                borderRadius: 10,

                fontFamily: 'Lato',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',

                backgroundColor: 'transparent',
            },
        },
    })

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

            {/* <div className="upload-form-picture-box">
                <div className="upload-form-uplaod-picture-box-icon-text">
                    <div className="upload-form-upload-picture-box-icon"></div>
                    <div className="upload-form-upload-box-text">
                        <p>Drag and drop art here</p>
                    </div>
                </div>
                <div className="upload-form-picture-box-Or">
                    <p>Or</p>
                </div>
                <div className="upload-form-picture-box-button">
                    <button id="upload-form-picture-box-button-main">
                        Browse File
                    </button>
                </div>
            </div> */}
            <div className="upload-form-input-all">
                {/* <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '-webkit-fill-available',
                            maxWidth: '100%',
                            margin: 0.8,
                            background: '#EBF5FD',
                            border: '1px solid EBF5FD',
                            borderRadius: 15,
                            color: 'white',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                > */}
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
                </form>

                {/* <CssTextField
                        id="outlined-Title"
                        label="Title"
                        placeholder="Title"
                        fullWidth
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        className={'invalid' + (errors.email ? 'invalid ' : '')}
                        {...register('title', CreateArtValidation.title)}
                    /> */}

                {/* <CssTextField
                        id="outlined-Description"
                        label="Description"
                        placeholder="Description"
                        fullWidth
                        size="small"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        multiline
                    />
                    <div className="flex-item">
                        <div className="item">
                            <CssTextField
                                id="outlined-Tag"
                                label="Tag"
                                placeholder="Tag"
                                size="small"
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className="item">
                            <CssTextField
                                id="outlined-Tool"
                                label="Tool"
                                placeholder="Tool"
                                size="small"
                                color="success"
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                    </div>
                </Box>

                <div className="upload-form-button-container">
                    <button id="upload-form-button-cancel">Cancel</button>
                    <button id="upload-form-button-upload">Upload</button>
                </div> */}
            </div>
        </div>
    )
}

export default UploadForm
