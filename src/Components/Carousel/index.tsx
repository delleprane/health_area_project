import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

interface Slide {
    image: string;
    title: string;
    content: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const flickityRef = useRef<Flickity | null>(null);
    const flickityContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (flickityContainer.current) {
            flickityRef.current = new Flickity(flickityContainer.current, {
                cellAlign: 'left',
                contain: true,
                autoPlay: false,
                wrapAround: true,
                pageDots: false,
                prevNextButtons: true,
            });

            return () => {
                flickityRef.current?.destroy();
            };
        }
    }, []);

    return (
        <div className="carousel" ref={flickityContainer} style={{
            ...(window.innerWidth <= 768 ? {
                display: 'flex',
                justifyContent: 'center'
            } : {})
        }}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="carousel-card"
                    style={{
                        fontFamily: 'Cinzel',
                        color: '#545454',
                        lineHeight: '25px',
                        background: '#E9E6E3',
                        width: '450px',
                        height: '900px',
                        textAlign: 'center',
                        marginRight: '20px',
                        ...(window.innerWidth <= 768 ? {
                            maxWidth: '100%',
                            height: '900px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxHeight: 'auto',
                        } : {})
                    }}>
                    <img
                        src={slide.image}
                        alt={`Slide ${index}`}
                        style={{
                            width: '100%', height: '250px', ...(window.innerWidth <= 768 ? {
                                maxWidth: '100%',
                                height: '150px',
                            } : {})
                        }}
                    />
                    <h3
                        style={{
                            padding: '20px',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            ...(window.innerWidth <= 768 ? {
                                fontSize: '22px',
                            } : {})
                        }}>
                        {slide.title}
                    </h3>
                    <p
                        style={{
                            padding: '20px',
                            fontSize: '18px',
                            ...(window.innerWidth <= 768 ? {
                                fontSize: '16px',
                                padding: '52px'
                            } : {})
                        }}>
                        {slide.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
