import React from 'react';
import '../css/contactUs.css';
import SocialMedia from "./SocialMedia.js";

class ContactUs extends React.Component {

    render() {
        return (
            <div className="contact-us">
                <h2>Contact Us</h2>
                <div>Get in touch</div>
                <SocialMedia />
            </div>


        );
    }
}

export default ContactUs;
