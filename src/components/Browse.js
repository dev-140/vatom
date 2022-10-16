import React from 'react'
import BlogMain from './blog/BlogMain'
import Categories from './blog/Categories'
import Loading from './loading/Loading'

function Browse() {
    return (
        <div className='browse-main-container'>
            <div className='container'>
                <div className='col-lg-11 mx-auto'>
                    <Loading />
                    <Categories />
                    <BlogMain />
                </div>
            </div>
        </div>
    )
}

export default Browse