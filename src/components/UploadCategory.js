import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../images/bakery-gd88b1a355_1920.jpg'

function UploadCategory() {
    return (
        <div className='upload-category-main-container'>
            <div className='container'>
                <div className='upload-category-container d-flex flex-column flex-md-row justify-content-between'>
                    <div className='card col-12 col-md-3 mt-2 mt-0 mt-md-0'>
                        <img className='card-img-top' src={cardImg} alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/upload/categoryOne`} rel="noopener noreferrer" className='btn btn-primary'>Go somewhere</Link>
                        </div>
                    </div>

                    <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                        <img className='card-img-top' src={cardImg} alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/upload/cetegoryTwo`} rel="noopener noreferrer" className='btn btn-primary'>Go somewhere</Link>
                        </div>
                    </div>

                    <div className='card col-12 col-md-3 mt-5 mt-md-0'>
                        <img className='card-img-top' src={cardImg}  alt="img"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/upload/categoryThree`} rel="noopener noreferrer" className='btn btn-primary'>Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadCategory