import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import { FaCar, FaMoneyBillWave, FaPlane, FaUserTie } from 'react-icons/fa6';
import { MdSanitizer, MdSupportAgent } from 'react-icons/md';
const HomeBanner01 = '/Images/Cabs/cab-rental-banner.jpg';

const page = () => {
  const slides = [
    {
      image: HomeBanner01,
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'why choose us',
      subheading: 'Discover the unmatched benefits of choosing our taxi services.',
    },
  ]
  return (
    <>
      <HeroBanner slides={slides} />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column">
              <h2 className='text-capitalize fw-bold'>overview</h2>
              <hr />
              <p className='text-justify mb-0'>Jaipur Taxi Service is a top choice for reliable and comfortable transportation in Jaipur. Their offerings cater to various needs, including airport transfers, local sightseeing, outstation trips, and corporate travel solutions. With a fleet of well-maintained vehicles, customers can select from economical options to luxury cars, ensuring a safe and comfortable ride, giving you peace of mind during your journey.</p>
              <hr />
              <p className='text-justify mb-0'>
                Professional drivers enhance the travel experience, providing punctual and courteous service while being well-versed with local routes. Jaipur Taxi Service&apos;s transparent pricing policy ensures no hidden charges, making it easier for travelers to plan their budgets. The user-friendly online booking system simplifies the process, allowing customers to book rides conveniently from their devices.
              </p>
              <hr />
              <p className="text-justify mb-0">
                Customer satisfaction is paramount, evidenced by their 24/7 customer support, which addresses queries and concerns promptly. This commitment to service quality has garnered positive reviews and repeat customers, solidifying its reputation as a trustworthy taxi service in Jaipur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 bg-tertary-down">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center'>What Makes Us <span className="fw-bold">
                Stand Out?</span></h2>
              <p className='text-center text-capitalize'>From seamless rides to unparalleled customer care</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us why-us-screen">
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <MdSanitizer className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">Sanitized Cars</h4>
                  <p className=" mb-0">
                    Hygiene is one of the most important thing in today&apos; s scenerio. Jaipur Taxi Service provides fully sanitized taxi car for Jaipur Local & Outstation Trips.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <FaCar className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">Well-Maintained Car</h4>
                  <p className=" mb-0">
                    Jaipur Taxi Service provide well maintained taxi car to all guest for Local & Outstation trip. All our taxi cars are periodically checked by company authorized workshops.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <FaUserTie className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">Professional Car Driver</h4>
                  <p className=" mb-0">
                    All our drivers are experienced, well-behaved, courteus, soft spoken, police verified and holding commerical vehicle driving licence issued by Transport Department.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <FaMoneyBillWave className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">Affordable Taxi Services</h4>
                  <p className=" mb-0">
                    Jaipur Taxi Service assure you best & lowest car rental fare in jaipur with no compromise on quality of service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <FaPlane className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">20 Years of Experience </h4>
                  <p className=" mb-0">
                    We are working since 2002 with same team. All our team members including Drivers, Guides, Tour Managers, Tour Executives and founder members are knowledble and well experienced.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-3 px-0 d-flex justify-content-between align-items-stretch why-us-col">
              <div className="why-us-card col1 d-flex w-100 h-100 justify-content-between align-items-start flex-column rounded-4 h-100" style={{ height: '100% !important' }}>
                <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                  <MdSupportAgent className="" />
                </div>
                <hr />
                <div className="content">
                  <h4 className="text-capitalize fw-bold">Travel Assistance</h4>
                  <p className=" mb-0">
                    Jaipur Taxi Service provides 24x7 assistance over phone to all guests travelling with us and prompt response to all new enquries over phone, whatsapp and email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page