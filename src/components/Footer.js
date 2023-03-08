import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im"
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <Logo size={100} />
            </div>
            <div className="contacts">
                <div><FiPhoneCall /><NavLink>+555-4884-039</NavLink></div>
                <div><FaEnvelope /><NavLink>helpdesk.logistics@horus.co.ke</NavLink></div>
                <div><ImLocation2 /><NavLink>Gamal, Al Haram, Giza Governorate 3514502, Egypt</NavLink></div>
            </div>
        </div>
    )
}

export default Footer;