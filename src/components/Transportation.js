import React, { useState, useEffect, useRef } from "react";

import truck from "../assets/gallery/transport/constructionmaterial.png"
import fragile from "../assets/gallery/transport/fragile.png"
import cruiser from "../assets/gallery/transport/landcruiser.jpeg"
import produce from "../assets/gallery/transport/produce.png"
import tra from "../assets/gallery/transport/tra.png"
import Arrow from "./Arrow";
import { MdDoubleArrow } from 'react-icons/md'

import { SlideShow } from "./Home";

import Subscribe from "./Subscribe";

function Transportation() {

    const container = useRef()

    const refs = [useRef(), useRef(), useRef(), useRef()]

    const [resize, setResize] = useState(0)

    function changeResize(x) {
        setResize(x)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            changeResize(Math.random())
        })
    },[])

    useEffect(() => {
        container.current.style.height = (refs.map(div => div.current.offsetHeight).reduce((a,b) => a + b))*0.9+"px"
        let top = 0
        const w = refs[0].current.offsetWidth
        const space = container.current.offsetWidth-w
        const interval = space/(refs.length-1)

        refs.forEach((div,i) => {    
            div.current.style.left = `${i*interval}px`
            div.current.style.top = top + "px"
            top += 190
        })
    }, [resize])

    return (
        <div className="transportation">
            <SlideShow images={[tra, tra]}>
                <div className="trans" style={{minHeight: "300px"}}>
                    <h1>Safe & Secure Shipping Services</h1>
                    <div className="slide-line"></div>
                    <h3>Whether you are taking advantage of our nationwide transport services or our commercial worldwide air, land, and sea freight, we have got you covered.</h3>
                    <h4>Our comprehensive network allows us to find the best match of cost, time, and performance to meet your needs—from sending goods next door or sending them to the other end of the country.</h4>
                </div>
                <Arrow />
            </SlideShow>
            <div ref={container} className="categories">
                <div className="additional a-top">
                    
                </div>
                <div className="additional a-bottom">
                    
                </div>
                <div ref={refs[0]} className="trans-categories">
                    <div className="trans-img">
                        <img src={fragile} alt="Fragile" />
                    </div>
                    <div className="trans-desc">
                        <p>Have your fragile luggage delivered in one piece.</p>
                        <EngageButtton />
                    </div>
                </div>
                <div ref={refs[1]} className="trans-categories">
                    <div className="trans-img">
                        <img src={truck} alt="Fragile" />
                    </div>
                    <div className="trans-desc">
                        <p>Build quality homes and lifestyles with efficient and reliable delivery of construction materials.</p>
                        <EngageButtton />
                    </div>
                </div>
                <div ref={refs[2]} className="trans-categories">
                    <div className="trans-img">
                        <img src={cruiser} alt="Fragile" />
                    </div>
                    <div className="trans-desc">
                        <p>Adventure with family and friends.</p>
                        <EngageButtton />
                    </div>
                </div>
                <div ref={refs[3]} className="trans-categories">
                    <div className="trans-img">
                        <img src={produce} alt="Fragile" />
                    </div>
                    <div className="trans-desc">
                        <p>Move your bulky agricultural produce safe to the market.</p>
                        <EngageButtton />
                    </div>
                </div>
            </div>
            <div className="subscribe-tra">
                <Subscribe />
            </div>
        </div>
    )
}

function EngageButtton() {
    return (
        <div className="engage-btn">
            <button><MdDoubleArrow /></button>
        </div>
    )
}

export default Transportation;