import React from 'react';
import './contentCss/contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us" id="contact">
            <h1>Contactez-nous</h1>
            <div className="contact-info-us">
                <div className="contact-item">
                    <h2>Téléphone</h2>
                    <p>+32 488 83 62 21</p>
                </div>
                <div className="contact-item">
                    <h2>E-mail</h2>
                    <p>info@façade+.be</p>
                </div>
                <div className="contact-item">
                    <h2>Pays</h2>
                    <p>Belgique</p>
                </div>
                <div className="contact-item">
                    <h2>Heures d'ouverture</h2>
                    <p>Du lundi au vendredi : 9h-17h</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
