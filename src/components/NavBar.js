import React, { useState } from "react"
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaHome, FaHamburger, FaWindowClose, FaWarehouse } from 'react-icons/fa'
import { GiDeliveryDrone, GiShieldBash } from 'react-icons/gi'
import { MdEmojiTransportation, MdOutlineConnectWithoutContact } from 'react-icons/md'

//<div className="close-services"><FaWindowClose /></div>

function NavBar() {

  const [showNav, setShowNav] = useState(false)
  

    return (
      <div className="nav">
        <Logo size={150} />
        <div className="services-L">
          <NavLink to={""}>..<FaHome />..</NavLink>
          <NavLink to={""}>Deliveries</NavLink>
          <NavLink to={""}>Transportation</NavLink>
          <NavLink to={""}>Ware Housing</NavLink>
          <NavLink to={""}>Special Equipment</NavLink>
        </div>
        <div className="services-P">
          <NavLink to={""}><FaHome /> Home</NavLink>
          <NavLink to={""}><GiDeliveryDrone /> Deliveries</NavLink>
          <NavLink to={""}><MdEmojiTransportation /> Transportation</NavLink>
          <NavLink to={""}><FaWarehouse /> Ware Housing</NavLink>
          <NavLink to={""}><GiShieldBash /> Special Equipment</NavLink>
          <NavLink to={""}><GiShieldBash /> About Us</NavLink>
          <NavLink to={""}><MdOutlineConnectWithoutContact /> Contact Us</NavLink>
        </div>
      </div>
    )
}

export default NavBar;