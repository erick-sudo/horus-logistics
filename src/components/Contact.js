import React from "react";
import contact from "../assets/gallery/contacts/contact_bulb.png"
import { TbPhoneCall } from 'react-icons/tb'
import { HiBuildingOffice2 } from 'react-icons/hi'

function Contact() {
    return (
        <div className="contactus">
            <h1>Contact Us</h1>
            <div className="contact-form">
                <div className="c-image">
                    <img src={contact} alt="Contact" />
                </div>
                <form>
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
            <div className="getintouch">
                <div id="four">
                    <div id="three">
                        <div id="two">
                            <div id="one">Get<br />In<br /> Touch</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="floats f1"></div>
                    <div className="floats f2"></div>
                    <div className="floats f3"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;