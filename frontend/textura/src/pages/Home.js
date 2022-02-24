import { FiActivity } from 'react-icons/fi'

import '@styles/pages/Home.css'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    console.log(dispatch)

    return (
        <div className="home-main-layout">
            <FiActivity />
        </div>
    )
}

export default Home
