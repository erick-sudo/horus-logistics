import React from 'react';
import arrow from "../assets/gallery/transport/arrow.png"

function Arrow({width=100}) {
    return (
        <div className='arrow' style={{width: width*3, height: width*0.4539}}>
            <img src={arrow} style={{width: width}} alt="------>" />
        </div>
    )
}

export default Arrow;