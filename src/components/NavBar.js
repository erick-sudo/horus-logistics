import React, { useState } from "react"
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaHome, FaHamburger, FaWindowClose, FaWarehouse } from 'react-icons/fa'
import { GiDeliveryDrone, GiShieldBash } from 'react-icons/gi'
import { MdEmojiTransportation, MdOutlineConnectWithoutContact } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'

function NavBar() {

  const [showNav, setShowNav] = useState(false)
  

    return (
      <div className="nav" onMouseLeave={() => setShowNav(false)}>
        <Logo size={150} />
        {!showNav ? <div className="show-nav" onClick={() => setShowNav(true)}><FaHamburger /></div> : null}
        <div className="services-L">
          <NavLink to={"/"}>..<FaHome />..</NavLink>
          <NavLink to={"/deliveries"}>Deliveries</NavLink>
          <NavLink to={"/transportation"}>Transportation</NavLink>
          <NavLink to={"/warehousing"}>Ware Housing</NavLink>
          <NavLink to={"/aboutus"}>About Us</NavLink>
          <NavLink to={"/contactus"}>Contact Us</NavLink>
        </div>
        { showNav ? <div className="services-P">
          <div className="close-services" onClick={() => setShowNav(false)}><FaWindowClose /></div>
          <Logo size={60} />
          <NavLink to={"/"}><FaHome /> Home</NavLink>
          <NavLink to={"/deliveries"}><GiDeliveryDrone /> Deliveries</NavLink>
          <NavLink to={"/transportation"}><MdEmojiTransportation /> Transportation</NavLink>
          <NavLink to={"/warehousing"}><FaWarehouse /> Ware Housing</NavLink>
          <NavLink to={"/aboutus"}><IoPeopleCircleOutline /> About Us</NavLink>
          <NavLink to={"/contactus"}><MdOutlineConnectWithoutContact /> Contact Us</NavLink>
        </div> : null}
      </div>
    )
}

export default NavBar;