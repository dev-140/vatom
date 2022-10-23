import React from 'react'
import bannerImg from '../images/home-banner.svg'
import firstSectionImg from '../images/undraw_Helpful_sign_re_8ms5.png'
import secondSectionImg from '../images/undraw_To_the_stars_re_wq2x.png'
import thirdSectionImg from '../images/undraw_Site_stats_re_ejgy.png'

function Homepage() {
    return (
        <div className='homepage-main-container'>
            <div className='container'>
                <div className='homepage-banner d-flex justify-content-center align-items-center flex-column flex-md-row h-100'>
                    <div className='container-div d-flex flex-column col-12 col-md-6'>
                        <h6 className='homepage-heading'>Landing page template for developers & startups</h6>
                        <p className='sub-heading'>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                        <div className='cta-container col-12 col-md-10 d-flex flex-row justify-content-between'>
                            <button className='purple-btn'>Explore</button>
                            <button className='white-btn'>Learn more</button>
                        </div>
                    </div>
                    <div className='img-banner col-12 col-md-6'>
                        <img src={bannerImg} alt='img'/>
                    </div>
                </div>

                <div className='home-second-section d-flex flex-column align-items-center'>
                    <h6 className='second-section-heading purple-heading text-center col-12 col-md-6'>Introduce your product quickly & effectively</h6>
                    <p className='second-section-sub-heading text-center purple-sub-heading col-12 col-md-6'>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
                    <button className='purple-btn'>Explore</button>
                </div>

                <div className='home-third-section'>
                    <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                        <div className='col-12 col-md-6'>
                            <img src={firstSectionImg} className='section-img' alt='img' />
                        </div>
                        <div className='d-flex flex-column col-12 col-md-6'>
                            <h6 className='purple-heading'>Light, fast & responsive</h6>
                            <p className='purple-sub-heading'>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                        </div>
                    </div>

                    <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                        <div className='d-flex flex-column col-12 col-md-6'>
                            <h6 className='purple-heading'>Ready made sections</h6>
                            <p className='purple-sub-heading'>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img src={secondSectionImg} className='section-img' alt='img' />
                        </div>
                    </div>

                    <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                        <div className='col-12 col-md-6'>
                            <img src={thirdSectionImg} className='section-img' alt='img' />
                        </div>
                        <div className='d-flex flex-column col-12 col-md-6'>
                            <h6 className='purple-heading'>That's about it!</h6>
                            <p className='purple-sub-heading'>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage