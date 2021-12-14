import React, {useRef} from 'react'
import './style.scss'
import gsap from 'gsap'

export default function Menu(props) {
    const menuRef = useRef()

    if(props.parentState){
        gsap.to(menuRef.current, {duration: 1, x: '0%'})
    }

    function back(){
        if(menuRef.current){
            props.setter()
            gsap.to(menuRef.current, {duration: 0.55, x: '-100%', ease: 'Power4.in'})
        }
    }
    
    return(
        <div className='MenuWrapper active' ref={menuRef}>
            <div className='menu'>
                <span className='title'>menu</span>
                <div className='back' onClick={() => {back()}}></div>
                <div className='menu-content'>
                    <div className='menu-item'>about</div>
                    <div className='menu-item'>account</div>
                    <div className='menu-item'>github repo</div>
                    <div className='menu-item'>figma files</div>
                </div>
                <span className='author'>designed and developed <br />
                by Ankit Kumar Jha</span>
            </div>
        </div>
    )
}