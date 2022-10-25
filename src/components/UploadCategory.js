import React from 'react'
import { Link } from 'react-router-dom'
import cardImgOne from '../images/ce-board-mste_mste.jpg'
import cardImgTwo from '../images/IMG1-3.png'
import cardImgThree from '../images/Screenshot-2019-11-18-at-12.12.05-PM.png'
import Padding from './dividers/Padding'
import SecondSection from './home/SecondSection'

function UploadCategory() {
    return (
        <>
            <div className='upload-category-main-container h-100 d-flex align-items-center pb-5'>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <h6 className='purple-heading pb-1 pb-md-5 text-center'>Choose a category:</h6>

                        <div className='upload-category-container d-flex flex-column flex-md-row justify-content-between'>
                            <div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0'>
                                <img className='card-img-top' src={cardImgOne} alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Mathematics</h5>
                                    <p className='card-text'>Mathematics, Surveying and Transportation Engineering</p>
                                    <Link to={`/upload/Mathematics-Surveying-and-Transportation-Engineering`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </div>

                            <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                                <img className='card-img-top' src={cardImgTwo} alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Hydraulics</h5>
                                    <p className='card-text'>Hydraulics and Geotechnical Engineering</p>
                                    <Link to={`/upload/Hydraulics-and-Geotechnical-Engineering`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </div>

                            <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                                <img className='card-img-top' src={cardImgThree}  alt="img"/>
                                <div className='card-body'>
                                    <h5 className='card-title'>Structural</h5>
                                    <p className='card-text'>Structural Engineering and Construction</p>
                                    <Link to={`/upload/Structural-Engineering-and-Construction`} rel="noopener noreferrer" className='purple-btn'>Upload</Link>
                                </div>
                            </div>
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