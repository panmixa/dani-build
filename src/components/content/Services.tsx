import './contentCss/main.css';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import repair from '../../photos/images/repair.jpg'
import replacemnets from '../../photos/images/replacemnets.jpg'
import installation from '../../photos/images/installation.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './contentCss/slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";


interface Service {
    h3: string;
    p1: string;
    p2: {
        price: string;
        text: string;
    };
}

const Services = (roofs: any) => {

    const photo = [repair, replacemnets, installation, repair, replacemnets, installation]
    const [slidesCount, setSlidesCount] = useState(3);

    const checkWidth = () => {
        const width = window.innerWidth;
        if (width < 769) {
            if (width < 430) {
                setSlidesCount(1);
            } else {
                setSlidesCount(2);
            }
        } else {
            setSlidesCount(3);
        }
    }


    return (
        <div id="services">
            <div className="second-text">
                <h2 className="provide">Services que nous fournissons.</h2>
                <h3 className="handle">Quel que soit le travail dont vous avez besoin, nous pouvons le gérer</h3>
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidesCount}
                    navigation
                    loop={true}
                    pagination={{clickable: true}}
                    onSlideChange={() => checkWidth()}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    {roofs.roofs.map((roof: any, index: number) => (
                        <SwiperSlide>
                        <div className="swiper-slide" key={index}>
                            <div className="card-why">
                                <img src={photo[index]} alt={roof.h3} />
                                <h3>{roof.h3}</h3>
                                <p>{roof.p1}</p>
                                <p className="price">from <span>{roof.p2.price}</span> {roof.p2.text}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default Services;