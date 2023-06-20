import { Link, NavLink } from "react-router-dom"

export function Header() {

    return (
        <header className="app-header">
            <section className="logo">
                <Link to={'/'}>Home</Link>
            </section>

            <nav className="navigate">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/addUserInfo'}>Add User Info</NavLink>
            </nav>
        </header>
    )
}