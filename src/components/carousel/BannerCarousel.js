import React, { Component } from 'react'
import Slider from 'react-slick'
import Slide1 from '../../images/bakery-gd88b1a355_1920.jpg'
import Slide2 from '../../images/beans-ge43d2b3de_1920.jpg'
import Slide3 from '../../images/burgers-g95f4a080b_1920.jpg'
import Slide4 from '../../images/meat-g01605ad03_1920.jpg'

export default class BannerCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // fade: true,
            autoplaySpeed: 2000
        };

        return (
            <>
                <Slider {...settings} className='slider'>
                    <div className='slider-box'>
                        <img src={Slide1} alt='slide 1' className='slider-image' />
                        <div className='slider-content'>
                            <p>Headline 1</p>
                            <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href='#test' className='btn btn-primary'>Lorem <i className="fa-solid fa-burger"></i></a>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <img src={Slide2} alt='slide 2' className='slider-image' />
                        <div className='slider-content'>
                            <p>Headline 2</p>
                            <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href='#test' className='btn btn-primary'>Lorem <i className="fa-solid fa-bowl-food"></i></a>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <img src={Slide3} alt='slide 3' className='slider-image' />
                        <div className='slider-content'>
                            <p>Headline 3</p>
                            <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href='#test' className='btn btn-primary'>Lorem <i className="fa-solid fa-mug-hot"></i></a>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <img src={Slide4} alt='slide 4' className='slider-image' />
                        <div className='slider-content'>
                            <p>Headline 4</p>
                            <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href='#test' className='btn btn-primary'>Lorem <i className="fa-solid fa-egg"></i></a>
                        </div>
                    </div>
                </Slider>
            </>
        );
    }
}