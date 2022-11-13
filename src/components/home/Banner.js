import React from 'react'
import bannerImg from '../../images/undraw_Devices_re_dxae.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='homepage-banner d-flex justify-content-center align-items-center flex-column flex-md-row h-100'>
            <div className='container-div d-flex flex-column col-12 col-md-6'>
                <h6 className='homepage-heading pt-5 pt-md-0'>Landing page template for developers & startups</h6>
                <p className='sub-heading'>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                <div className='cta-container col-12 col-md-10 d-flex flex-row justify-content-start'>
                    <Link to='/upload-category' className='purple-btn'>Upload</Link>
                    <Link to='/browse' className='white-btn'>Browse</Link>
                </div>
            </div>
            <div className='img-banner col-12 col-md-6'>
                <img src={bannerImg} alt='img'/>
            </div>
        </div>
    )
}

export default Banner