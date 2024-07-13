import './contentCss/main.css';
import * as React from 'react';

const HowWeWork = () =>  {
    return (
        <div>
            <div className="how">
                <h1 className="work">Comment Nous Travaillons.</h1>
                <p className="work">Besoin d'une façade ? Contactez-nous, et nous nous occuperons du travail.</p>
                <div className="steps">
                    <div className="step">
                        <h2>01.</h2>
                        <h3>Acompte & Projet.</h3>
                        <p>Contactez notre responsable et discutez de tous les détails. Après l'approbation du projet,
                            vous effectuez un acompte de 50%.</p>
                    </div>
                    <div className="step">
                        <h2>02.</h2>
                        <h3>Exécution des Travaux.</h3>
                        <p>Le jour et l'heure convenus, notre équipe arrive chez vous et exécute tous les travaux
                            énumérés dans le contrat.</p>
                    </div>
                    <div className="step">
                        <h2>03.</h2>
                        <h3>Vérification des Résultats et Paiement.</h3>
                        <p>Vous vérifiez la qualité du travail. Si tout est en ordre, vous payez les 50% restants. Une
                            garantie de 5 ans est incluse.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HowWeWork;