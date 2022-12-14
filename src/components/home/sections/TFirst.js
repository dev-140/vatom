import React from 'react'
import firstSectionImg from '../../../images/undraw_Helpful_sign_re_8ms5.png'
import ScrollAnimation from 'react-animate-on-scroll';

function TFirst() {
    return (
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
            <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                <div className='col-12 col-md-6'>
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut' delay={700}>
                        <img src={firstSectionImg} className='section-img' alt='img' />
                    </ScrollAnimation>
                </div>
                <div className='d-flex flex-column col-12 col-md-6'>
                    <h6 className='purple-heading'>Light, fast & responsive</h6>
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut='fadeOut' delay={500}>
                        <p className='purple-sub-heading'>Users may navigate the website with ease and perform multiple tasks with minimal difficulty thanks to the well-designed, seamless interface.</p>
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default TFirst