"use client";
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
import EnquiryModal02 from './EnquiryModal02';

const TourPackages = ({ pkg, showPrice = false }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }
    const [selectedPackage, setSelectedPackage] = useState('');
    const whatsappLink = `https://wa.me/?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;

    return (
        <>
            <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-between align-items-stretch px-2"
            >
                <Card className="card bg-transparent d-flex justify-content-between h-100">
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
                            <h4 className="text-capitalize w-100 text-black text-center fw-bold  web-title">
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
                                    <button className="w-100 rounded-5 bg-gray text-black text-capitalize">
                                        view
                                    </button>
                                </Link>
                                <button
                                    className="w-100 rounded-5 text-capitalize text-white" onClick={() => handleShow(pkg.title)}
                                >
                                    Enquire
                                </button>
                                <a href={whatsappLink}>
                                    <button
                                        className="rounded-5 p-2 w-auto text-capitalize bg-black" style={{ color: '#00E777' }}
                                    >
                                        <RiWhatsappFill className='fs-4' />

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>


            <EnquiryModal02
                show={show}
                onHide={handleClose}
                title={selectedPackage}
            />
        </>
    );
};

export default TourPackages;
