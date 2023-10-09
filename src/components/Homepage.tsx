import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <img className="profile-picture" src="/profile.jpg" alt="profile"></img>
            <div className="introduction">
                <p>
                    Hi.
                </p>
                <p>
                    <FontAwesomeIcon icon={faTriangleExclamation} /> This website is under construction <FontAwesomeIcon icon={faTriangleExclamation} />
                </p>
                <p>
                    Developed with React and Typescript, hosted on Netlify.
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