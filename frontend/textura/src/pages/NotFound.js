import NotFoundSVG from '@images/404 Error with a cute animal-pana.svg'
import '../styles/pages/NotFound.css'

import { useNavigate } from 'react-router-dom'

function NotFound() {
    const Navigate = useNavigate()
    function pushHome() {
        // let testObject = { name: 'test', time: 'Date 2017-02-03T08:38:04.449Z' }
        // localStorage.setItem('testObject', JSON.stringify(testObject))
        Navigate('/')
        // var retrievedObject = localStorage.getItem('testObject')
        // console.log(JSON.parse(retrievedObject))
    }
    return (
        <div className="col-12 p-5 not-found-page-background-color ">
            <div className="d-flex flex-column">
                <div className="text-center">
                    <img
                        className="m-5 col-8 col-xl-4 col-lg-5 col-sm-6"
                        src={NotFoundSVG}
                        alt="404 image"
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={pushHome}>
                        Let back to home !
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
