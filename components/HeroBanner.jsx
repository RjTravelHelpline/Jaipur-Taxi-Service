import React from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

const HeroBanner = ({ slides }) => {
    return (
        <div className="container-fluid car-rental-banner">
            <div className="container">
                <div className="row justify-content-center align-items-center px-lg-2 px-sm-0">
                    <Carousel fade pause={false} indicators={false} controls={false} interval={4000} className="w-100">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                {/* <Image
                                src={slide.image}
                                alt={slide.alt}
                                title={slide.title}
                                width={1500}
                                height={1000}
                                priority={true}
                                className="w-100"
                            /> */}
                                <CarouselCaption style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <h1 className="text-black fw-bold web-title fw-bold text-capitalize text-left mb-0 text-capitalize" style={{ textAlign: 'left !important' }}>{slide.heading}</h1>
                                    <hr style={{ width: '60%' }} />
                                    <h3 className="text-black fw-normal" style={{ textAlign: 'left !important' }}>{slide.subheading}</h3>
                                </CarouselCaption>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
