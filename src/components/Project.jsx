import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Button } from '@mui/material';
import { ProjectData } from './ProjectData'

const Project = ({ id }) => {
    return (
        <>
            <Link to="/">
                <Button><IoIosArrowRoundBack /> Go Back</Button>
            </Link>
            {ProjectData[id] ? ProjectData[id].component : <div>Project Not Found!</div>}
        </>
    );
};

export default Project;