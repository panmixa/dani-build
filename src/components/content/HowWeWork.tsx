import './contentCss/main.css';
import * as React from 'react';

const HowWeWork = () =>  {
    return (
        <div>
            <div className="how">
                <h1 className="work">How We Work.</h1>
                <p className="work">Need a roof repair? Contact us, and we'll do the work.</p>
                <div className="steps">
                    <div className="step">
                        <h2>01.</h2>
                        <h3>Prepayment & Project.</h3>
                        <p>Contact our manager and discuss all the details. After the project approval, you make a
                            50% prepayment.</p>
                    </div>
                    <div className="step">
                        <h2>02.</h2>
                        <h3>Execution of the Work.</h3>
                        <p>On the appointed day and time, our team arrives at your place and performs all the work
                            listed in the contract.</p>
                    </div>
                    <div className="step">
                        <h2>03.</h2>
                        <h3>Check Results and Pay.</h3>
                        <p>You check the quality of the work. If everything is OK, you pay the remaining 50%. A
                            5-year warranty is included.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeWork;