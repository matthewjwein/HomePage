import React from 'react';
import ProjectList from './ProjectList'

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <p className="introduction">
                <img className="profile-picture" src="/profile.jpg" alt="profile"></img>
                Hi. I'm going to be developing a project a week, starting with this website to showcase these projects.
            </p>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Post;