import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list-wrapper">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={project.id}
                    imagePath={project.imagePath}
                    titleText={project.titleText}
                    dateText={project.dateText}
                />
            ))}
        </div>
    );
};

export default ProjectList;