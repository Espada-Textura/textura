import { Link, useResolvedPath, useMatch } from 'react-router-dom'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div>
            <Link
                className="btn text-dark"
                style={{ textDecoration: match ? 'underline' : 'none' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}

export default CustomLink
