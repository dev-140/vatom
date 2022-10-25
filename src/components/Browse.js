import React from 'react'
import BlogMain from './blog/BlogMain'
import Categories from './blog/Categories'
import Loading from './loading/Loading'

function Browse() {
    return (
        <div className='browse-main-container h-100 pt-0'>
            <Loading />
            <div className='container'>
                <div className='col-lg-11 mx-auto'>
                    <div className='d-flex flex-column flex-md-row'>
                        <Categories />
                        <BlogMain />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse