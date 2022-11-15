import React from 'react'
import secondSectionImg from '../../../images/undraw_To_the_stars_re_wq2x.png'
import ScrollAnimation from 'react-animate-on-scroll';

function TSecond() {
    return (
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
            <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                <div className='d-flex flex-column col-12 col-md-6'>
                    <h6 className='purple-heading'>Ready made materials</h6>
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut='fadeOut' delay={600}>
                        <p className='purple-sub-heading'>CE-rtify comes with a set of ready-to-use sections to help students to learn the system quickly and use it efficiently. Its simplicity and use of straightforward language for labels and categories make it a user-friendly website.</p>
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