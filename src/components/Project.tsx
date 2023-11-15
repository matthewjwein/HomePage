import React, { ReactNode } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Button } from '@mui/material';

interface ProjectProps {
    title: string
    component: ReactNode
}

const Project: React.FC<ProjectProps> = ({ title, component }) => {
    return (
        <>
            <Link to="/">
                <Button><IoIosArrowRoundBack /> Go Back</Button>
            </Link>
            {component}
        </>
    );
};

export default Project;