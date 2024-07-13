import './contentCss/main.css';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import one from '../../photos/images/1.jpg'
import two from '../../photos/images/2.jpg'
import three from '../../photos/images/3.jpg'
import four from '../../photos/images/4.jpg'
import five from '../../photos/images/5.jpg'
import six from '../../photos/images/6.jpg'
import installation from '../../photos/images/installation.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './contentCss/slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";


const Showcase = (roofs: any) => {

    const photo = [one, two, three, four, five, six]
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
        <div id="showcase">
            <div className="second-text">
                <h2 className="provide" id="vitrine">Vitrine.</h2>
            </div>
            <div className="container-show">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidesCount}
                    navigation
                    loop={true}
                    onSlideChange={() => checkWidth()}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    {roofs.roofs.map((roof: any, index: number) => (
                        <SwiperSlide>
                            <div className="swiper-slide" key={index}>
                                <div className="card-show">
                                    <img src={photo[index]} alt={roof.h3}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Showcase;