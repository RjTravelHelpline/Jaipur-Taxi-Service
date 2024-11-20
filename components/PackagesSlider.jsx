"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { IoLogoWhatsapp } from 'react-icons/io';
import SlickSlider from './SlickSlider';
import { FaArrowRight } from 'react-icons/fa6';

const PackagesSlider = ({ packages, href }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }

    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title
    return (
        <>

            <SlickSlider>
                {packages.map((pkg, index) => {
                    const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                    return (
                        <div
                            key={index}
                            className="col-12 col-sm-12 col-md-8 col-lg-4 py-lg-3 py-sm-2 mb-lg-4 mb-sm-0 d-flex justify-content-start px-2"
                        >
                            <Card className="card bg-transparent">
                                <div className="card-image-container">
                                    <Image src={pkg.imgSrc} alt="Card Package" width={600}
                                        height={800} />
                                </div>

                                <div className="row card-content d-flex align-items-center justify-content-center">
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                                        <p className="fw-normal text-left package-duration w-auto d-none">
                                            {pkg.duration}
                                        </p>
                                        <p className="price px-2 text-capitalize mb-1 w-auto">
                                            ₹{pkg.price}/-
                                        </p>
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                                        <h4 className="text-capitalize w-100 text-black">
                                            {pkg.title}
                                        </h4>
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

export default PackagesSlider
