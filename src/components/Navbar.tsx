import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="/">Home</a>
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