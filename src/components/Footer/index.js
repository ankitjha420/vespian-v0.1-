import React from 'react'
import './style.scss'

export default function Footer(props) {


    return(
        <div className='FooterWrapper' data-scroll-section data-scroll data-scroll-id="footer"
        ref={props.reef}>
            <div className='Footer'>

                <div className='title'>
                    <p onClick={props.click}>vespian</p>
                </div>

                <div className='author'>
                    <p>Designed and developed by</p>
                    <p>Ankit Kumar Jha</p>
                    <a href='https://www.figma.com/file/MsxffSZkKVQvWiedvyMgcz/Vespian'>
                        Figma files
                    </a>
                    <br />
                    <a href='https://github.com/ankitjha420/vespian-v0.1-'>
                    Github repo
                    </a>
                </div>
            </div>
        </div>
    )
}