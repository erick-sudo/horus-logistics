import React from "react";
import "./About.css"
import aboutlogo from "../assets/aboutlogo.png"
import dp from "../assets/avatar.png"
import investorlogo from "../assets/gallery/investors/investors.png"
import Logo from "./Logo";

function About() {

    const pictures = new Array(8).fill(dp)

    const leaders = [
        {
            fullname: "John Doe",
            position: "Software Engineer",
            avatar: dp,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            contacts: [
                "+254743819234","+254743819234"
            ]
        },
        {
            fullname: "John Doe",
            position: "Software Engineer",
            avatar: dp,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            contacts: [
                "+254743819234","+254743819234"
            ]
        },
        {
            fullname: "John Doe",
            position: "Software Engineer",
            avatar: dp,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            contacts: [
                "+254743819234","+254743819234"
            ]
        }
    ]

    return (
        <div className="about">
            <div className="about-title">
                <h1>The <span className="highlight1">Horus</span> <span className="highlight2">Logistics</span></h1>
                <h2>We Carry The Load</h2>
                <div className="horus-description">
                    <div className="horus-logo"><img src={aboutlogo} alt="Horus Logistics" /></div>
                    <div className="about-horus">
                        <p>At Apptopia, we want to solve the biggest problem in mobile: everyone is guessing.</p>
                        <p>Publishers need to know what apps to build, how to monetize them, and where to price them. Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively. Investors need to know which apps and genres are growing the quickest, and where users are really spending their time (and money).</p>
                        <p>In business, we need data to make informed decisions. Apptopia provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.</p>
                    </div>
                </div>
            </div>
            <div className="team">
                <h1>Meet Our <span className="highlight">Leadership</span></h1>
                <div className="staff">
                    {
                        leaders.map((leader, index) => {
                            return <Person key={index} {...leader} />
                        })
                    }
                </div>
            </div>
            <h2>Gallery</h2>
            <div className="gallery">
                {
                    pictures.map((pic, index) => {
                        return <img style={{height: "30vh"}} key={index} src={pic} alt="Gallery" />
                    })
                }
            </div>
            <div className="investors-wrapper">
                <div className="inv-h">
                    <img style={{height: "20vh"}} src={investorlogo} alt="" />
                    <h2>Investors</h2>
                </div>
                <div className="investors">
                    {
                        [1,2,3,4,5,6,7].map((invest,index) => {
                            return <Logo size={100} />
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

function Person({fullname, position, avatar, description, contacts}) {
    return (
        <div className="person">
            <div className="dp">
                <img src={avatar} alt="" />
            </div>
            <div className="fullname">{fullname}</div>
            <div className="position">{position}</div>
            <div className="line-h"></div>
            <p className="person-desc">{description}</p>
            <div className="m-contacts">
                {
                    contacts.map((contact, index) => {
                        return <li key={index}>{contact}</li>
                    })
                }
            </div>
        </div>
    )
}

export default About;