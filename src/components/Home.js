import React, { useEffect, useRef, useState } from "react";
import h1 from "../assets/gallery/horus1.jpg"
import h2 from "../assets/gallery/horus2.jpg"
import h3 from "../assets/gallery/horus3.jpg"

import aircraft from '../assets/gallery/travel/aircraft.jpg'
import excavator from '../assets/gallery/construction/excavator.jpg'
import nurse from '../assets/gallery/hospitality/nurse.jpg'
import truck from '../assets/gallery/shipping/truck.jpg'
import logistics  from '../assets/gallery/logistics.png'
import { GiCheckMark } from 'react-icons/gi'

function Home() {

    return (
        <div className="home">
            <SlideShow images={[h1,h2,h3]}>
                        <h1>FREIGHT FORWARDING</h1>
                        <h2>WHEREVER IT NEEDS TO GO</h2>
                        <div className="slide-line"></div>
                        <div className="key-obligations">
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Order Processing</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Materials Handling</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Warehousing</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Inventory Management</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Transportation</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Packaging</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Monitoring</div>
                        </div>
                        <div className="slide-line"></div>
                        <h4>YOUR SOURCE FOR LOGISTICS FOR MORE THAN 20 YEARS</h4>
                        <button className="contact-us">Contact Us</button>
            </SlideShow>
            <div className="p">
                <h1>Your Reliable Logistics Company</h1>
                <div className="slide-line"></div>
                <p>When it comes to your freight, it is imperative that you know where it is, where it is going, and that it is going to get there on time and safely. That is why so many companies turn to WTL when they are in need of a reliable transportation and distribution company.</p>
                <p>With more than 20 years of distribution service experience, we provide exceptional local, regional, and national distribution and warehouse services to businesses.</p>
                <div className="responsibilities-div">
                    <div className="res-image">
                        <img src={logistics} alt="logistics" />
                    </div>
                    <div className="responsibilities">
                        <h2><a href="http://www.">Lets discuss:</a></h2>
                        <div className="slide-line"></div>
                        <ul>
                            <li>International Shipping (Air or Sea)</li>
                            <li>Continental U.S. Shipping (Air, Land, or Sea)</li>
                            <li>Warehousing Services</li>
                            <li>Local Cartage Services for Door-to-Door</li>
                            <li>Delivery</li>
                            <li>Trade Show Exhibit Pickup & Delivery Services</li>
                            <li>& Much More...!</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-services">
                <Service title="Travel" description="Travel. Your money will return. Your time won’t.Live life with no excuses, travel with no regret." image={aircraft} />
                <Service title="Hospitality" description="Technically, our guests don’t owe us anything. They are paying for their stay and we have to make sure that they get their money’s worth." image={nurse} />
                <Service title="Construction" description="Quality. Safety. Reliability. Every time." image={excavator} />
                <Service title="Shipping" description="In one piece or it’s on us. Getting your groceries, bringing your morning coffee, and everything in between. Everywhere you need us to be." image={truck} />
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
            <div className="s-description">
                <p>{description}</p>
            </div>
        </div>
    )
}

function SlideShow({children, images}) {

    const slides = images
    const [index, setIndex] = useState(1)

    const [calc, setCalc] = useState(100)

    const imageWrapper = useRef()
    const floatDesc = useRef()
    const imageRef = useRef()

    function resizeWrapper(newvalue) {
        setCalc(newvalue)
    }

    useEffect(() => {
        resizeWrapper(floatDesc.current.offsetHeight)
        window.addEventListener('resize', () => {
            resizeWrapper(floatDesc.current.offsetHeight*1)
        })
    },[]) 

    useEffect(() => {
        imageWrapper.current.style.height = (calc)+"px"
    },[calc])

    return (
        <div className="slide-show-wrapper">
            <div className="slide-show">
                <div className="slide" key={index}>
                    <div ref={imageWrapper} className="slide-image"><img ref={imageRef} src={slides[index]} alt="Slide" /></div>
                    <div ref={floatDesc} className="float-description">
                        { children }
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

export { Home, SlideShow }