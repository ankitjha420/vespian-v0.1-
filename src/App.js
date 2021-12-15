import React, {useState, useEffect, useRef} from 'react'
import './App.scss'
import Navbar from './components/Navbar/index'
import Header from './components/Header'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Footer from './components/Footer'
import Menu from './components/MenuOverlay/Menu'
import Cursor from './components/Cursor'
import locomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import gsap from 'gsap/all'


export default function App(){

    const [menuActive, setMenuActive] = useState(false)

    function turnItOn(){
        setMenuActive(true)
    }
    function turnItOff(){
        setMenuActive(false)
    }

    useEffect(() => {
        console.log('it changed')
    }, [menuActive])

    // scroll related stuff
    const AppRef = useRef()
    const marqueeRef = useRef()
    const footerRef = useRef()

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: AppRef.current,
            smooth: true,
            multiplier: 1
        })
        console.log(marqueeRef.current)

        // scroll based animations
        scroll.on('scroll', (args) => {
            if(typeof args.currentElements['marquee'] === 'object'){
                let progressMarquee = args.currentElements['marquee'].progress;
                // console.log(progressMarquee)

                //moving the marquee
                if(progressMarquee){
                gsap.to(marqueeRef.current,
                     {duration: 1, x: `${-(progressMarquee * 40)}%`, ease: 'Power4.out'})
            }
            }
        })
        scroll.on('scroll', (args) => {
            if(typeof args.currentElements['footer'] === 'object'){
                let progressFooter = args.currentElements['footer'].progress
                console.log(progressFooter)

                if(progressFooter > 0.05){
                    gsap.to(footerRef.current, {duration: 1, height: '200px'})
                }
            }
        })
    }, [])

    console.log(window.innerWidth, window.innerHeight)
    return(
    <div className='AppWrapper' data-scroll-container ref={AppRef} id='main-container'>
        <Cursor />
        <Navbar setter={turnItOn}/>
        <Menu parentState={menuActive} setter={turnItOff}/>
        <Header />
        <Marquee reef={marqueeRef}/>
        <Products />
        <Footer reef={footerRef}/>
    </div>)
}