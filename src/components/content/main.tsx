import './contentCss/main.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ContactUs from "./contactUs";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import HowWeWork from "./HowWeWork";
import {useState} from "react";
import roof from './data/RoofService.json';
import data from './data/RoofWhy.json';
import AboutUs from "./AboutUs";
import Showcase from "./Showcase";
const MainRoof = () => {

    const [isHoveredFirst, setIsHoveredFirst] = useState(false);
    const [isHoveredSecond, setIsHoveredSecond] = useState(false);
    const handleMouseEnterFirst = () => setIsHoveredFirst(true);
    const handleMouseLeaveFirst = () => setIsHoveredFirst(false);

    const handleMouseEnterSecond = () => setIsHoveredSecond(true);
    const handleMouseLeaveSecond = () => setIsHoveredSecond(false);

    const buttonStyleFirst = {
        color: isHoveredFirst ? 'black' : 'white',
        backgroundColor: isHoveredFirst ? 'white' : '#f7941d',
    };

    const buttonStyleSecond = {
        color: isHoveredSecond ? 'black' : 'white',
        backgroundColor: isHoveredSecond ? 'white' : '#333',
    };

    return (
        <div>
            <div className="main-content">
                <div className="main-text">
                    <div className="first">
                        <h2 className="good">We Shall Do <br/> Good Work.</h2>
                        <h4 className="weDo">Professional services that evoke positive emotions</h4>
                        <div className="buttons">
                            <Button variant="outlined"
                                    href="#services"
                                    component="a"
                                    style={buttonStyleFirst}
                                    onMouseEnter={handleMouseEnterFirst}
                                    onMouseLeave={handleMouseLeaveFirst}>
                                Our services
                            </Button>
                            <Button variant="outlined"
                                    href="#contact"
                                    component="a"
                                    style={buttonStyleSecond}
                                    onMouseEnter={handleMouseEnterSecond}
                                    onMouseLeave={handleMouseLeaveSecond}>
                                Contact us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second">
                <Services roofs={roof}/>
                <HowWeWork/>
                <WhyChooseUs data={data}/>
                <AboutUs/>
                <Showcase roofs={roof}/>
                <ContactUs/>
            </div>
        </div>
    );
}

export default MainRoof;