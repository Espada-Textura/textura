import { Outlet } from 'react-router-dom'
import '@styles/layouts/Layout.css'

import Header from '@components/Header'
import Footer from '@components/Footer'
function Main() {
    return (
        <div>
            <div className="main-layout-header col-12">
                <Header />
            </div>

            <div className="main-layout-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main
