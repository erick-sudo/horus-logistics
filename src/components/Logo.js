import React from "react"
import logo from "../assets/logo.png"

function Logo({size}) {
    return (
      <div className="logo">
        <img className="logo-image" src={logo} style={{height: `${size}px`}} alt="Horus" />
      </div>
    )
}

export default Logo;