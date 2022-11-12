import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

function Navigation() {
    const [isActive, setIsActive] = useState(false);
    const [onTop, setTop] = useState('top');
    const menuClick = (e) => {
        setIsActive(current => !current);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.scrollY === 0) {
                setTop('sticky onTop');
            } if (window.scrollY > 0){
                setTop('sticky fixedMenu');
            }
        },);
        return () => clearInterval(interval);
    }, []);

    const { scrollYProgress } = useScroll();
    const purple = 'rgb(24, 33, 109)';

    return (
        <div className={onTop}>
            <div className={isActive ? 'active' : ''}>
                <div className='container'>
                    <div className='d-flex justify-content-start'>
                        <div className='col-12'>
                            <div className='navbar bg-light navbar-expand-lg navbar-light d-flex justify-content-between pt-3 pt-md-2'>
                                <a className='navbar-brand' href='#TEST'>vatom</a>

                                <i className={isActive ? 'fa-solid fa-xmark menu-btn d-none' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>

                                <div className={isActive ? 'nav-links-container d-flex active' : 'nav-links-container d-flex'}>
                                    <i className={isActive ? 'fa-solid fa-xmark menu-btn' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>
                                    <div onClick={menuClick} className='menu-mobile-container'>
                                        <Link to='/home' className='link'>Home</Link>
                                        <Link to='/browse' className='link'>Browse</Link>
                                        <Link to='/upload-category' className='link'>Upload</Link>
                                        <Link to='/upload-category' className='link'>Terms & Condition</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <motion.div className='page-line'  style={{ scaleX: scrollYProgress, background: purple, height: '5px' }}></motion.div>
            </div>
        </div>
    )
}

export default Navigation