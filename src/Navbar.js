import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="navbar_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/episodes">Episodes</Link></li>
                <li><Link to="/locations">Locations</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
