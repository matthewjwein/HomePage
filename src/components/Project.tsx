import React from 'react';
import Card from 'react-bootstrap/Card';

interface ProjectProps {
    title: string;
    tags: string[];
}

const Project: React.FC<ProjectProps> = ({ title, tags }) => {
    return (
        <Card className="Project1">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Project;