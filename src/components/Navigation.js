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
                        <div className='navbar bg-light navbar-expand-lg navbar-light d-flex'>
                            <a className='navbar-brand' href='#TEST'>vatom</a>

                            <i className={isActive ? 'fa-solid fa-xmark menu-btn' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>

                            <div className={isActive ? 'nav-links-container d-flex active' : 'nav-links-container d-flex'}>
                                <div className='btn-group'>
                                    <Link to='/home' className='btn btn-secondary'>Home</Link>
                                    <a href='#TEST' className='btn btn-secondary'>Contacts</a>
                                    <a href='#TEST' className='btn btn-secondary'>About</a>
                                    <Link to='/home/upload' className='btn btn-secondary'>Upload</Link>
                                    {/* <Link to='/home/login' className='btn btn-secondary'>Login</Link> */}
                                </div>
                                
                                {/* <div className='input-group'>
                                    <div className='input-group-prepend'>
                                        <a href='#TEST' className='input-group-text search-btn' id='btnGroupAddon'><i className='fa-solid fa-magnifying-glass'></i></a>
                                    </div>
                                    <input type='text' className='form-control search-box' placeholder='Search'></input>
                                </div> */}

                                <i className={isActive ? 'fa-solid fa-xmark menu-btn' : 'fa-solid fa-bars menu-btn'} onClick={menuClick}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation