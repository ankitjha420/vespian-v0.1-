import React, {useRef} from 'react'
import './style.scss'
import gsap from 'gsap'

export default function Cursor(){

    const cursorRef = useRef()
    window.addEventListener('mousemove', mouseMover)

    function mouseMover(e){
        let {clientX, clientY} = e
        gsap.to(cursorRef.current, {duration: 0.25, x: (clientX - 320), y: (clientY - 260), ease: 'ease'})
    }

    return(
        <div className='cursor' ref={cursorRef}></div>
    )
}