import about from '../../photos/images/about.jpg'
import './contentCss/aboutUs.css'
import {scrollToSection} from "../utils/utils";

const AboutUs = () => {
    return (
        <div className="about-willerroof" id="about">
            <div className="images-container">
                <img src={about} alt="House" className="house-image" />
            </div>
            <div className="content-container">
                <h1>
                    About <span className="highlight">WillerRoof</span>.
                </h1>
                <p>
                    We are professionals of roof repair and installation. Do you need our services? Contact us!
                </p>
                <p>
                    WillerRoof is a family-owned company that has been installing and renovating roofing in NY & California for 15 years.
                </p>
                <p>
                    Gradually, our business expanded, and now we have another representative office in New York. Our staff includes about 50 people with excellent skills and extensive experience. We can develop a project, advise on suitable material, install new roofing or repair the old one. We also redo the work of other crews and perform construction design supervision. Your roofing is in good hands!
                </p>
                <div className="buttons-container">
                    <button onClick={() => scrollToSection("showcase")} className="showcase-button">Showcase</button>
                    <button onClick={() => scrollToSection("contact")} className="contact-button">Contact us</button>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;