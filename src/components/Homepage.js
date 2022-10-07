import React from 'react'
import Banner from './Banner'
import BlogMain from './blog/BlogMain'
import Divider from './dividers/Divider1'

function Homepage() {
  return (
    <>
        <Banner />
        
        <div className='latest-blogs-main-container' id='blogs'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='col-lg-11'>
                        <div className='latest-blogs-container'>
                            <h3 className='section-title'></h3>
                            
                            <div className='blog-container'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Divider className='divider-one yellow-secondary'/>
    </>
  )
}

export default Homepage