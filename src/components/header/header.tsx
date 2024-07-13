// src/components/Header.js
import React from 'react';
import './header.css';
import insta from '../../photos/logo/inst.png'
import facebook from '../../photos/logo/facebook.png'
import youTube from '../../photos/logo/youTube.png'
import logo from '../../photos/logo/logo2.png';
import {scrollToSection} from "../utils/utils";

const Header= () => {

    return (
        <header className="header">
            <div className="head">
                <div className="logo">
                    <img src={logo}  alt="Facade Logo" />
                </div>
                <div className="info-icons">
                    <div className="contact-info">
                        <div>
                            Belgique<br />
                            +32 488 83 62 21
                        </div>
                    </div>
                    <div className="header-social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61562673326888" target="_blank"><img src={facebook} alt="Facebook" width="30" /></a>
                        <a href="#" target="_blank"><img src={insta}  alt="Instagram" width="30" /></a>
                        <a href="#" target="_blank"><img src={youTube}  alt="YouTube" width="30" /></a>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="company-name">
                    <h2>FAÇADE+</h2>
                </div>
                <div className="services">
                    <a onClick={() => scrollToSection("showcase")} >Vitrine</a>
                    <a onClick={() => scrollToSection("services")}>Nos services</a>
                    <a onClick={() => scrollToSection("about")}>À propos de nous</a>
                    <a onClick={() => scrollToSection("contact")}>Contactez-nous</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
