import React from 'react'
// import { useEffect, useState } from 'react'; 
import BlogCards from './BlogCards'
// import { firestore } from '../firebase/firebase';
 
function BlogMain() {
    const blogs = [
        {id: 1, title: 'Alice book', text: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
        {id: 2, title: 'Lorem Ipsum', text: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
        {id: 3, title: 'Super one', text: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
        {id: 4, title: 'Let the sky', text: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
        {id: 5, title: 'Need one tree', text: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
    ];

    return (
        <div className='blog-container d-flex flex-column flex-md-row'>
            {blogs.slice(0, 3).map((blog, index) => {
                return (
                    <div key={index}>
                        <BlogCards blogNo={blog.id}  title={blog.title} text={blog.text} bId={blog.id} dataKey={index}/>
                    </div>
                );
            })}
        </div>
    )
}

export default BlogMain