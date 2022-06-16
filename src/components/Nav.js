import React from 'react'

function Nav() {

  return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='col-lg-11'>
                    <div className='navbar bg-light navbar-expand-lg navbar-light d-flex'>
                        <a class='navbar-brand' href='#'>SADIE</a>

                        <div className='nav-links-container d-flex'>
                            <div className='btn-group'>
                                <a href='' className='btn btn-secondary'>Contacts</a>
                                <a href='' className='btn btn-secondary'>About</a>
                                <a href='' className='btn btn-secondary'>Artworks</a>
                            </div>
                            
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <a href='' className='input-group-text search-btn' id='btnGroupAddon'><i class='fa-solid fa-magnifying-glass'></i></a>
                                </div>
                                <input type='text' className='form-control search-box' placeholder='Search'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav