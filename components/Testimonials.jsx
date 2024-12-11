'use client'
import { reviewers } from '@/data/Reviews';
import Image from 'next/image'
import React, { useState } from 'react'
import SlickSlider from './SlickSlider';
import { FaUser } from 'react-icons/fa6';
import { BiUser } from 'react-icons/bi';
const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
const googleStars = '/Images/Logos/google-logo.webp';


const Testimonials = ({ reviewer }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-3 px-2 mb-3 d-flex review-card">
                <div className="review-card-insider w-100">
                    <div className="d-flex w-100">
                        {reviewer.Images.map((img, imgIndex) => (
                            <div className={`image-container px-1 ${reviewer.Images.length === 1 ? 'single-image' : ''}`} key={imgIndex}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    title={img.title}
                                    className="review-image"
                                    width={1000}
                                    height={800}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h4 className="text-capitalize review-title mx-2 w-100 px-2 web-title fw-bold">
                            {reviewer.title}
                        </h4>
                        <p
                            className="review-description mx-2"
                        >
                            {isReadMore
                                ? reviewer.review
                                : `${reviewer.review.substring(0, 150)}`}
                            <button className="read-more-btn p-0 bg-transparent text-tertary" onClick={toggleReadMore}>
                                <p>{isReadMore ? '-Less' : '...'}</p>
                            </button>
                        </p>
                        <p className="text-capitalize px-2 mx-2 fw-bold w-100 d-flex justify-content-start align-items-center web-title mb-0">
                            <BiUser className='me-2 text-tertary' /> {reviewer.name}
                        </p>
                        <div className="w-100 review-logo-container mx-2 d-flex justify-content-start align-items-center px-2 py-0">
                            <hr className='' />
                            <a
                                href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                className="image-link"
                                target="_blank"
                            >
                                <Image width={300} height={50} src={tripAdvisorLogo} alt="Trip Advisor Logo" title='Tripadvisor logo representing trusted travel reviews' />
                            </a>
                            <a href="" className="image-link" target="_blank">
                                <Image width={300} height={50} src={googleStars} alt="Google Review Logo" title='Google Review logo showcasing customer feedback' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials