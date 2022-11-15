import React from 'react'
import { Link } from 'react-router-dom'
import cardImgOne from '../images/ce-board-mste_mste.jpg'
import cardImgTwo from '../images/IMG1-3.png'
import cardImgThree from '../images/Screenshot-2019-11-18-at-12.12.05-PM.png'
import Padding from './dividers/Padding'
import SecondSection from './home/SecondSection'
import { motion } from 'framer-motion'

function UploadCategory() {
    return (
        <>
            <div className='upload-category-main-container h-100 d-flex align-items-center pb-5'>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <motion.h6 className='purple-heading pb-1 pb-md-5 text-center' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 1}}>Choose a category:</motion.h6>

                        <div className='upload-category-container d-flex flex-column flex-md-row justify-content-between'>
                            <motion.div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0' initial={{ y: -2000 }} animate={{ y: 0 }}>
                                <img className='card-img-top' src={cardImgOne} alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Mathematics</h5>
                                    <p className='card-text'>Mathematics, Surveying and Transportation Engineering</p>
                                    <Link to={`/upload/Mathematics-Surveying-and-Transportation-Engineering`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </motion.div>

                            <motion.div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0' initial={{ y: -2000 }} animate={{ y: 0 }} transition={{ delay: .1}}>
                                <img className='card-img-top' src={cardImgTwo} alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Hydraulics</h5>
                                    <p className='card-text'>Hydraulics and Geotechnical Engineering</p>
                                    <Link to={`/upload/Hydraulics-and-Geotechnical-Engineering`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </motion.div>

                            <motion.div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0' initial={{ y: -2000 }} animate={{ y: 0 }} transition={{ delay: .2}}>
                                <img className='card-img-top' src={cardImgThree}  alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Structural & Construction</h5>
                                    <p className='card-text'>Structural Engineering and Construction</p>
                                    <Link to={`/upload/Structural-Engineering-and-Construction`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <SecondSection />
            <Padding />
        </>
    )
}

export default UploadCategory