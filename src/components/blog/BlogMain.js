import React from 'react'
import BlogCards from './BlogCards'

function BlogMain() {
    const blogs = [
      {id: 1, title: 'Alice book', text: 'Some quick example text to build on the card title and make up the bulk of the card content.', img: '/static/media/bakery-gd88b1a355_1920.869414c14bf39527e85c.jpg', alt: 'sasas'},
      {id: 2, title: 'In the woods', text: 'Some quick example text to build on the card title and make up the bulk of the card content.', img: '/static/media/bakery-gd88b1a355_1920.869414c14bf39527e85c.jpg', alt: 'sasasss'},
      {id: 3, title: 'Super one', text: 'Some quick example text to build on the card title and make up the bulk of the card content.', img: '/static/media/bakery-gd88b1a355_1920.869414c14bf39527e85c.jpg', alt: 'sasas'},
      {id: 4, title: 'Let the sky', text: 'Some quick example text to build on the card title and make up the bulk of the card content.', img: '/static/media/bakery-gd88b1a355_1920.869414c14bf39527e85c.jpg', alt: 'sasas'},
      {id: 5, title: 'Need one tree', text: 'Some quick example text to build on the card title and make up the bulk of the card content.', img: '/static/media/bakery-gd88b1a355_1920.869414c14bf39527e85c.jpg', alt: 'sasas'},
    ];

  return (
    <div className='blog-container'>
        {blogs.slice(0, 3).map((blog, index) => {
        return (
          <div key={index}>
            <BlogCards imgSrc={Image} alt={blog.alt} blogNo={blog.id}  title={blog.title} text={blog.text} bId={blog.id} dataKey={index}/>
          </div>
        );
      })}
    </div>
  )
}

export default BlogMain