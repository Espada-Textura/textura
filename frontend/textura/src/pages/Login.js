import '@style/pages/Login.css'
import { useState } from 'react'

function Login() {
    let [text, setText] = useState('Login')

    return (
        <div className="App col-12 d-flex">
            <div className="col-4 hello1 text-start">
                <h1>{text}</h1>
                <button onClick={() => setText('Hello misa')}>say hello</button>
            </div>

            <div className="col-8 hello1 ui">hello</div>
        </div>
    )
}

export default Login
