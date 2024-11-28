"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import SlickSlider from './SlickSlider';
import { FaArrowRight } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';

const PackagesSlider = ({ packages, href, showPrice = false }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }
    const [selectedPackage, setSelectedPackage] = useState('');
    return (
        <>

            <SlickSlider settings={{
                slidesToShow: 3,
                autoplay: false,
            }}>
                {packages.map((pkg, index) => {
                    const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                    return (
                        <div
                            key={index}
                            className="col-12 col-sm-12 col-md-8 col-lg-4 py-0 d-flex justify-content-start align-items-stretch px-2"
                        >
                            <Card className="card bg-transparent d-flex justify-content-between h-full">
                                <div className="card-image-container">
                                    <Image src={pkg.imgSrc} alt="Card Package" width={600}
                                        height={800} />
                                </div>
                                <div className="row card-content d-flex align-items-center justify-content-center">
                                    <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                                        {
                                            showPrice && (
                                                <p className="price px-2 text-capitalize mb-0 w-auto">
                                                    starting from ₹{pkg.price}/-
                                                </p>
                                            )
                                        }
                                    </div>
                                    <div className="w-100 card-header d-flex justify-content-center flex-column align-items-center pt-0 pb-0">
                                        <h4 className="text-capitalize w-100 text-black text-center fw-bold">
                                            {pkg.title}
                                        </h4>
                                    </div>
                                    <div className="w-100 card-header d-flex align-items-center justify-content-center pt-0 gap-2 flex-wrap">
                                        {pkg.placesCovered.length > 0 ? (
                                            <>
                                                {pkg.placesCovered.slice(0, 4).map((item, index) => (
                                                    <p key={index} className="text-tertary covered-places">{item}</p>
                                                ))}
                                                {pkg.placesCovered.length > 4 && (
                                                    <p className="text-tertary covered-places">..more</p>
                                                )}
                                            </>
                                        ) : (
                                            "No places covered mentioned."
                                        )}
                                    </div>
                                    <div className="col-12 d-flex px-0">
                                        <div className="w-100 d-flex justify-content-center align-items-center gap-1">
                                            <Link href={pkg.navigate} className='w-100'>
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

export default PackagesSlider
