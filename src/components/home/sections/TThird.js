import React from 'react'
import thirdSectionImg from '../../../images/undraw_Site_stats_re_ejgy.png'
import ScrollAnimation from 'react-animate-on-scroll';

function TThird() {
    return (
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
            <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
                <div className='col-12 col-md-6'>
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut' delay={700}>
                    <img src={thirdSectionImg} className='section-img' alt='img' />
                    </ScrollAnimation>
                </div>
                <div className='d-flex flex-column col-12 col-md-6'>
                    <h6 className='purple-heading'>That's about it!</h6>
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut='fadeOut' delay={500}>
                        <p className='purple-sub-heading'>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default TThird