import React from 'react';
import './footer.css';
import {copyEmailToClipboard} from "../utils/utils";
import {Toaster} from "sonner";
import logo from '../../photos/logo/logo2.png'
import insta from '../../photos/logo/inst.png'
import facebook from '../../photos/logo/facebook.png'
import youTube from '../../photos/logo/youTube.png'
import {scrollToSection} from "../utils/utils";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo} alt="Logo Façade+" className="footer-logo"/>
                    <p>Façade+ est une entreprise familiale qui installe et rénove des toitures à NY et en Californie
                        depuis 15 ans.</p>
                </div>
                <div className="footer-section" id="titles">
                    <a onClick={() => scrollToSection("showcase")}>Réalisations</a>
                    <a onClick={() => scrollToSection("services")}>Nos Services</a>
                    <a onClick={() => scrollToSection("about")}>À propos de nous</a>
                    <a onClick={() => scrollToSection("contactgit branch -M main")}>Contactez-nous</a>
                </div>
                <div className="footer-section">
                    <Toaster position="top-right" closeButton={true}/>
                    <h3>Contactez-nous</h3>
                    <p>+32 488 83 62 21</p>
                    <p onClick={() => copyEmailToClipboard('info@danibild.be')}
                       style={{cursor: 'pointer'}}>info@façade+.be</p>
                </div>
                <div className="footer-section">
                    <h3>Visitez-nous</h3>
                    <p>Belgique</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61562673326888" target="_blank"><img
                            src={facebook} alt="Facebook" width="25"/></a>
                        <a href="#" target="_blank"><img src={insta} alt="Instagram" width="25"/></a>
                        <a href="#" target="_blank"><img src={youTube} alt="YouTube" width="25"/></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Créé par</p>
                <p>Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;
