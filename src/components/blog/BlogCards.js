import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-router-dom'
import LikeBtn from './LikeBtn'
import ReportBtn from './ReportBtn'

function BlogCards(props) {
    return (
        <AnimationOnScroll animateIn='animate__backInLeft' animateOut='animate__bounceOutRight' delay={500}>
            <div className='blog-cards card' id={props.blogNo}>
                <AnimationOnScroll animateIn='animate__fadeIn' delay={1500}>
                    <div className='card-body'>
                        <p>date: {props.time}</p>
                        <h5 className='card-title'>{props.title}</h5>
                        <p className='card-text'>{props.text}</p>
                        <p className='author-name'>by {props.author}</p>
                        <Link to={`/file/${props.uid}`} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>view</Link>
                        <ReportBtn uid={props.uid} reportCount={props.reportCount}></ReportBtn>
                        <LikeBtn uid={props.uid} likeCount={props.likeCount}/>
                    </div>
                </AnimationOnScroll>
            </div>
        </AnimationOnScroll>
    )
}

export default BlogCards