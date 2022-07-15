import React from 'react'
import BannerCarousel from './carousel/BannerCarousel'

function Banner() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center'>
            <div className='col-lg-11'>
                <div className='banner-container d-flex'>
                    <div className='slider-main-container'>
                        <BannerCarousel />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner