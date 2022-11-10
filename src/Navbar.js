import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_section">
            <div className="nav_item">
                <Link to="/">Home</Link>
            </div>
            <div className="nav_item">
                <Link to="/characters">Characters</Link>
            </div>
            <div className="nav_item">
                <Link to="/episodes">Episodes</Link>
            </div>
            <div className="nav_item">
                <Link to="/locations">Locations</Link>
            </div>
        </div>
    )
}

export default Navbar;
