import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../Shared/Header';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const location = useLocation();
    useEffect( () => {
        fetch('https://frozen-scrubland-17701.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [blogs])
    return (
        <div>
            {location.pathname==='/blogs' && <Header></Header>}
            <div className="py-4">                
                <div className="text-center">
                    <h2 className="inline-block text-xl font-medium border-b-2 border-green-custom px-4 text-green-custom font-qsand">Latest Blogs</h2>
                    <p className="font-qsand md:text-4xl sm:text-2xl text-xl my-3 font-medium">Stay Updated And Read <br /> Our <span className="text-coral">Blog Posts!</span></p>
                </div>

                {
                blogs.length===0 ?
                    <div class="flex justify-center items-center py-6">
                        <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                        <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
                    </div>
                    :
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:p-12 md:pb-4 sm:p-10 sm:pb-3 pb-2 p-5 gap-8">
                    {
                        blogs.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                    }
                    </div>
                }            
            </div>
        </div>
    );
};

export default Blog;