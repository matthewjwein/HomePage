import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: { title: string, tags: string[] }[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className="ProjectList">
            {projects.map((project, index) => (
                <ProjectCard key={index} id={index + 1} title={project.title} tags={project.tags} />
            ))}
        </div>
    );
};

export default ProjectList;