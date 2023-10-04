import React from 'react';
import { Link } from "react-router-dom";
import { BiLinkExternal } from 'react-icons/bi';
import ProfileIcon from './ProfileIcon';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="page-links">
                <Link to="/">
                    <ProfileIcon initials='MW'></ProfileIcon>
                </Link>
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
        </nav>
    );
};

export default Navbar;