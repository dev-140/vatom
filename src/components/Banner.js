import React, { useState, useEffect } from 'react'

function Banner() {
    const [bannerTop, setBannetTop] = useState('slider-main-container');
    const [bgBanner, setBgBanner] = useState('fix-bg-banner');

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.scrollY < 200) {
                setBannetTop('slider-main-container');
                setBgBanner('fix-bg-banner');
            } if (window.scrollY > 200){
                setBannetTop('slider-main-container top');
                setBgBanner('fix-bg-banner top');
            }
        },);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <div className='bg-color-banner'>
            <div className={bgBanner}>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <div className='col-lg-11'>
                            <div className='banner-container d-flex'>
                                <div className={bannerTop}>
                                    <div className='welcome-text'>
                                        <h3>lorem ipsum dolor!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='hero-text'>scroll down to see more!</h3>
        </div>
    </>
  )
}

export default Banner