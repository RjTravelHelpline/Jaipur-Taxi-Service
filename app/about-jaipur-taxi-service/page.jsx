'use client'
import HeroBanner from '@/components/HeroBanner'
import WhyChooseUs from '@/components/WhyChooseUs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { AiOutlineFileText } from "react-icons/ai";
import { FaHandshake, FaRegComments } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'
import { Services } from '@/data/TourPackagesData'
import Image from 'next/image'
import SlickSlider from '@/components/SlickSlider'
import { reviewers } from '@/data/Reviews'
import Testimonials from '@/components/Testimonials'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(Services, 3);
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "why-choose-us", "our-services", "guests-reviews"];
      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop - 400 && scrollPosition < offsetBottom - 400) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'about us',
      subheading: 'We are JaipurTaxiService.com, part of Rajasthan Travel Helpline, proudly serving travelers since 2002.',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid bg-white bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem active>about us</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div>
        {/* About Navigation */}
        <div className="container-fluid py-2 about-nav bg-white">
          <div className="container">
            <div className="row d-flex justify-content-start align-items-center gap-2 p-lg-2 p-sm-1 rounded-3 bg-white px-2">
              <Link href="#overview" className="px-0 rounded-3">
                <p
                  className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "overview" ? "active" : ""
                    }`}
                >
                  <AiOutlineFileText className='text-tertary me-2' />Overview
                </p>
              </Link>
              <Link href="#why-choose-us" className="px-0 rounded-3">
                <p
                  className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "why-choose-us" ? "active" : ""
                    }`}
                >
                  <FaHandshake className='text-tertary me-2' /> Why Choose Us
                </p>
              </Link>
              <Link href="#our-services" className="px-0 rounded-3">
                <p
                  className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "our-services" ? "active" : ""
                    }`}
                >
                  <RiServiceLine className='text-tertary me-2' /> Our Services
                </p>
              </Link>
              <Link href="#guests-reviews" className="px-0 rounded-3">
                <p
                  className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "guests-reviews" ? "active" : ""
                    }`}
                >
                  <FaRegComments className='text-tertary me-2' />Guests Reviews
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigating The Sections */}
        {/* overview */}
        <section id="overview" className="container-fluid py-lg-5 py-sm-4 bg-white">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
              <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
                <hr />
                <p className='text-justify'>Jaipur Taxi Service is one of the oldest Car Rental Companies in Jaipur, Rajasthan (India) provides Taxi & Car Rental services for Jaipur on an hourly, daily, weekly and monthly basis to fulfill your business, leisure, wedding, conference & other taxi rental needs for Jaipur & all over Rajasthan. We provide well-maintained, clean and regularly sanitized taxi cars with police verified, courteous, experienced and reliable drivers.</p>
                <p className='text-justify'>
                  In Jaipur (Rajasthan), we provide 24×7 Car Rental Service with our own and attached Sedan, SUV & Luxury Cars. Jaipur Taxi Service drivers are trained to handle a guest during a crucial times. We prepared them properly to take care of all the situations that occur during travel. They are well known for local roads, languages and tourist places almost all over Rajasthan, Gujarat, Delhi, Uttar Pradesh, Haryana, Madhya Pradesh and Punjab.
                </p>
                <p className="text-justify">
                  Jaipur Taxi Service is one of the best taxi service providers in Jaipur, having head offices in Jaipur and associate offices in Jaisalmer, Jodhpur, Udaipur & Pushkar. We are equipped with all types of Cars, Tempo Travellers, Buses & Coaches driven by decent, well-behaved, Soft Spoken and well-mannered drivers holding Commerical Vehicle Driving Licences issued by Transport Department. All chauffeurs of Jaipur Taxi Service are well trained to handle all kinds of situations occurred during the road journey and also well versed with local roads and languages.
                </p>
                <p className="text-justify">
                  We provide Taxi services in Jaipur, Jaisalmer, Jodhpur, Bikaner, Udaipur, Mount Abu and all major tourist, pilgrimage and industrial cities of Rajasthan. Jaipur taxi service also deals in Jaipur sightseeing tour, Car Rental service in Jaisalmer, taxi service in Mount Abu, taxi car rental in Ranthambhore and for Thar Desert tour, Mount Abu tour package and tour packages covering complete Rajasthan.
                </p>
                <p className="text-justify">
                  Jaipur Taxi Service Rajasthan also offer Rajasthan tours with car & driver from your door to door, including regional flights, private taxi car with driver for Rajasthan tour, hotel bookings, meals, guide services, desert safari & other travel arrangements.
                </p>
                <hr />
              </div>
            </div></div>
        </section>

        {/* why choose us */}
        <section id="why-choose-us" className="container-fluid py-5 bg-linear-modal">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 why-us">
              <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
                <h2 className='text-capitalize text-center fw-bold web-title'>why choose us</h2>
                <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
              </div>
              <WhyChooseUs />
              <div className="col-12 d-flex w-100 align-items-center gap-2 px-4">
                <hr />
                <Link href='/why-choose-jaipur-taxi-service'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* our services */}
        <section id="our-services" className="container-fluid py-5 bg-white">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
              <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
                <h2 className='text-capitalize text-center fw-bold web-title'>our services</h2>
                <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 bydayspackages carRentalsCard service-packages">
                {displayedItems.map((pkg, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 my-2 d-flex align-items-center px-2"
                  >
                    <Link href={pkg.navigate} className="text-capitalize">
                      <Card className="card bg-transparent">
                        <Image
                          variant="top"
                          src={pkg.imgSrc}
                          alt="Card Packages"
                          className="w-100 card-image"
                          width={600}
                          height={800}
                        />
                        <Link href={pkg.navigate} className="d-flex justify-content-center  align-items-center gap-2 text-capitalize go-link bg-white p-lg-3 p-sm-2 rounded-4 d-flex" style={{ backdropFilter: 'blur(20px)' }}>Explore now<MdOutlineArrowOutward className='' /></Link>
                        <div className="row p-3 card-content d-flex align-items-start  justfiy-content-start flex-column">
                          <h3 className="w-100 text-capitalize web-title fw-bold text-tertary">
                            {pkg.title}
                          </h3>
                          <hr />
                          <p className="fw-normal text-white w-100 text-capitalize ">
                            {pkg.description}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
              <ToggleShowAllButton showAll={showAll} toggleShowAll={toggleShowAll} />
            </div>
          </div>
        </section>

        {/* guest reviews */}
        <section id="guests-reviews" className="container-fluid py-5 bg-linear-modal">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
              <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
                <h2 className='text-capitalize text-center fw-bold web-title'>guest reviews</h2>
                <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
              </div>
            </div>
            <div className="row d-flex align-items-stretch px-2 reviews">
              <SlickSlider settings={{ slidesToShow: 2 }}>
                {reviewers.map((reviewer, index) => {
                  return <Testimonials key={index} reviewer={reviewer} />;
                })}
              </SlickSlider>
              <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
                <hr />
                <Link href='/guest-feedback'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page