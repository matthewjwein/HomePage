import React from 'react';
import Card from 'react-bootstrap/Card';
import Piano from './components/piano/Piano';
import './App.css';

const Project2: React.FC = () => {
    return (
        <Card className="project">
            <Card.Body>
                <Card.Title>
                    <Piano />
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Project2;