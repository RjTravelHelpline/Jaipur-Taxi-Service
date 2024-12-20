"use client"
import { carAndCoches, carRentalPackages, carRentalServices, company, oneWayCarRental, popularTours, servicesData, usefulLinks } from '@/data/FooterData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Logo from './Logo';
import { MdMail } from 'react-icons/md';
import { PiFacebookLogoFill, PiInstagramLogoFill, PiSkypeLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';
import EnquiryModal02 from './EnquiryModal02';
const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
const googleStars = '/Images/Logos/google-logo.webp';

const Footer = () => {
    const footerLogo = '/profile-logo.jpg';
    const date = new Date();
    const mydate = date.getUTCFullYear();

    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="container-fluid bg-white py-lg-4 py-sm-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center footer-top-row">
                        <div className="col-lg-6 col-sm-12 px-2">
                            <h4 className="text-capitalize mb-0 text-black fw-bold  web-title d-flex justify-content-between">
                                our customer recommanded on</h4>
                        </div>
                        <div className="col-lg-6 col-sm-12 px-2">
                            <div className="footer-logo-container d-flex justify-content-end align-items-center w-auto">
                                <a
                                    href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                    className="image-link w-auto"
                                    target="_blank"
                                >
                                    <Image width={300} height={50} src={tripAdvisorLogo} alt="Trip Advisor Logo" title='Tripadvisor logo representing trusted travel reviews' />
                                </a>
                                <a href="" className="image-link d-inline" target="_blank">
                                    <Image width={300} height={50} src={googleStars} alt="Google Review Logo" title='Google Review logo showcasing customer feedback' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Packages and links */}
            < div className="container-fluid bg-black py-lg-5 py-sm-3">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center align-items-center flex-column">
                        <h3 className="text-capitalize mb-3 text-tertary fw-bold text-center  web-title banner-title-2">
                            Planning Your  <span className='text-white'>Next Journey</span>?
                        </h3>
                        <p className="text-white text-capitalize fw-normal text-center">
                            Let us help you customize the perfect ride package for your needs.
                        </p>
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <hr />
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <button className='rounded-5 d-flex justify-content-between align-items-center gap-2 box-shadow-tertary' onClick={() => setModalShow(true)}>Request a Ride<FaArrowRight className='bg-black p-2 text-white rounded-5 fs-3' /></button>
                            <EnquiryModal02
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            </div >
            <div className="container-fluid packages-footer py-3">
                <div className="container">
                    <div className="row py-lg-4 py-sm-3">
                        <h2 className='text-center text-capitalize fw-bold text-black web-title'>what we <span className='text-tertary'> offer</span></h2>
                        <p className='text-center text-capitalize text-black fw-normal'>Explore our convenient services tailored for you</p>
                    </div>
                    <div className="row accordians d-flex justify-content-center">
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                    {company.map((link) => (
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
                                className="text-capitalize web-title fw-bold bg-white rounded-4 align-items-center text-black d-flex justify-content-between p-3 fw-bold"
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
            <div className="container-fluid bg-black pb-5">
                <div className="row d-flex justify-content-center aiign-items-center pt-4">
                    <Logo childStyle='text-center text-white' parentStyle='text-center' />
                </div>
                <div className="row py-0 d-flex justify-content-center aiign-items-center">
                    <div className="col-lg-8 col-sm-12">
                        <hr />
                    </div>
                </div>
                <div className="row d-flex justify-content-center aiign-items-center footer-links">
                    <p className='text-center color-border text-uppercase'>presented by</p>
                    <div className="col-12 d-flex flex-column footer-links justify-content-center align-items-center">
                        <div className="footer-logo w-100 d-flex justify-content-center aiign-items-center">
                            <a
                                href="https://rajasthantourpackages.in/"
                                target="_blank"
                                className="d-flex justify-content-center aiign-items-center footer-link"
                                aria-label='rajasthan travel helpline'
                            >
                                <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" title='Rajasthan Travel Helpline Contact Details' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row py-0 d-flex justify-content-center aiign-items-center">
                    <div className="col-lg-8 col-sm-12">
                        <hr />
                    </div>
                    <div className="col-lg-8 col-sm-12 footer-icon d-flex justify-content-center align-items-center gap-2">
                        <a href="mailto:mail@rajasthantravelhelpline.com" className='p-lg-3 fs-4 p-sm-2 rounded-5 border-gray d-flex text-hr justify-content-center align-items-center'>
                            <MdMail />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=919166555888" className='p-lg-3 fs-4 p-sm-2 rounded-5 border-gray d-flex text-hr justify-content-center align-items-center'>
                            <PiWhatsappLogoFill />
                        </a>
                        <a href="https://www.facebook.com/rajasthantravelhelpline/" className='p-lg-3 fs-4 p-sm-2 rounded-5 border-gray d-flex text-hr justify-content-center align-items-center'>
                            <PiFacebookLogoFill />
                        </a>
                        <a href="https://www.instagram.com/rajasthantravelhelpline/" className='p-lg-3 fs-4 p-sm-2 rounded-5 border-gray d-flex text-hr justify-content-center align-items-center'>
                            <PiInstagramLogoFill />
                        </a>
                        <a href="skype:rajasthantravel?chat" className='p-lg-3 fs-4 p-sm-2 rounded-5 border-gray d-flex text-hr justify-content-center align-items-center'>
                            <PiSkypeLogoFill />
                        </a>
                    </div>
                </div>
                <div className="row py-0 d-flex justify-content-center aiign-items-center">
                    <div className="col-lg-8 col-sm-12">
                        <hr />
                    </div>
                </div>
                <div className="row pb-5">
                    <p className="copyright text-center py-lg-2 py-sm-1 text-capitalize color-border">
                        © 2003-{mydate} | Rajasthan travel helpline. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer