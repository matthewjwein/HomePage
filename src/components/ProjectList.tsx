import React from 'react';
import ProjectCard from './ProjectCard';
import Card from 'react-bootstrap/Card';

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <Card
            bg="light"
            text="dark"
            className="project-list-card">
            <Card.Header>Projects</Card.Header>
            <Card.Body>
                <Card.Text className="project-card-wrapper">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} id={project.id} dateText={project.dateText} titleText={project.titleText} />
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProjectList;