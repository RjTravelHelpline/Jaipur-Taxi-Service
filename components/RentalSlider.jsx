"use client"
import React from 'react'
import { Card } from 'react-bootstrap';
import { FaArrowRight, FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import Image from 'next/image';

const RentalSlider = ({ rentals }) => {

    return (
        <>

            <SlickSlider>
                {rentals.map((rental, index) => {
                    const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${rental.title} package for ₹${rental.price}/-. Please provide more details.`;
                    return (
                        <div
                            key={index}
                            className="col-12 col-sm-12 col-md-6 col-lg-4 py-lg-3 py-sm-2 mb-lg-4 mb-sm-0 d-flex align-items-stretch px-2 rental-container"
                        >
                            <Card className="card bg-transparent">
                                <div className="card-image-container">
                                    <Image width={400} height={400} src={rental.imgSrc} alt={rental.alt} title={rental.title} />
                                </div>
                                <div className="row card-content d-flex align-items-center justify-content-center gap-0">
                                    <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                                        <h3 className="text-capitalize w-100 package-title text-center text-black">
                                            {rental.title}
                                        </h3>
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-center gap-4 align-items-start pt-0 package-category py-3">
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
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start flex-column pt-0 pb-0 mb-2">
                                        <p className="price px-2 text-capitalize mb-2 w-auto">
                                            {rental.priceOne}
                                        </p>
                                        <p className="price px-2 text-capitalize mb-2 w-auto">
                                            {rental.priceTwo}
                                        </p>
                                    </div>
                                    <div className="col-12 d-flex px-0">
                                        <div className="w-100 d-flex justify-content-center align-items-center gap-1">
                                            <button className="w-100 rounded-5 bg-black text-white">
                                                view <FaArrowRight />
                                            </button>
                                            <button
                                                className="w-100 rounded-5"
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
