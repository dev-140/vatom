import React from 'react'
import hero from '../images/undraw_male_avatar_323b.png'

function Banner() {
  return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='col-lg-11'>
                    <div className='banner-container d-flex justify-content-between'>
                        <div className='hero-text-container'>
                            <p>Hello!</p>
                            <h1>Lorem Ipsum is simply dummy</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Platea facilisis justo lorem dictum adipiscing ac sed non 
                                magna. Diam porta ultricies non nulla turpis vitae neque.
                            </p>
                            <a href='#test' className='btn btn-primary'>Hire me</a>
                        </div>

                        <div className='hero-image'>
                            <img src={hero} className='img-fluid' alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner