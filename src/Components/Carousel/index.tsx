import React from 'react';
import './Carousel.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TruncatedText from '../TruncatedText';
import { Button } from '../Button';


interface ButtonData {
    content: string;
    message: string;
}
interface Slide {
    image: string;
    title: string;
    content: string;
    list?: string[];
    button: ButtonData;
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
                768: {
                    slidesPerView: 3,
                },
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
                        <div className="text-card">
                            <h3 className="carousel-title">{slide.title}</h3>
                            {/* Passando content e list separadamente */}
                            <TruncatedText content={slide.content} list={slide.list} />
                            <Button
                                content={slide.button.content}
                                className="card-button"
                                icon="whatsapp"
                                message={slide.button.message}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
