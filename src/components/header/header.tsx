// src/components/Header.js
import React from 'react';
import './header.css';
import insta from '../../photos/logo/inst.png'
import facebook from '../../photos/logo/facebook.png'
import youTube from '../../photos/logo/youTube.png'
import logo from '../../photos/logo/logo.jpg';
import {scrollToSection} from "../utils/utils";

const Header= () => {

    return (
        <header className="header">
            <div className="head">
                <div className="logo">
                    <img src={logo}  alt="DAni Build Logo" />
                </div>
                <div className="contact-info">
                    <div>
                        34, Brooklyn, NY<br />
                        +1 (234) 567-8900
                    </div>
                    <div>
                        24, Nordhoff St, LA<br />
                        +1 (234) 567-8901
                    </div>
                </div>
                <div className="header-social-icons">
                    <a href="#"><img src={facebook} alt="Facebook" width="30" /></a>
                    <a href="#"><img src={insta}  alt="Instagram" width="30" /></a>
                    <a href="#"><img src={youTube}  alt="YouTube" width="30" /></a>
                </div>
            </div>
            <div className="navigation">
                <div>
                    <h2>FAÇADE+</h2>
                </div>
                <div className="services">
                    <a onClick={() => scrollToSection("showcase")} >Showcase</a>
                    <a onClick={() => scrollToSection("services")}>Our Services</a>
                    <a onClick={() => scrollToSection("about")}>About us</a>
                    <a onClick={() => scrollToSection("contact")}>Contact us</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
