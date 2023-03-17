import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avt1.png'
import AVTR2 from '../../assets/avt2.png'
import AVTR3 from '../../assets/avt3.png'
import AVTR4 from '../../assets/avt4.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
    {
        avatar: AVTR1,
        name: 'John Smith',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam nisi magna, ac pharetra massa mattis eu. Nunc lacinia turpis id sem lacinia sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed congue',
    },
    {
        avatar: AVTR2,
        name: 'Jenifar Lopez',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam nisi magna, ac pharetra massa mattis eu. Nunc lacinia turpis id sem lacinia sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed congue',
    },
    {
        avatar: AVTR3,
        name: 'Michele white',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam nisi magna, ac pharetra massa mattis eu. Nunc lacinia turpis id sem lacinia sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed congue',
    },
    {
        avatar: AVTR4,
        name: 'Layla Maxiof',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam nisi magna, ac pharetra massa mattis eu. Nunc lacinia turpis id sem lacinia sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed congue',
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar,name,review},index)=>{
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;