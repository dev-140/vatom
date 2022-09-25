import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
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
                        <a href={props.bId} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>view</a>
                        <ReportBtn uid={props.uid} reportCount={props.reportCount}></ReportBtn>
                    </div>
                </AnimationOnScroll>
            </div>
        </AnimationOnScroll>
    )
}

export default BlogCards