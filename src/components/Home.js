import React, { useEffect, useRef, useState } from "react";
import h1 from "../assets/gallery/horus1.jpg"
import h2 from "../assets/gallery/horus2.jpg"
import h3 from "../assets/gallery/horus3.jpg"

import aircraft from '../assets/gallery/travel/aircraft.jpg'
import excavator from '../assets/gallery/construction/excavator.jpg'
import nurse from '../assets/gallery/hospitality/nurse.jpg'

function Home() {
    return (
        <div className="home">
            <SlideShow />
            <div className="main-services">
                <Service title="Travel" description="Travel. Your money will return. Your time won’t.Live life with no excuses, travel with no regret." image={aircraft} />
                <Service title="Hospitality" description="Travel. Your money will return. Your time won’t.Live life with no excuses, travel with no regret." image={nurse} />
                <Service title="Construction" description="Travel. Your money will return. Your time won’t.Live life with no excuses, travel with no regret." image={excavator} />
            </div>
        </div>
    )
}

function Service({title, description, image}) {

    return (
        <div className="services-offered">
            <div className="s-image">
                <img src={image} alt={title} />
                <h1>{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
}

function SlideShow() {

    const slides = [h1, h2, h3, h1, h2, h3]
    const [index, setIndex] = useState(3)

    const slideRapperRef = useRef()
    const floatRef = useRef()

    useEffect(() => {
        slideRapperRef.current.style.height = (floatRef.current.getBoundingClientRect().height*1.3)+"px"
        // setInterval(() =>{
        //     setIndex(idx => (idx + 1)%6)
        // },5000)
    },[])

    return (
        <div className="slide-show-wrapper">
            <div className="slide-show">
                <div ref={slideRapperRef} className="slide" key={index}>
                    <img src={slides[index]} alt="Slide" />
                    <div ref={floatRef} className="float-description">
                        <h1>FREIGHT FORWARDING</h1>
                        <h2>WHEREVER IT NEEDS TO GO</h2>
                        <div className="slide-line"></div>
                        <h4>YOUR SOURCE FOR LOGISTICS FOR MORE THAN 20 YEARS</h4>
                        <button className="contact-us">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="dots">
                {
                    slides.map((sld, i) => {
                        return <div key={i} className={index===i ? "dot active-dot" : "dot"}></div>
                    })
                }
            </div>
        </div>
    )
}

export default Home;