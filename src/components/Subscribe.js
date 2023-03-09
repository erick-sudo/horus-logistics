import React from "react";
import { BsFillSendFill } from 'react-icons/bs'

function Subscribe() {
    return (
        <div className="subscribe-wrapper">
            <h3>Subscribe to our News Letter</h3>
            <div className="subscribe">
            <input type="text" placeholder="Email Address" />
            <button><BsFillSendFill /></button>
            </div>
        </div>
    )
}

export default Subscribe;