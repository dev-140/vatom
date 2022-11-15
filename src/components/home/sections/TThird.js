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
                    <h6 className='purple-heading'>About Us</h6>
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut='fadeOut' delay={500}>
                        <p className='purple-sub-heading text-center'>CE-rtify is an online learning platform containing civil engineering resources. It was founded in 2022 by VATOM Corporation, which is composed of college students from the Technological Institute of the Philippines located in Quezon City. Its goal is to help civil engineering students in graduating with confidence and preparedness in every engineering problem that they may encounter. Students can download a portable document format or PDF file that is available on the website and may also upload files for sharing with others. Another benefit of the platform is that students can communicate with other users in real-time for some questions and answers as long as the user is still using or browsing the platform.
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default TThird