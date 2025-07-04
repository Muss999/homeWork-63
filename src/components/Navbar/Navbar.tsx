import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    BLOG
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to={"/"} className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to={"/add-post"} className="nav-link">
                            Add
                        </NavLink>
                        <NavLink to={"/about"} className="nav-link">
                            About
                        </NavLink>
                        <NavLink to={"/contacts"} className="nav-link">
                            Contacts
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
