import React from 'react'
import Banner from './home/Banner'
import SecondSection from './home/SecondSection'
import ThirdSection from './home/ThirdSection'
import Padding from '../components/dividers/Padding'
import ScrollAnimation from 'react-animate-on-scroll'

function Homepage() {
    return (
        <div className='homepage-main-container'>
            <div className='container'>
            <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                <Banner />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
                <SecondSection />
            </ScrollAnimation>
            <Padding />
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='fadeOut'>
                <ThirdSection />
            </ScrollAnimation>
            </div>
        </div>
    )
}

export default Homepage