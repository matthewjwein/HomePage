import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">Home</Link>
                <div className="external-links">
                    <label>Outbound: </label>
                    <a href="https://github.com/matthewjwein">Github</a>
                    <a href="https://www.linkedin.com/in/matthewjwein">LinkedIn</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;