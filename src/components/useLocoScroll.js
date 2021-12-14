import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll(start){
    useEffect(() => {
        if (!start) return;
        const scrollEl = document.getElementById('main-container')
        const scroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            
        })
    }, [start])
}