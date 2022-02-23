import '@styles/components/ToggleSwiich.css'
import { useState } from 'react'

function ToggleSwiich(props) {
    let [status, toggleStatus] = useState(false)
    return (
        <div className="ts-main-layout">
            <div className={status ? 'ts-key active ' : 'ts-key'}></div>
            <input
                id={props.fors}
                className="ts-check-box"
                onClick={() => {
                    toggleStatus(!status)
                }}
                type="checkbox"
            ></input>

            <div>
                
            </div>
        </div>
    )
}

export default ToggleSwiich
