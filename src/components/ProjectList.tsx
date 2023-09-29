import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: { id: number, title: string, tags: string[] }[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <label className="project-list-label">Projects</label>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard key={index} id={project.id} title={project.title} tags={project.tags} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;