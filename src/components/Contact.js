import React from "react";
import contact from "../assets/gallery/contacts/contact_bulb.png"
import { TbPhoneCall } from 'react-icons/tb'
import { ImOffice, ImWhatsapp } from 'react-icons/im'
import { FcQuestions, FcFaq } from 'react-icons/fc'
import consult from "../assets/gallery/contacts/consultation.png"
import meet from "../assets/gallery/contacts/googlemeet.png"
import { GoArrowRight } from 'react-icons/go'

function Contact() {
    return (
        <div className="contactus">
            <h1>Contact Us</h1>
            <div className="c-float">
                <div className="direct-contacts">
                    <div className="c-icons"><ImOffice /></div>
                    <div className="c-info">
                        <div className="hd">Corporate Office Address</div>
                        <p>Moi Avenue, opposite Veteran House Nairobi KE</p>
                    </div>
                </div>
                <div className="direct-contacts">
                    <div  className="c-icons"><TbPhoneCall /></div>
                    <div className="c-info">
                        <div className="hd">Direct Call</div>
                        <p>+254758986475<br />+555-233-345</p>
                    </div>
                </div>
                <div className="direct-contacts">
                    <div  className="c-icons"><ImWhatsapp /></div>
                    <div className="c-info">
                        <div className="hd">Whatsapp Chats, Voice & Video calls</div>
                        <p>+254758986475<br />+555-233-345</p>
                    </div>
                </div>
                <div className="direct-contacts">
                    <div  className="c-icons"><FcFaq /></div>
                    <div className="c-info">
                        <p className="hd">Ask Question Here</p>
                        <button id="askquestion">Ask Question</button>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="c-image">
                    <img src={contact} alt="Contact" />
                </div>
                <form>
                    <h2>Send us a message</h2>
                    <div className="fields">
                        <label htmlFor="firstname">*Firstname</label>
                        <input type="text" placeholder="First Name" name="firstname" />
                    </div>
                    <div className="fields">
                        <label htmlFor="lastname">*Lastname</label>
                        <input type="text" placeholder="Last Name" name="lastname" />
                    </div>
                    <div className="fields">
                        <label htmlFor="email">*Email Address</label>
                        <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div className="fields">
                        <label htmlFor="message">*Message</label>
                        <textarea name="message"></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div className="meetings">
                <div className="consultation-wrapper">
                    <div className="consultation">
                        <div className="m-icon">
                                <img style={{height: "10vh"}} src={meet} alt="Consult" />
                        </div>
                        <button id="start-consultation"><span  className="arrow-C">Schedule Meeting</span><span className="arrow-R"><GoArrowRight /></span></button>
                    </div>
                </div>
                <div className="consultation-wrapper">
                    <div className="consultation">
                        <div className="m-icon">
                            <img style={{height: "10vh"}} src={consult} alt="Consult" />
                        </div>
                        <button id="start-consultation"><span  className="arrow-C">Start Consultation</span><span className="arrow-R"><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;