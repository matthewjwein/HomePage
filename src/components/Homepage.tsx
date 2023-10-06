import React from 'react';
import ProjectList from './ProjectList'

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <p className="introduction">
                Hi. I'm developing a project a week to learn React and TypeScript, starting with this website to demonstrate these skills.
            </p>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Post;