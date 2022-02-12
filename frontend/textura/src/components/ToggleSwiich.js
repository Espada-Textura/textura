import '@styles/components/ToggleSwiich.css'
import { useState } from 'react'

function ToggleSwiich() {
    let [status, toggleStatus] = useState(false)
    return (
        <div className="ts-main-layout">
            <div className={status ? 'ts-key active ' : 'ts-key'}></div>
            <input
                className="ts-check-box"
                onClick={() => {
                    toggleStatus(!status)
                }}
                type="checkbox"
            ></input>
        </div>
    )
}

export default ToggleSwiich
