"use client"
import React from 'react'
import { Card } from 'react-bootstrap';
import { FaArrowRight, FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import Image from 'next/image';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';

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
                            className="col-12 col-sm-12 col-md-12 col-lg-4 py-0 d-flex justify-content-start px-2"
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
                                        {rental.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="d-flex flex-column justify-content-center align-items-center"
                                            >
                                                {feature.icon}
                                                <p className="pt-2">{feature.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start flex-column gap-2">
                                        <p className="price-rental px-2 text-capitalize w-auto text-black text-center rounded-5">
                                            Jaipur local @ ₹{rental.priceOne !== null ? rental.priceOne : "on request"} {rental.priceOne !== null && "per hour"}
                                        </p>

                                        <p className="price-rental px-2 text-capitalize w-auto text-black text-center rounded-5">
                                            Outstation @ ₹{rental.priceTwo !== null ? rental.priceTwo : "on request"} {rental.priceTwo !== null && "per km"}
                                        </p>

                                    </div>
                                    <div className="col-12 d-flex px-0">
                                        <div className="w-100 d-flex justify-content-center align-items-center gap-1">
                                            <Link href={rental.navigate} className='w-100'>
                                                <button className="w-100 rounded-4 bg-border text-black text-capitalize">
                                                    view
                                                </button>
                                            </Link>
                                            <button
                                                className="w-100 rounded-4 text-capitalize"
                                            >
                                                Enquire
                                            </button>
                                            <a href={whatsappLink}>
                                                <button
                                                    className="rounded-4 p w-auto text-capitalize bg-black" style={{ color: '#00E777' }}
                                                >
                                                    <RiWhatsappFill className='fs-4' />

                                                </button>
                                            </a>
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
