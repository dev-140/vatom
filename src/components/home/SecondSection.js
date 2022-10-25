import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

function SecondSection() {
    return (
        <div className='home-second-section d-flex flex-column align-items-center'>
            <h6 className='second-section-heading purple-heading text-center col-12 col-lg-6'>Introduce your product quickly & effectively</h6>
            <ScrollAnimation animateIn="animate__lightSpeedInLeft" delay={200}>
                <div className='d-flex justify-content-center'>
                    <p className='second-section-sub-heading text-center purple-sub-heading col-12 col-md-6'>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__lightSpeedInLeft" delay={300}>
                <div className='d-flex justify-content-center'>
                    <button className='purple-btn'>Explore</button>
                </div>
            </ScrollAnimation>
            
        </div>
    )
}

export default SecondSection