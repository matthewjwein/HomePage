import React from 'react';
import PostList from './PostList';

const posts = [
    {
        title: 'Sep 24 - 30: Website',
        content: 'Portfolio website to showcase projects developed each week',
        tags: ['React', 'TypeScript']
    },
    {
        title: 'Oct 1 - 7: Digital Piano',
        content: 'First project!',
        tags: ['React'],
    },
];

const Blog: React.FC = () => {
    return (
        <div className="Blog">
            <PostList posts={posts} />
        </div>
    );
};

export default Blog;


