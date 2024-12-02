import React from 'react'
import { FaCar, FaMoneyBillWave, FaPlane, FaUserTie } from 'react-icons/fa6'
import { MdSanitizer, MdSupportAgent } from 'react-icons/md'
import SlickSlider from './SlickSlider'

const WhyChooseUs = () => {
    return (
        <>
            <SlickSlider
                settings={{
                    slidesToShow: 3,
                    autoplay: false,
                }}
            >
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <MdSanitizer className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">Sanitized Cars</h4>
                            <p className="text-capitalize mb-0">
                                Jaipur Taxi Service provides fully sanitized taxi car for Jaipur Local & Outstation Trips.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <FaCar className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">Well-Maintained Car</h4>
                            <p className="text-capitalize mb-0">
                                Jaipur Taxi Service provide well maintained taxi car for Local & Outstation trip.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <FaUserTie className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">Professional Car Driver</h4>
                            <p className="text-capitalize mb-0">
                                All our drivers are experienced, well-behaved, courteus, police verified.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <FaMoneyBillWave className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">Affordable Taxi Services</h4>
                            <p className="text-capitalize mb-0">
                                Jaipur Taxi Service assure you best & lowest car rental fare in Jaipur.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <FaPlane className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">20 Years of Experience </h4>
                            <p className="text-capitalize mb-0">
                                We are working since 2002 with same team.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-4 mb-sm-1 px-0 d-flex justify-content-between align-items-stretch why-us-col">
                    <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start gap-3 flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                        <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                            <MdSupportAgent className="" />
                        </div>
                        <div className="content">
                            <h4 className="text-capitalize fw-bold">Travel Assistance</h4>
                            <p className="text-capitalize mb-0">
                                provides 24x7 assistance over call, whatsapp & email to all guests.
                            </p>
                        </div>
                    </div>
                </div>
            </SlickSlider>
        </>
    )
}

export default WhyChooseUs