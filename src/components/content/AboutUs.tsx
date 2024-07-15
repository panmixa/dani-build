import about from '../../photos/images/about.jpg'
import './contentCss/aboutUs.css'
import {scrollToSection} from "../utils/utils";

const AboutUs = () => {
    return (
        <div className="about-willerroof" id="about">
            <div className="content-container">
                <h1>
                    À propos de <span className="highlight">Façade+</span>.
                </h1>
                <p>
                    Nous sommes des professionnels de la réparation et de l'installation de toitures. Besoin de nos
                    services ? Contactez-nous !
                </p>
                <p>
                    Façade+ est une entreprise familiale qui embellit et rénove des façades et en Belgique
                    depuis 15 ans.
                </p>
                <p>
                    Peu à peu, notre activité s'est développée et nous avons maintenant un autre bureau de
                    représentation à Bruxelles. Notre personnel comprend environ 50 personnes ayant d'excellentes
                    compétences et une grande expérience. Nous pouvons développer un projet, conseiller sur les
                    matériaux appropriés, installer de nouvelles façades ou réparer les anciennes. Nous refaisons
                    également le travail d'autres équipes et assurons la supervision de la conception des constructions.
                    Votre façade est entre de bonnes mains !
                </p>
                <div className="buttons-container">
                    <button onClick={() => scrollToSection("showcase")} className="showcase-button">Réalisations
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="contact-button">Contactez-nous
                    </button>
                </div>
            </div>
        </div>

    );
}
export default AboutUs;