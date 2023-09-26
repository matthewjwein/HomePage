import React from 'react';

interface PostProps {
    title: string;
    content: string;
    tags: string[];
}

const Post: React.FC<PostProps> = ({ title, content, tags }) => {
    return (
        <div className="Post">
            <h2>{title}</h2>
            <p>{content}</p>
            <div className="TagList">
                {tags.map((tag) => (
                    <div className="Tag">{tag}</div>
                ))}
            </div>
        </div>
    );
};

export default Post;