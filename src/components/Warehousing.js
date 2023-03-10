import React from "react";
import "./Warehousing.css"
import { SlideShow } from "./Home";
import warehouse1 from "../assets/gallery/warehousing/warehouse1.png"
import { GiCheckMark } from 'react-icons/gi'
import { ImArrowDownLeft } from 'react-icons/im'

function Warehousing({setConsultationFormVisible}) {
    return (
        <div className="warehousing">
            <SlideShow images={[warehouse1, warehouse1]}>
                <div style={{minHeight: "500px"}}>
                    <h1>Comprehensive Warehousing &<br/> Distribution Services</h1>
                    <div className="key-obligations">
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Efficient storage</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Security</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Inventory accountability</div>
                            <div className="h4"><span className="ticks"><GiCheckMark /></span> Fulfillment of orders and distribution</div>
                    </div>
                </div>
            </SlideShow>
            <div className="ware-float1">
                <h1>We are looking forward to take your business to the next level!</h1>
                <button onClick={() => setConsultationFormVisible(true)}>Request a call-back <ImArrowDownLeft /></button>
            </div>
        </div>
    )
}

export default Warehousing;