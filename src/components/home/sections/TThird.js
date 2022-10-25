import React from 'react'
import thirdSectionImg from '../../../images/undraw_Site_stats_re_ejgy.png'

function TThird() {
  return (
    <div className='about d-flex col-12 d-flex justify-content-between flex-column flex-md-row'>
        <div className='col-12 col-md-6'>
            <img src={thirdSectionImg} className='section-img' alt='img' />
        </div>
        <div className='d-flex flex-column col-12 col-md-6'>
            <h6 className='purple-heading'>That's about it!</h6>
            <p className='purple-sub-heading'>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
        </div>
    </div>
  )
}

export default TThird