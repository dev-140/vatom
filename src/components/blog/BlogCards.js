import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LikeBtn from './LikeBtn'
import ReportBtn from './ReportBtn'

function BlogCards(props) {
    var currCategory = props.category
    var category = currCategory.replace(/-/g, " ");

    console.log(category)

    return (
        <div className={`blog-cards card ${props.type} ${props.category}`} id={props.blogNo}>
            <div className='flex-column'>
                <div className='card-header d-flex'>
                    <p className='author-name'>{props.author}:</p>
                    <p className='date-created'>{props.time}</p>
                </div>
                <div className='card-sub-header d-flex'>
                    <p className='file-type'>type: {props.type}</p>
                    <p className='data-category'>{category}</p>
                </div>
                <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.text}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between card-footer'>
                <Link to={`/file/${props.uid}`} target="_blank" rel="noopener noreferrer" className='btn btn-primary view'>view</Link>
                <ReportBtn uid={props.uid} reportCount={props.reportCount}></ReportBtn>
                <LikeBtn uid={props.uid} likeCount={props.likeCount}/>
            </div>
        </div>
    )
}

export default BlogCards