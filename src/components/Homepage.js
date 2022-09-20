import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
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
                            <AnimationOnScroll animateIn='animate__lightSpeedInLeft' animateOut='animate__bounceOut'>
                                <h3 className='section-title'>Some Pdf files</h3>
                            </AnimationOnScroll>

                            <BlogMain />

                            <div className='blog-container'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Divider class='divider-one yellow-secondary'/>
    </>
  )
}

export default Homepage