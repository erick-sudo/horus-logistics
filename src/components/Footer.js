import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im"
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Subscribe from "./Subscribe";
import { BsTwitter, BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-logo">
                    <Logo size={100} />
                </div>
                <Subscribe />
                <div className="contacts-wrapper">
                    <div className="contacts">
                        <div><FiPhoneCall /><NavLink>+555-4884-039</NavLink></div>
                        <div><FaEnvelope /><NavLink>helpdesk.logistics@horus.co.ke</NavLink></div>
                        <div><ImLocation2 /><NavLink>Gamal, Al Haram, Giza Governorate 3514502, Egypt</NavLink></div>
                    </div>
                    <div className="social">
                        <NavLink to="https://twitter.com" ><BsTwitter /></NavLink>
                        <NavLink to="https://facebook.com" ><BsFacebook /></NavLink>
                        <NavLink to="https://whatsapp.com" ><BsWhatsapp /></NavLink>
                        <NavLink to="https://instagram.com" ><BsInstagram /></NavLink>
                    </div>
                </div>
                <p><em>Horus</em> <b>Logistics</b> &copy; 2023, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;