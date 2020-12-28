import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => (
    <div className="row navbar">
        <Link to="/">Home</Link>
        <nav className="nav-links">
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>
        </nav>
    </div>
)

export default Navbar