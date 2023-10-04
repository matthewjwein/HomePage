import React, { ReactNode } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';

interface ProjectProps {
    title: string
    component: ReactNode
}

const Project: React.FC<ProjectProps> = ({ title, component }) => {
    return (
        <Card className="project">
            <Card.Body>
                <Card.Title>
                    <Link to="/">
                        <IoIosArrowRoundBack /> Go Back
                    </Link>
                </Card.Title>
                <Card.Header>

                    {title}
                </Card.Header>
                <Card.Text>
                    {component}
                </Card.Text>
            </Card.Body >
        </Card >
    );
};

export default Project;