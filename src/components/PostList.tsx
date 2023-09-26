import React from 'react';
import Post from './Post';

interface PostListProps {
    posts: { title: string; content: string, tags: string[] }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="PostList">
            {posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content} tags={post.tags} />
            ))}
        </div>
    );
};

export default PostList;