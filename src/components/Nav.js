import React from 'react'

function Nav() {
    function activateLasers(e) {
        console.log('hello');
    }

  return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='col-lg-11'>
                    nav
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav