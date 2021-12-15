import React from 'react'
import './style.scss'
import './product-item.scss'
export default function Products() {


    return(
        <div className='ProductsWrapper' data-scroll-section data-scroll>

            <div className='product first' data-scroll>

                <div className='product-1 product-item'>
                    <p className='product-item-title'>Fancy Chair 1</p>
                    <p className='info'>18 reviews || 4.5 / 5</p>
                    <p className='price'>489$</p>
                    <p className='description'>
                    vespian combines contemporary european styles with a sense of environmental 
                    responsibility that is unique to our brand identity. we are pioneering the 
                    art of sustainable home decor.
                    </p>
                    <div className='product-item-img' data-scroll data-scroll-speed="1.2"></div>
                </div>
            </div>

            <div className='product second' data-scroll>
                <div className='product-2 product-item'>
                    <p className='product-item-title'>Fancy Chair 2</p>
                    <p className='info'>18 reviews || 4.5 / 5</p>
                    <p className='price'>489$</p>
                    <p className='description'>
                    vespian combines contemporary european styles with a sense of environmental 
                    responsibility that is unique to our brand identity. we are pioneering the 
                    art of sustainable home decor.
                    </p>
                    <div className='product-item-img' data-scroll data-scroll-speed="0.5"></div>
                </div>
            </div>

            <div className='product third' data-scroll >
                <div className='product-3 product-item'>
                    <p className='product-item-title'>Fancy Chair 3</p>
                    <p className='info'>18 reviews || 4.5 / 5</p>
                    <p className='price'>489$</p>
                    <p className='description'>
                    vespian combines contemporary european styles with a sense of environmental 
                    responsibility that is unique to our brand identity. we are pioneering the 
                    art of sustainable home decor.
                    </p>
                    <div className='product-item-img' data-scroll data-scroll-speed="0.5"></div>
                </div>
            </div>

            <div className='product fourth' data-scroll >
                <div className='product-4 product-item'>
                    <p className='product-item-title'>Fancy Chair 4</p>
                    <p className='info'>18 reviews || 4.5 / 5</p>
                    <p className='price'>489$</p>
                    <p className='description'>
                    vespian combines contemporary european styles with a sense of environmental 
                    responsibility that is unique to our brand identity. we are pioneering the 
                    art of sustainable home decor.
                    </p>
                    <div className='product-item-img' data-scroll data-scroll-speed="1.2"></div>
                </div>
            </div>
        </div>
    )
}