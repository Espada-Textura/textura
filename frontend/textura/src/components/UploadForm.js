
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



import '@styles/components/UploadForm.css'
import { margin } from "@mui/system";
import { withTheme } from '@emotion/react';
import zIndex from '@mui/material/styles/zIndex';
import { blue } from '@mui/material/colors';
// import UploadPic from './UploadPic';

function UploadForm(props) {

    const CssTextField = styled(TextField)({
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
      });




    return (
            <div className="upload-form-main-layout">
                <div className="upload-form-text">
                    <div className="upload-form-text-header">
                        <p> UPLOAD MY ART </p>
                    </div>
                    <div className="upload-form-text-paragraph">
                        <p>Uplaod art you want to share with the world.</p>
                    </div>
                </div>
                <div className="upload-form-picture-box">
                    <div className="upload-form-uplaod-picture-box-icon-text">
                        <div className="upload-form-upload-picture-box-icon">

                        </div >
                        <div className="upload-form-upload-box-text">
                        <p>Drag and drop art here</p>
                        </div>
                      
                    </div>
                    <div className="upload-form-picture-box-Or">
                        <p>Or</p>
                    </div>
                    <div className="upload-form-picture-box-button">
                        <button id="upload-form-picture-box-button-main">Browse File</button>
                    </div>

                </div>
                < div className="upload-form-input-all"> 
                        <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                            m: 1,
                            width: "-webkit-fill-available",
                            maxWidth: "100%",
                            margin: 0.8,
                            background: '#EBF5FD',
                            border: '1px solid EBF5FD',
                            borderRadius: 15,
                            color: 'white',
                            
                            }
                        }}
                        
                        noValidate
                        autoComplete="off"
                        >
                    
                        <CssTextField
                            id="outlined-Title"
                            label="Title"
                            placeholder="Title"
                            fullWidth
                            size="small"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            />

                            <CssTextField
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

                   </div>
               
                    
                    </div>
                    

               

               </div>

                
                
                
        
                
    );
}

export default UploadForm
