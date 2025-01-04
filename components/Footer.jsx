"use client"
import { carAndCoches, carRentalPackages, carRentalServices, company, oneWayCarRental, popularTours, quick_links, servicesData } from '@/data/FooterData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Logo from './Logo';
import { MdMail } from 'react-icons/md';
import { PiFacebookLogoFill, PiInstagramLogoFill, PiSkypeLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';
import EnquiryModal02 from './EnquiryModal02';
import { RiCustomerService2Line, RiLink, RiMailFill, RiWhatsappFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';
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
            {/* <div className="container-fluid bg-white py-lg-4 py-sm-3">
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
            <div className="container-fluid bg-black py-lg-5 py-sm-3">
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
            </div > */}
            <div className="container-fluid packages-footer py-4">
                <div className="container">
                    <div className="row py-lg-4 py-sm-3">
                        <h2 className='text-center text-capitalize fw-bold text-white web-title banner-title-2'>what we <span className='text-tertary'> offer</span></h2>
                        {/* <p className='text-center text-capitalize text-black fw-normal'>Explore our convenient services tailored for you</p> */}
                    </div>
                    <div className="row accordians d-flex justify-content-center">
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('services')}
                            >
                                services
                                {activeSection === 'services' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'services' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {servicesData.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('carRentalPackages')}
                            >
                                car rental packages
                                {activeSection === 'carRentalPackages' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carRentalPackages' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carRentalPackages.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('popularTours')}
                            >
                                popular tours
                                {activeSection === 'popularTours' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'popularTours' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {popularTours.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('oneWayCarRental')}
                            >
                                one way car rental
                                {activeSection === 'oneWayCarRental' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'oneWayCarRental' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {oneWayCarRental.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('carRentalServices')}
                            >
                                car rental services
                                {activeSection === 'carRentalServices' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carRentalServices' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carRentalServices.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
                                className="text-capitalize web-title fw-bold bg-transparent  align-items-center text-white d-flex justify-content-between p-3 fw-bold" style={{ borderTop: '1px solid var(--color-border)' }}
                                onClick={() => toggleSection('carAndCoaches')}
                            >
                                Car & Coaches
                                {activeSection === 'carAndCoaches' ? (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiMinus /></span>
                                ) : (
                                    <span className="accordian-icon d-flex p-lg-2 p-sm-1"><BiPlus /> </span>
                                )}
                            </h3>
                            {activeSection === 'carAndCoaches' && (
                                <div className="bg-transparent mb-2 rounded-3 footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                    {carAndCoches.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="footer-link text-white"
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
            <div className="container-fluid bg-black py-4" style={{borderTop:'1px solid var(--color-border)'}}>
                <div className="container">
                    <div className="row d-flex justify-content-start aiign-items-center footer-links py-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 py-3">

                            <div className="footer-logo d-flex justify-content-start align-items-center gap-2">
                                <a
                                    href="https://rajasthantourpackages.in/"
                                    target="_blank"
                                    className="d-flex justify-content-center aiign-items-center  border-gray p-2 rounded-5"
                                    aria-label='rajasthan travel helpline'
                                >
                                    <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" title='Rajasthan Travel Helpline Contact Details' />
                                </a>
                                <div className='d-flex justify-content-center flex-column align-items-start'>

                                    <p className='text-capitalize text-hr web-title fw-normal anchor mb-0'>powered by</p>
                                    <p className='text-capitalize text-white web-title fw-bold anchor mb-0'>Rajasthan Travel Helpline</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
                            <p className='text-capitalize text-white web-title fw-bold'>quick links</p>
                            <hr />
                            <div className='d-flex justify-content-center flex-column align-items-start'>
                                {quick_links.map((link) => (
                                    <Link
                                        href={link.path}
                                        className="text-hr w-100 py-1 anchor"
                                        key={link.path}
                                    >
                                        {' '}
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
                            <p className='text-capitalize text-white web-title fw-bold'>company</p>
                            <hr />
                            <div className='d-flex justify-content-center flex-column align-items-start'>
                                {company.map((link) => (
                                    <Link
                                        href={link.path}
                                        className="text-hr w-100 py-1 anchor"
                                        key={link.path}
                                    >
                                        {' '}
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 py-3 ">
                            <p className='text-capitalize text-white web-title fw-bold'>get in touch</p>
                            <hr />
                            <div className="footer-icon d-flex justify-content-start align-items-center gap-2">
                                <a href="https://www.facebook.com/rajasthantravelhelpline/" className='fs-4 p-2 rounded-5 d-flex justify-content-center align-items-center text-hr border-gray'>
                                    <PiFacebookLogoFill />
                                </a>
                                <a href="https://www.instagram.com/rajasthantravelhelpline/" className='fs-4 p-2 rounded-5 text-hr d-flex justify-content-center align-items-center border-gray'>
                                    <PiInstagramLogoFill />
                                </a>
                                <a href="skype:rajasthantravel?chat" className='fs-4 p-2 rounded-5 d-flex justify-content-center align-items-center text-hr border-gray'>
                                    <PiSkypeLogoFill />
                                </a>
                                <a href="https://www.rajasthantourpackages.in" className='fs-4 p-2 rounded-5 d-flex justify-content-center align-items-center text-hr border-gray'>
                                    <RiLink />
                                </a>
                            </div>
                            <div className='mt-2 d-flex flex-column'>
                                <a href="tel:+91-9024337038" className='p-2 py-1 rounded-5 d-flex justify-content-center align-items-center'>
                                    <span className='fs-4 me-2'><RiCustomerService2Line /></span>
                                    <span className='text-hr fw-normal anchor'>(+91)-9024337038</span>
                                </a>
                                <a href="https://wa.me/9166555888" target="_blank" className='p-2 py-1 rounded-5 d-flex justify-content-center align-items-center '>
                                    <span className='fs-4 me-2'><RiWhatsappFill style={{ color: '#4AB060' }} /></span>
                                    <span className='text-hr fw-normal anchor'>(+91)-9024337038</span>
                                </a>
                                <a href="mailto:mail@rajasthantravelhelpline.com" className='p-2 py-1 rounded-5 d-flex justify-content-center align-items-center'>
                                    <span className='fs-4 me-2'><MdMail style={{ color: '#FF3C3C' }} /></span>
                                    <span className='text-hr fw-normal anchor'>mail@rajasthantravelhelpline.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center px-2">
                        <hr />
                        <p className="text-center py-lg-2 py-sm-1 text-capitalize color-border anchor">
                            © 2003-{mydate} | Rajasthan travel helpline | All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer