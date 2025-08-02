import React from 'react'
import BlogCpm from '../components/blog/Blog';
import Related from '../components/blog/related';
import StayContact from '../components/blog/subscribe';

function Blog() {
    return (
        <div>
            <BlogCpm />
            <Related />
            <StayContact />
        </div>
    )
}

export default Blog;