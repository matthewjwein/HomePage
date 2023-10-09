import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const Navbar = () => {
    const socials = [
        {
            icon: faEnvelope,
            url: "mailto: matthewjwein@gmail.com",
        },
        {
            icon: faGithub,
            url: "https://github.com/matthewjwein",
        },
        {
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/matthewjwein/",
        },
    ];


    return (
        <nav className="navbar">
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                translateY={0}
                transitionProperty="transform"
                transitionDuration=".3s"
                transitionTimingFunction="ease-in-out"
                backgroundColor="#18181b"
            >
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={16}
                        py={4}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <nav>
                            <HStack spacing={8}>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} size="1x" ></FontAwesomeIcon> Home
                                </Link>
                            </HStack>
                        </nav>
                        <nav>
                            <HStack spacing={8}>
                                {socials.map((social) => {
                                    return <a target="_blank" rel="noreferrer" key={social.url} href={social.url}>
                                        <FontAwesomeIcon icon={social.icon} size="2x" ></FontAwesomeIcon>
                                    </a>
                                })}
                                <Link to="./resume">Resume</Link>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
            </Box>
        </nav >
    );
};

export default Navbar;