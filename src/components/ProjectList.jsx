import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list-wrapper">
            {Object.entries(projects).map(([key, project]) => {
                return <ProjectCard
                    key={key}
                    id={key}
                    imagePath={project.imagePath}
                    titleText={project.titleText}
                    dateText={project.dateText}
                />
            })}
        </div>
    );
};

export default ProjectList;