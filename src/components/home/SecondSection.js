import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'

function SecondSection() {
    return (
        <div className='home-second-section d-flex flex-column align-items-center p-2 p-md-0'>
            <h6 className='second-section-heading purple-heading text-center col-12 col-lg-6'>What is CE-rtify?</h6>
            <ScrollAnimation animateIn="animate__lightSpeedInLeft" delay={200}>
                <div className='d-flex justify-content-center'>
                    <p className='second-section-sub-heading text-center purple-sub-heading col-12 col-md-6'>CE-rtify gives you instant access to a variety of learning resources and tools to assist you in your academic endeavors and help you deeply throughout your civil engineering career.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__lightSpeedInLeft" delay={300}>
                <div className='d-flex justify-content-center'>
                    <Link to='/browse' className='purple-btn'>Explore</Link>
                </div>
            </ScrollAnimation>
            
        </div>
    )
}

export default SecondSection