import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

    return (
        <div className={onTop}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='col-lg-11'>
                        <div className='navbar bg-light navbar-expand-lg navbar-light d-flex justify-content-between'>
                            <a className='navbar-brand' href='#TEST'>vatom</a>

                            <i className={isActive ? 'fa-solid fa-xmark menu-btn d-none' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>

                            <div className={isActive ? 'nav-links-container d-flex active' : 'nav-links-container d-flex'}>
                                <i className={isActive ? 'fa-solid fa-xmark menu-btn' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>
                                <div onClick={menuClick} className='menu-mobile-container'>
                                    <Link to='' className='link'>Home</Link>
                                    <Link to='/browse' className='link'>Browse</Link>
                                    <a href='#TEST' className='link'>About</a>
                                    <Link to='/upload-category' className='link'>Upload</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation