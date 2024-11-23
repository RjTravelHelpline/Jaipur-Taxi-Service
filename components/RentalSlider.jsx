"use client"
import React from 'react'
import { Card } from 'react-bootstrap';
import { FaArrowRight, FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import Image from 'next/image';

const RentalSlider = ({ rentals }) => {

    return (
        <>
            <SlickSlider
                settings={{
                    slidesToShow: 3,
                    autoplay: false,
                }}>
                {rentals.map((rental, index) => {
                    const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${rental.title} package for ₹${rental.price}/-. Please provide more details.`;
                    return (
                        <div
                            key={index}
                            className="col-12 col-sm-12 col-md-12 col-lg-4 py-0 mb-lg-4 mb-sm-1 d-flex justify-content-start px-2"
                        >
                            <Card className="card bg-transparent">
                                <div className="card-image-container">
                                    <Image width={600} height={800} src={rental.imgSrc} alt={rental.alt} title={rental.title} />
                                </div>
                                <div className="row card-content d-flex align-items-center justify-content-center">
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                                        <h4 className="text-capitalize w-100 text-black text-center fw-bold">
                                            {rental.title}
                                        </h4>
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-center gap-4 align-items-start pt-0 package-category py-2">
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            {' '}
                                            <FaUserFriends className="icon" />
                                            <p className="pt-2">4+1</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <FaSuitcase className="icon" />
                                            <p className="pt-2">3</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <FaSnowflake className="icon" />
                                            <p className="pt-2">AC</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            {' '}
                                            <FaFire className="icon" />
                                            <p className="pt-2">Heater</p>
                                        </div>
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start flex-column gap-2">
                                        <p className="price-rental px-2 text-capitalize w-auto text-black text-center rounded-5">
                                            {rental.priceOne}
                                        </p>
                                        <p className="price-rental px-2 text-capitalize w-auto text-black text-center rounded-5">
                                            {rental.priceTwo}
                                        </p>
                                    </div>
                                    <div className="col-12 d-flex px-0">
                                        <div className="w-100 d-flex justify-content-center align-items-center gap-1">
                                            <button className="w-100 rounded-5 bg-black text-white text-capitalize">
                                                view <FaArrowRight />
                                            </button>
                                            <button
                                                className="w-100 rounded-5 text-capitalize"
                                            >
                                                Enquire <FaArrowRight />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </SlickSlider>
        </>
    )
}

export default RentalSlider
