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


const Showcase = (roofs: any) => {

    const photo = [one, two, three, four, five, six]

    return (
        <div id="showcase">
            <div className="second-text">
                <h2 className="provide">Showcase.</h2>
            </div>
            <div className="container-show">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
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