import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../images/bakery-gd88b1a355_1920.jpg'

function UploadCategory() {
    return (
        <div className='upload-category-main-container h-100 d-flex align-items-center pb-5'>
            <div className='container'>
                <div className='upload-category-container d-flex flex-column flex-md-row justify-content-between'>
                    <div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0'>
                        <img className='card-img-top' src={cardImg} alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Mathematics</h5>
                            <p className='card-text'>Mathematics, Surveying and Transportation Engineering</p>
                            <Link to={`/upload/Mathematics-Surveying-and-Transportation-Engineering`} rel="noopener noreferrer" className='btn btn-primary'>Upload</Link>
                        </div>
                    </div>

                    <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                        <img className='card-img-top' src={cardImg} alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Hydraulics</h5>
                            <p className='card-text'>Hydraulics and Geotechnical Engineering</p>
                            <Link to={`/upload/Hydraulics-and-Geotechnical-Engineering`} rel="noopener noreferrer" className='btn btn-primary'>Upload</Link>
                        </div>
                    </div>

                    <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                        <img className='card-img-top' src={cardImg}  alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Structural</h5>
                            <p className='card-text'>Structural Engineering and Construction</p>
                            <Link to={`/upload/Structural-Engineering-and-Construction`} rel="noopener noreferrer" className='btn btn-primary'>Upload</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadCategory