import React, {useState} from 'react';
import '@styles/components/UploadForm.css'


function UploadPic(){

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
  
    const uploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append("upload_preset","textura")
        setLoading(true)
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/textura168/image/upload",
         {
           method: 'POST',
           body: data
         }
        )
         
    const file = await res.json()
  
    setImage(file.secure_url)
    setLoading(false)
  
    }


    return(
        <div className="file-card">
         <h1>Uplaod here</h1>

         <div className="file-input">
        <input type="file"
             id="real-btn"
             name = "file"
             placeholder='Uplaod an image'
             onChange={uploadImage}
            ></input>
         <button 
             id="uplaod-button-pick"
             onClick={uploadImage}>Uplaod button</button>
 
            {loading ? (
            <h3>loading....</h3>
             ): (
         <img src={image} style={{height: '280px'}} />
             )
             }
        </div>
       </div>
   );

}
export default UploadPic