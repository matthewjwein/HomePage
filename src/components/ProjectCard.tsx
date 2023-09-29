import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

interface ProjectProps {
    id: number;
    title: string;
}

const Post: React.FC<ProjectProps> = ({ id, title }) => {
    return (
        <Card
            bg="light"
            key={title}
            text="dark"
            className="project-card"
        >
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>Coming Soon</Card.Title>
                <Card.Text>
                    <Button className="view-button" href={`/project/${id}`} variant="primary">View</Button>
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Post;