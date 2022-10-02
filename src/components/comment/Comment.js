import React from 'react'

function Comment(props) {
    return (
        <div className='comment d-flex flex-column'>
            <p>{props.date}</p>
            <p>{props.name} : {props.comment}</p>
        </div>
    )
}

export default Comment