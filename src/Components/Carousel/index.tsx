import React, { useState } from 'react';
import './Carousel.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TruncatedText from '../TruncatedText';


interface Slide {
    image: string;
    title: string;
    content: string;
}


interface CarouselProps {
    slides: Slide[];
}


const Carousel: React.FC<CarouselProps> = ({ slides }) => {


    return (
        <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        breakpoints={{
            // Quando a largura da tela for >= 768px
            768: {
                slidesPerView: 3, 
            },
            // Quando a largura da tela for < 768px
            0: {
                slidesPerView: 'auto', 
            }
        }}
        loop={true}
        pagination={{ clickable: true }} 
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="carousel-card">
                        <img src={slide.image} alt={`Slide ${index}`} className="carousel-image" />
                        <div className='text-card'>
                            <h3 className="carousel-title">{slide.title}</h3>
                            <TruncatedText content={slide.content} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Carousel;