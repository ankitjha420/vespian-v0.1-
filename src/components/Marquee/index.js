import React from 'react'
import './style.scss'


export default function Marquee(props) {

    // useEffect(() => {
    //     console.log(props.reef.current)
    // }, [])

    return(
        <div className='MarqueeWrapper' data-scroll-section>
            <div className='Marquee' data-scroll data-scroll-id='marquee' ref={props.reef}>
            explore our 2022 collection | explore our 2022 collection 
            explore our 2022 collection | explore our 2022 collection 
            explore our 2022 collection | explore our 2022 collection 
            explore our 2022 collection | explore our 2022 collection 
            explore our 2022 collection | explore our 2022 collection 
            </div>
        </div>
    )
}