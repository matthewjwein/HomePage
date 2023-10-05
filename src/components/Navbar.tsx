import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiLinkExternal } from 'react-icons/bi';

const Navbar = () => {
    // generate a random number between min and max inclusive
    function rand(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [nextRandomProjectID, setNextRandomProjectID] = useState(rand(1, 2));

    return (
        <nav className="navbar">
            <div className="page-links">
                <button onClick={() => { setNextRandomProjectID(rand(1, 2)) }}>
                    <Link to={`/project/${nextRandomProjectID}`}>
                        <img className="profile-picture" src="/profile.jpg" alt="profile"></img>
                        Check out a Random Project
                    </Link>
                </button>
            </div>
            <div className="external-links">
                <Link to="https://github.com/matthewjwein" target="_blank">
                    Github
                    <BiLinkExternal />
                </Link>
                <Link to="https://www.linkedin.com/in/matthewjwein" target="_blank">
                    LinkedIn
                    <BiLinkExternal />
                </Link>
            </div>
        </nav >
    );
};

export default Navbar;