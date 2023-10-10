import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';

interface ProjectListProps {
    projects: { id: number, dateText: string, titleText: string }[];
}

const Post: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <img className="profile-picture" src="/profile.jpg" alt="profile"></img>
            <div className="introduction">
                <Card>
                    <img className="resume" alt="resume" src="./resume.png"></img>
                </Card>
            </div>
            {
                //<ProjectList projects={projects} />
            }
        </div >
    );
};

export default Post;