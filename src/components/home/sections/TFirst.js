import React from 'react'
import firstSectionImg from '../../../images/undraw_Helpful_sign_re_8ms5.png'
function TFirst() {
  return (
    <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
        <div className='col-12 col-md-6'>
            <img src={firstSectionImg} className='section-img' alt='img' />
        </div>
        <div className='d-flex flex-column col-12 col-md-6'>
            <h6 className='purple-heading'>Light, fast & responsive</h6>
            <p className='purple-sub-heading'>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
        </div>
    </div>
  )
}

export default TFirst