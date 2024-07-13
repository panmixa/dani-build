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
import {useEffect, useState} from "react";

const WhyChooseUs = (data: any) => {

    const photo = [repair, replacemnets, installation, repair]
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
        <div>
            <div className="container-why">
                <div className="second-text-why">
                    <h2 className="provide">Pourquoi nous choisir.</h2>
                    <h3 className="handle">Nous fournirons un travail d’excellente qualité à un coût abordable.</h3>
                </div>
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
                    {data.data.map((datas: any, index: number) => (
                        <SwiperSlide>
                            <div className="card-why" key={index}>
                                <img src={photo[index]} alt={datas.h3}/>
                                <h3>{datas.h3}</h3>
                                <p>
                                    {datas.p}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default WhyChooseUs;