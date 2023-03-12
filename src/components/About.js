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
                        <p>We specialize in commodities trading company based out of Nairobi, Kenya.</p>
                        <p>We predominantly deal with Agricultural products, such as fertilizers, wheat, maize, sugar and the like.</p>
                        <p>Our model is more of first-level contact with large-scale aggregators, factories/producers, or dealers and avail the same to a largely corporate buyers who may range from Governmental departmental buyers, large NGOs in relief efforts, importers, distributors, wholesalers and large retailers.</p>
                        <p>We also support small-holder farmers in niche-markets to enhance their capacities both technical and financial, whom we work with via a network of aggregators to acquire their produce and sell it to large processors, local and international.</p>
                        <p>We are active either directly, or in partnership with other regional partners</p>
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