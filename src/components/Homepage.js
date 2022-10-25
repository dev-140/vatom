import React from 'react'
import Banner from './home/Banner'
import SecondSection from './home/SecondSection'
import ThirdSection from './home/ThirdSection'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function Homepage() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <div className='homepage-main-container'>
            <div className='container'>
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(2000, 0))}>
                            <Banner />
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveIn(-2000, -0), MoveOut(2000, 0))}>
                            <SecondSection />
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
                
                <ThirdSection />
            </div>
        </div>
    )
}

export default Homepage