import CustomLink from '@components/CustomLink'
import Topbar from '@components/Topbar'

function Header() {
    return (
        <div>
            <Topbar />
            <nav className="d-flex">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/art">Art</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/register">Register</CustomLink>
                <CustomLink to="/recovery">Recovery</CustomLink>
            </nav>
        </div>
    )
}

export default Header
