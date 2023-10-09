import React from 'react';

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <img className="profile-picture" src="/profile.jpg" alt="profile"></img>
            <div className="introduction">
                <p>
                    Hi. This website is under construction.
                </p>
                <p>
                    This website is developed with React and Typescript, hosted using Netlify.
                </p>
                <p>
                    Check back soon :)
                </p>
            </div>
            {
                //<ProjectList projects={projects} />
            }
        </div >
    );
};

export default Post;