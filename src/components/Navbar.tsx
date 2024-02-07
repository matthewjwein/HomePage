import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";
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
                width="100%"
            >
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={16}
                        py={4}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <a href="/">
                            <FontAwesomeIcon icon={faHome} size="2x" ></FontAwesomeIcon>
                        </a>
                        <nav>
                            <HStack spacing={4}>

                            </HStack>
                        </nav>
                        <a href="/game">
                            Fancy a Game? <FontAwesomeIcon icon={faGamepad} size="2x" ></FontAwesomeIcon>
                        </a>
                        <nav>
                            <HStack spacing={8}>

                                {socials.map((social) => {
                                    return <a target="_blank" rel="noreferrer" key={social.url} href={social.url}>
                                        <FontAwesomeIcon icon={social.icon} size="2x" ></FontAwesomeIcon>
                                    </a>
                                })}
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
            </Box>
        </nav >
    );
};

export default Navbar;