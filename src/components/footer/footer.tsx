import React from 'react';
import './footer.css';
import {copyEmailToClipboard} from "../utils/utils";
import {Toaster} from "sonner";
import logo from '../../photos/logo/logo.jpg'
import insta from '../../photos/logo/inst.png'
import facebook from '../../photos/logo/facebook.png'
import youTube from '../../photos/logo/youTube.png'
import {scrollToSection} from "../utils/utils";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo} alt="WillerRoof Logo" className="footer-logo" />
                    <p>Dani Build is a family-owned company that has been installing and renovating roofing in NY & California for 15 years.</p>
                </div>
                <div className="footer-section" id="titles">
                        <a onClick={() => scrollToSection("showcase")}>Showcase</a>
                        <a onClick={() => scrollToSection("services")}>Our Services</a>
                        <a onClick={() => scrollToSection("about")}>About us</a>
                        <a onClick={() => scrollToSection("contactgit branch -M main")}>Contact us</a>
                </div>
                <div className="footer-section" >
                    <Toaster position="top-right" closeButton={true}/>
                    <h3>Contact Us</h3>
                    <p>+32 488 83 62 21</p>
                    <p onClick={() => copyEmailToClipboard('info@danibild.be')} style={{cursor: 'pointer'}}>info@façade+.be</p>
                </div>
                <div className="footer-section">
                    <h3>Visit Us</h3>
                    <p>34, Brooklyn, NY<br />24, Nordhoff St, LA</p>
                    <div className="social-icons">
                        <a href="#"><img src={facebook} alt="Facebook" width="25" /></a>
                        <a href="#"><img src={insta} alt="Instagram" width="25" /></a>
                        <a href="#"><img src={youTube} alt="YouTube" width="25" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Created by</p>
                <p>All rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
