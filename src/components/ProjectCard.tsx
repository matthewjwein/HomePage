import React from 'react';
import Card from 'react-bootstrap/Card';
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
                    <Link to={`/project/${id}`}>View</Link>
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Post;