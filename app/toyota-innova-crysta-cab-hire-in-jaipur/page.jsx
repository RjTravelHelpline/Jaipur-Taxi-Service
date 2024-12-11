'use client'
import HeroBanner from '@/components/HeroBanner'
import SlickSlider from '@/components/SlickSlider'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Table } from 'react-bootstrap'
import { FaCarCrash, FaFirstAid, FaInfoCircle, FaMapMarkerAlt, FaMusic, FaSnowflake, FaSprayCan, FaUsers, FaUserTie } from "react-icons/fa";
import { MdAirlineSeatReclineNormal, MdEventSeat, MdFeaturedPlayList, MdOutlineArrowOutward, MdOutlinePower, MdWindow } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { BsImages, BsLuggageFill } from "react-icons/bs";
import Link from 'next/link'
import { useState } from 'react'
import { GiAirBalloon, GiAutoRepair, GiLeatherBoot, GiLeg, GiVacuumCleaner } from "react-icons/gi";
import { RiHandSanitizerFill } from 'react-icons/ri'
import { PiSeatbeltFill } from 'react-icons/pi'
import { BiChevronDown } from 'react-icons/bi'
const Page = () => {

  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "features", "cab-charges", "gallery"];
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
      heading: 'Toyota Innova Crysta',
      subheading: 'Comfort & Convenience for Every Journey',
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
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem href="/suv-car-rental-jaipur">...</BreadcrumbItem>
              <BreadcrumbItem active>toyoto innova crysta</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="container-fluid py-2 about-nav bg-white">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center gap-2 p-lg-2 p-sm-1 rounded-3 bg-white px-2">
            <Link href="#overview" className="px-0 rounded-3">
              <p
                className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "overview" ? "active" : ""
                  }`}
              >
                <FaInfoCircle className='text-tertary me-2' />Overview
              </p>
            </Link>
            <Link href="#features" className="px-0 rounded-3">
              <p
                className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "features" ? "active" : ""
                  }`}
              >
                <MdFeaturedPlayList className='text-tertary me-2' /> Features & Amenities
              </p>
            </Link>
            <Link href="#cab-charges" className="px-0 rounded-3">
              <p
                className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "cab-charges" ? "active" : ""
                  }`}
              >
                <FaDollarSign className='text-tertary me-2' /> Cab Charges
              </p>
            </Link>
            <Link href="#gallery" className="px-0 rounded-3">
              <p
                className={`text-black rounded-3 nav-link text-capitalize mb-0 p-2 ${activeSection === "gallery" ? "active" : ""
                  }`}
              >
                <BsImages className='text-tertary me-2' />gallery
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* overview */}
      <section id="overview" className="container-fluid py-lg-5 py-sm-4 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>
                Jaipur Taxi Service offer&apos;s you Toyota Innova Crysta Cab Hire for Jaipur Local & Outstation Trips from Jaipur, Jodhpur, Udaipur, Jaisalmer, Mount Abu & other cities of Rajasthan. Our Innova Crysta Taxi Cars are sanitized before & after every duty, all our Cabs well maintained and driven by experienced & courteus cab driver&apos;s. Our Cab Hire Services are available for Jaipur to Haridwar, Jaipur to Ajmer, Jaipur to Beawar, Jaipur to Bhilwara and all over India as well as Cab for Jaipur Local Use. Our Cab Hire Service offer guranteed lowest fare in Jaipur. Toyota Innova Crysta Taxi Cars is also available for Rajasthan Tour with Driver, Conferences, Weddings, Events & Corporate Movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="container-fluid py-lg-5 py-sm-4 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title w-100 text-center'>Features & Amenities</h3>
              <p className='text-center'>
                Our Toyota Innova Crysta Cab Service in Jaipur is available with following features & amenities
              </p>
            </div>
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center px-2 gap-2 flex-wrap">
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <FaUsers className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  6 Passenger + 1 Driver
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <FaSprayCan className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Sanitized Car
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <RiHandSanitizerFill className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Mask & Sanitizer in Car
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <FaSnowflake className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Air-Conditoned & Heater
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <BsLuggageFill className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Ample Space for Luggage
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <MdWindow className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Power Window
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <MdOutlinePower className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Mobile Charger
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <FaCarCrash className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Anti-Lock Breaking System (ABS)
                </h4>
              </div>
              <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                <span className='bg-tertary-down text-black p-2 rounded-5'>
                  <GiAirBalloon className=' fs-4' />
                </span>
                <h4 className="web-title fw-bold text-capitalize">
                  Air-Bags
                </h4>
              </div>
              {
                isShowAll && (
                  <>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <MdAirlineSeatReclineNormal className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Head Rest & Neck Rest
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <FaMapMarkerAlt className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        GPS Enabled Vehicles
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <GiLeg className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Ample Leg Space
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <PiSeatbeltFill className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Individual Seat Belts
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <MdEventSeat className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Spacious and Table Seats
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <FaMusic className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Stereo System
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <FaFirstAid className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        First Aid Box
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <GiVacuumCleaner className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Neat & Clean Seat Covers
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <FaUserTie className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Driver in Uniform
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <GiLeatherBoot className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Leather Fabric Upholstery
                      </h4>
                    </div>
                    <div className="cab-feature d-flex flex-column justify-content-start align-items-start gap-2 flex-grow-1 p-3 rounded-4 bg-white text-black">
                      <span className='bg-tertary-down text-black p-2 rounded-5'>
                        <GiAutoRepair className=' fs-4' />
                      </span>
                      <h4 className="web-title fw-bold text-capitalize">
                        Attractive Interior
                      </h4>
                    </div>
                  </>
                )
              }

            </div>
            <div className="col-12 d-flex w-100 align-items-center gap-2 mt-3">
              <hr />
              <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize' onClick={handleShow}>view all<BiChevronDown className='text-tertary' /></button>
            </div>
          </div>
        </div>
      </section>

      {/* charges */}
      <section id="cab-charges" className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title text-center'>cab charges for jaipur</h3>
              <p className='text-center'>
                Jaipur Taxi Service offer best rates for Toyota Innova Crysta Cab for Jaipur Local Use & Outstation Trip from Jaipur.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary-down w-100 p-3 text-center rounded-top-4'>Jaipur Local Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Airport Pickup/Drop</td>
                    <td>Rs.2000</td>
                  </tr>
                  <tr>
                    <td>08 Hours / 80 Kms</td>
                    <td>Rs.3000</td>
                  </tr>
                  <tr>
                    <td>12 Hours / 120 Kms</td>
                    <td>Rs.4200</td>
                  </tr>
                  <tr>
                    <td>Extra Hour</td>
                    <td>Rs.350 per hour</td>
                  </tr>
                  <tr>
                    <td>Extra Kms</td>
                    <td>Rs.17 per km</td>
                  </tr>
                  <tr>
                    <td>Driver Allowance</td>
                    <td>Rs.300</td>
                  </tr>
                  <tr>
                    <td>Parking Charges</td>
                    <td>As Actual</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary-down w-100 p-3 text-center rounded-top-4'>outstation Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rate</td>
                    <td>Rs.17 per km</td>
                  </tr>
                  <tr>
                    <td>Minimum Running</td>
                    <td>250 Kms per calendar day</td>
                  </tr>
                  <tr>
                    <td>Running Calculation</td>
                    <td>Jaipur to Jaipur</td>
                  </tr>
                  <tr>
                    <td>Road Tolls Charges</td>
                    <td>As Actual</td>
                  </tr>
                  <tr>
                    <td>Parking Charges</td>
                    <td>As Actual</td>
                  </tr>
                  <tr>
                    <td>Inter-State Road Tax</td>
                    <td>As Actual</td>
                  </tr>
                  <tr>
                    <td>Driver Allowance</td>
                    <td>Rs.300 per day</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <section id="gallery" className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>cab gallery</h2>
              <p className='text-center text-capitalize'>discover lens from our well-maintained fleet</p>
            </div>
            <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
              <div className="col-12">
                <SlickSlider settings={{ slidesToShow: 2, autoplay: false, dots: true }}>
                  <div className="w-100 cab-detail-img-slider mb-lg-3 mb-sm-1 px-2">
                    <Image
                      width={1200}
                      height={600}
                      className="d-block w-100"
                      src="/Images/Cabs/innova-crysta-banner-01.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="w-100 cab-detail-img-slider mb-lg-3 mb-sm-1 px-2">
                    <Image
                      width={1200}
                      height={600}
                      className="d-block w-100"
                      src="/Images/Cabs/innova-crysta-banner-02.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="w-100 cab-detail-img-slider mb-lg-3 mb-sm-1 px-2">
                    <Image
                      width={1200}
                      height={600}
                      className="d-block w-100"
                      src="/Images/Cabs/innova-crysta-banner-03.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="w-100 cab-detail-img-slider mb-lg-3 mb-sm-1 px-2">
                    <Image
                      width={1200}
                      height={600}
                      className="d-block w-100"
                      src="/Images/Cabs/innova-crysta-banner-04.jpg"
                      alt="First slide"
                    />
                  </div>
                </SlickSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page