import React, { useEffect } from 'react'
import Banner from './home/Banner'
import SecondSection from './home/SecondSection'
import ThirdSection from './home/ThirdSection'
import Padding from '../components/dividers/Padding'
import ScrollAnimation from 'react-animate-on-scroll'
import { motion } from 'framer-motion'

function Homepage() {
    return (
        <motion.div className='homepage-main-container' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: .1}}>
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
        </motion.div>
    )
}

export default Homepage