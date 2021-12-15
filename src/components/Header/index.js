// this will render our Header component
import React, {useEffect, useRef} from 'react'
import './style.scss'
import { gsap } from "gsap";


export default function Header() {

    // All the refs go here
    const mottoRef = useRef()
    const leftRef = useRef()
    const rightRef = useRef()
    const centreRef = useRef()
    const quoteRef = useRef()
    // This effect runs once
    useEffect(() => {

        // looped animation for the motto
        gsap.to(mottoRef.current, {duration: 20
            ,x: '-33.5%',
            ease: 'linear',
            repeat: -1})

        // animate in the images

        // ;
        const leftTL = gsap.timeline({delay: 0.5, 
            ease: 'Power4.out'})
        leftTL.fromTo([rightRef.current, leftRef.current], {height: '0%'}, {duration: 1, height: '80%'})
        leftTL.fromTo(centreRef.current, {height: '0%'}, {duration: 0.75, height: '55%'}, 0.5) 
        leftTL.fromTo(quoteRef.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1}, 1.5) 
    }, [])

    return(
        <div className='HeaderWrapper' data-scroll-section>
            <div className='Header'>

                <div className='Header__motto'>
                    <span ref={mottoRef}>
                    sustainable. modern. 100% natural. european. hand-made. durable. 
                    sustainable. modern. 100% natural. european. hand-made. durable.
                    sustainable. modern. 100% natural. european. hand-made. durable.
                    </span>
                </div>

                <div className='Header__hero'>

                    <div className='Header__left' ref={leftRef} data-scroll data-scroll-speed="2.5">
                        <div className='leftimg'></div>
                    </div>

                    <div className='Header__quote' ref={quoteRef} data-scroll data-scroll-speed="0.5">
                    <p className='quoteText'>
                    “Good design is as little as possible. Less, but <span className='ExtraboldItalic'>
                    better,</span> because it concentrates 
                    on the essential aspects, and the products are not burdened with non-essentials. 
                    Back to purity, back to <span className='ExtraboldItalic'>simplicity</span>.”
                    <br />
                    <br />
                    <a href='https://en.wikipedia.org/wiki/Dieter_Rams' className='DieterRams'>― Dieter Rams</a>
                    </p>
                    </div>

                    <div className='Header__centre' ref={centreRef} data-scroll data-scroll-speed="1">
                        <div className='centreimg'></div>
                    </div>
                    <div className='Header__right' ref={rightRef} data-scroll data-scroll-speed="2.5">
                    <div className='rightimg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}