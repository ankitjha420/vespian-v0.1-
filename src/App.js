import React, {useState, useEffect, useRef} from 'react'
import './App.scss'
import Navbar from './components/Navbar/index'
import Header from './components/Header'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Footer from './components/Footer'
import Menu from './components/MenuOverlay/Menu'
import locomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

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

    // useEffect(() => {
    //     const scroll = new locomotiveScroll({
    //         el: AppRef.current,
    //         smooth: true,
    //         multiplier: 1
    //     })
    // }, [])

    console.log(window.innerWidth, window.innerHeight)
    return(
    <div className='AppWrapper' data-scroll-container ref={AppRef} id='main-container'>
        <Navbar setter={turnItOn} />
        <Menu parentState={menuActive} setter={turnItOff}/>
        <Header />
        <Marquee />
        <Products />
        <Footer />
    </div>)
}