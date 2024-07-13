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

const WhyChooseUs = (data: any) => {

    const photo = [repair, replacemnets, installation, repair]

    return (
        <div>
            <div className="container-why">
                <div className="second-text-why">
                    <h2 className="provide">Why choose us.</h2>
                    <h3 className="handle">We will provide excellent-quality work at an affordable cost.</h3>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    pagination={{clickable: true}}
                    onSlideChange={() => console.log('slide change')}
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