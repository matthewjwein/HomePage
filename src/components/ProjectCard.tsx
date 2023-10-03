import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

interface ProjectProps {
    id: number;
    dateText: string;
    titleText: string;
}

const Post: React.FC<ProjectProps> = ({ id, dateText, titleText }) => {
    return (
        <Card
            bg="light"
            key={dateText}
            text="dark"
            className="project-card"
        >
            <Card.Header>{dateText}</Card.Header>
            <Card.Body>
                <Card.Title>{titleText}</Card.Title>
                <Card.Text>
                    <Link to={`/project/${id}`}>View</Link>
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Post;