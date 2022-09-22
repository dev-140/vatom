import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function BlogCards(props) {
    return (
        <AnimationOnScroll animateIn='animate__backInLeft' animateOut='animate__bounceOutRight' delay={500}>
            <div className='blog-cards card' id={props.blogNo}>
                <AnimationOnScroll animateIn='animate__fadeIn' delay={1500}>
                    <div className='card-body'>
                        <h5 className='card-title'>{props.title}</h5>
                        <p className='card-text'>{props.text}</p>
                        <p className='author-name'>by {props.author}</p>
                        <a href={props.bId} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>view</a>
                        <button className='btn btn-danger'>report</button>
                    </div>
                </AnimationOnScroll>
            </div>
        </AnimationOnScroll>
    )
}

export default BlogCards