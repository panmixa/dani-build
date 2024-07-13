import React from 'react';
import './contentCss/contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us" id="contact">
            <h1>Contact Us</h1>
            <div className="contact-info-us">
                <div className="contact-item">
                    <h2>Phone</h2>
                    <p>+32 488 83 62 21</p>
                </div>
                <div className="contact-item">
                    <h2>Email</h2>
                    <p>info@façade+.be</p>
                </div>
                <div className="contact-item">
                    <h2>Address</h2>
                    <p>Kyiv Ukraine</p>
                </div>
                <div className="contact-item">
                    <h2>Working Hours</h2>
                    <p>Mon-Fri: 9am-5pm</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
