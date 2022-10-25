import React from 'react'
import secondSectionImg from '../../../images/undraw_To_the_stars_re_wq2x.png'
import ScrollAnimation from 'react-animate-on-scroll';

function TSecond() {
    return (
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
            <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                <div className='d-flex flex-column col-12 col-md-6'>
                    <h6 className='purple-heading'>Ready made sections</h6>
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut='fadeOut' delay={600}>
                        <p className='purple-sub-heading'>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
                    </ScrollAnimation>
                </div>
                <div className='col-12 col-md-6'>
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut' delay={100}>
                        <img src={secondSectionImg} className='section-img' alt='img' />
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default TSecond