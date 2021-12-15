// Navbar independent component
import React, {useEffect, useRef} from 'react'
import './style.scss'
import { gsap } from "gsap";

export default function Navbar(props) {

    const navbarRef = useRef()
    // menu click
    // only run once effect
    useEffect(() => {
        const navbarTL = gsap.timeline({delay: 0, ease: 'Power4.out'})
        navbarTL.fromTo(navbarRef.current, {y: '100%'}, {duration: 1, y: '0%'})
    }, [])

    return(
        <div className='NavbarWrapper' data-scroll-section>
            <div className='Navbar' ref={navbarRef}>
                <div className='Navbar__menu'>
                <span onClick={() => {props.setter()}}>menu</span>
                </div>


                <div className='Navbar__title'>
                    <span>vespian</span>
                </div>


                <div className='Navbar__about'>
                    <span>about</span>
                </div>


                <div className='Navbar__account'>
                    <span>account</span>
                </div>
            </div>
        </div>
    )
}