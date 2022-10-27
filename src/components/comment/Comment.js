import React from 'react'

function Comment(props) {
    return (
        <div className='comment d-flex flex-column'>
            <p className='coment-date purple-sub-heading'>{props.date}</p>
            <div className='comment-details d-flex flex-column'>
                <p className='comment-content purple-sub-heading'><span className='author'>{props.name} - </span>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment