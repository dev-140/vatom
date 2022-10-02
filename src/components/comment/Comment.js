import React from 'react'

function Comment(props) {
    return (
        <div className='comment card d-flex'>
            <p className='coment-date'>{props.date}</p>
            <div className='comment-details d-flex flex-column'>
                <p className='author'>by: {props.name}</p>
                <p className='comment-content'>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment