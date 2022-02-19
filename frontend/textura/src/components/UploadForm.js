import '@styles/components/UploadForm.css'
import UploadPic from './UploadPic';

function UploadForm(props) {
    return (
        <div className="upload-form-main-layout">
            <h3 id="header">What you want to share to us?</h3>
            <p>What do you want to share with us?</p>
            <div className="uplaod-picture">
                {/* <h5 id="uplaod-picture-text">Please choose  your file </h5>
                <input type="file" id="uplaod-picture-realBtn"></input> */}
                <UploadPic />
            </div>

            <div className="uplaod-type">
                    <input 
                    type="text" 
                    id="uplaod-type-text" 
                    placeholder="Title">
                        </input>
                    <input 
                    type="text" 
                    id="uplaod-type-decription" 
                    placeholder="Decription">
                        </input>
            </div>
            <div className="uplaod-type-tag-tool">
            
                <div className="item">
                <input 
                    type="text" 
                    id="uplaod-type-tag" 
                    placeholder="Tag">
                    </input>
                </div>
                <div className="item">
                <input 
                    type="text" 
                    id="uplaod-type-tool" 
                    placeholder="Tool">
                    </input>
                  
                </div>

           </div >
           <div className="uplaod-type-button">

                 <div className="uplaod-type-uplaod-button">
                    <button 
                    id="uplaod-uplaod-button">
                    Uplaod</button>
                
                </div>

                 <div >
                    <button 
                    id="uplaod-uplaod-button-cancel">
                    Cancel</button>
                
                </div>


           </div>
           
            
        
        </div>
    );
}

export default UploadForm
