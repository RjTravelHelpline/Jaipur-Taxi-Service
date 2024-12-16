import React from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

const HeroBanner = ({ slides, backgroundImage }) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div className="container-fluid car-rental-banner" style={bannerStyle}>
            <div className="container">
                <div className="row justify-content-center align-items-center px-lg-2 px-sm-0">
                    <Carousel fade pause={false} indicators={false} controls={false} interval={4000} className="w-100">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <CarouselCaption style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    {/* <p className="bg-tertary text-black fw-bold web-title text-uppercase p-1 px-2 rounded-3 d-flex justify-content-center align-items-center">
                                        <FaStar className='me-1 text-white' />
                                        <span className='mb-0'>premium cabs</span>
                                    </p> */}
                                    <h1 className="fw-bold web-title text-left text-capitalize banner-title mb-3">{slide.heading}</h1>
                                    <h2 className="fw-normal pt-3 web-title text-capitalize">{slide.subheading}</h2>
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
