import React from 'react';
import Card from 'react-bootstrap/Card';
import TicTacToe from './TicTacToe';
import './App.css';

const Project1 = () => {
    return (
        <Card className="project">
            <Card.Body>
                <Card.Title>TicTacToe React Tutorial updated to TypeScript</Card.Title>
                <Card.Text>
                    <TicTacToe />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Project1;