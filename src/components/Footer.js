import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-main-container'>
            <div className='container'>
                <div className='py-5'>
                    <div className='row flex-column'>
                        <div className='footer-main d-flex flex-column flex-md-row justify-content-around'>
                            <div className='col-3 mb-3'>
                                <h5>Section</h5>
                                <ul className='nav flex-column'>
                                    <Link to="/home" className='nav-item mb-2'>Home</Link>
                                    <Link to="/browse" className='nav-item mb-2'>Browse</Link>
                                    <Link to="/upload-category" className='nav-item mb-2'>Upload</Link>
                                </ul>
                            </div>
                            <div className='col-3 mb-3'>
                                <h5>About us</h5>
                                <ul className='nav flex-column'>
                                    <li className='nav-item mb-2'>vatom</li>
                                    <li className='nav-item mb-2'>vatom</li>
                                    <li className='nav-item mb-2'>vatom</li>
                                    <li className='nav-item mb-2'>vatom</li>
                                </ul>
                            </div>
                            <div className='col-3 mb-3'>
                                <h5>Links</h5>
                                <ul className='nav flex-column'>
                                    <li className='nav-item mb-2'>Facebook</li>
                                    <li className='nav-item mb-2'>Twitter</li>
                                    <li className='nav-item mb-2'>Pinterest</li>
                                    <li className='nav-item mb-2'>Instagram</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className='purple-sub-heading text-center'>VATOM © 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer