import React from "react";
import contact from "../assets/gallery/contacts/contact_bulb.png"
import { TbPhoneCall } from 'react-icons/tb'
import { ImOffice, ImWhatsapp } from 'react-icons/im'
import { RiCloseCircleLine } from "react-icons/ri"
import { FcFaq } from 'react-icons/fc'
import consult from "../assets/gallery/contacts/consultation.png"
import meet from "../assets/gallery/contacts/googlemeet.png"
import { GoArrowRight } from 'react-icons/go'
import "./Consultation.css"

function ConsultationForm({setConsultationFormVisible}) {
    return (
        <div className="const-form-wrapper">
            <div className="consultation-form">
                <div className="close-form">
                    <span className="ex" onClick={() => setConsultationFormVisible(false)}><RiCloseCircleLine /></span>
                </div>
                <h1>Book a phone consultation!</h1>
                <p>Got questions? Ideas? Fill out the form below & our specialist will contact you.</p>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    setConsultationFormVisible(false)
                }}>
                    <div>
                        <div className="labels">*Name</div>
                        <input type="text" name="fullname" />
                    </div>
                    <div>
                        <div  className="labels">*Email</div>
                        <input type="email" name="email" />
                    </div>
                    <div className="in-row">
                        <div>
                            <div  className="labels">*Phone Number</div>
                            <input type="number" name="phone" />
                        </div>
                        <div>
                            <div  className="labels">*Desired Date</div>
                            <input type="date" name="date" />
                        </div>
                    </div>
                    <div>
                        <div  className="labels">*Message</div>
                        <textarea rows="6" name="message"></textarea>
                    </div>
                    <button>Request a call-back</button>
                </form>
            </div>
        </div>
    )
}

function Contact({setConsultationFormVisible}) {
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
                        <textarea name="message" rows="6"></textarea>
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
                        <button id="start-consultation" onClick={() => setConsultationFormVisible(true)}><span  className="arrow-C">Start Consultation</span><span className="arrow-R"><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ConsultationForm, Contact }