import React from 'react';
import ProjectList from './ProjectList'

interface ProjectListProps {
    projects: { id: number, title: string }[];
}


const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <p className="introduction">
                Hi. I'm developing a project a week, starting with this website to showcase these projects.
            </p>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Post;