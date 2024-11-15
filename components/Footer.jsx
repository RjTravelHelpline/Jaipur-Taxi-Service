"use client"
import { carAndCoches, carRentalPackages, carRentalServices, oneWayCarRental, popularTours, servicesData, usefulLinks } from '@/data/FooterData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Footer = () => {
    const footerLogo = '/rajasthan-travel-helpline.png';
    const date = new Date();
    const mydate = date.getUTCFullYear();

    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    return (
        <>
            {/* Packages and links */}
            <div className="packages-footer py-3 bg-tertary-down">
                <div className="container">
                    <div className="row accordians d-flex justify-content-center">
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('services')}
                            >
                                services
                                {activeSection === 'services' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'services' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {servicesData.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('carRentalPackages')}
                            >
                                car rental packages
                                {activeSection === 'carRentalPackages' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carRentalPackages' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carRentalPackages.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('popularTours')}
                            >
                                popular tours
                                {activeSection === 'popularTours' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'popularTours' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {popularTours.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('usefulLinks')}
                            >
                                useful links
                                {activeSection === 'usefulLinks' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'usefulLinks' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {usefulLinks.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('company')}
                            >
                                company
                                {activeSection === 'company' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'company' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {usefulLinks.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('oneWayCarRental')}
                            >
                                one way car rental
                                {activeSection === 'oneWayCarRental' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'oneWayCarRental' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {oneWayCarRental.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('carRentalServices')}
                            >
                                car rental services
                                {activeSection === 'carRentalServices' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carRentalServices' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carRentalServices.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
                                onClick={() => toggleSection('carAndCoaches')}
                            >
                                Car & Coaches
                                {activeSection === 'carAndCoaches' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><FaPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carAndCoaches' && (
                                <div className="bg-white mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carAndCoches.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-black"
                                            key={link.path}
                                        >
                                            {' '}
                                            {link.text}
                                        </Link>
                                    ))}

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-black">

                <div className="row w-100 d-flex justify-content-center aiign-items-center">
                    <a
                        href="https://rajasthantourpackages.in/"
                        target="_blank"
                        className="d-flex justify-content-center aiign-items-center footer-link"
                        aria-label='rajasthan travel helpline'
                    >
                        <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" layout='responsive' title='Rajasthan Travel Helpline Contact Details' />
                    </a>
                </div>
                <div className="row py-0 d-flex justify-content-center aiign-items-center">
                    <div className="col-lg-8 col-sm-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <p className="copyright text-center py-lg-2 py-sm-1 text-capitalize text-white">
                        © 2003-{mydate} | Rajasthan travel helpline. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer