import CustomLink from '@components/CustomLink'

function Header() {
    return (
        <div>
            <nav className="d-flex">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/art">About</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/register">Register</CustomLink>
                <CustomLink to="/recovery">Recovery</CustomLink>
            </nav>
        </div>
    )
}

export default Header
