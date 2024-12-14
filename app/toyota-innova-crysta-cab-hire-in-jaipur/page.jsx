'use client'
import HeroBanner from '@/components/HeroBanner'
import SlickSlider from '@/components/SlickSlider'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Modal, Table } from 'react-bootstrap'
import { FaInfoCircle } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import Link from 'next/link'
import { useState } from 'react'
import { RiCloseFill, RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { innova_crysta_feat } from '@/data/Features'
import { innova_crysta_jaipur_local_use, innova_crysta_outstation_use } from '@/data/Charges'
const Page = () => {

  const [showSlick, setShowSlick] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpenSlick = (index = 0) => {
    setCurrentIndex(index);
    setShowSlick(true);
  };
  const handleCloseSlick = () => {
    setShowSlick(false);
  }

  const images = [
    "/Images/Cabs/innova-crysta-banner-01.jpg",
    "/Images/Cabs/innova-crysta-banner-02.jpg",
    "/Images/Cabs/innova-crysta-banner-03.jpg",
    "/Images/Cabs/innova-crysta-banner-04.jpg",
  ];

  const sliderSettings = {
    slidesToShow: 1,
    autoplay: false,
    initialSlide: currentIndex,
    infinite: true,
    dots: true,
  };

  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  // navigation
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "features", "cab-charges", "gallery"];
      const scrollPosition = window.scrollY;
      if (scrollPosition < 90) {
        setActiveSection(null);
        return;
      }
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop - 400 && scrollPosition < offsetBottom - 100) {
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
  return (
    <>
      {/* banner */}
      <HeroBanner slides={[
        {
          heading: 'Toyota Innova Crysta cab',
          subheading: 'Comfort & Convenience for Every Journey',
        }
      ]}
        backgroundImage="/Images/Cabs/innova-crysta-banner.png" />
      {/* breadcrumb */}
      <div className="container-fluid bg-black bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem href="/suv-car-rental-jaipur">suv car rental</BreadcrumbItem>
              <BreadcrumbItem active>toyoto innova crysta</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="container-fluid about-nav bg-black">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center py-0 bg-black px-2">
            <Link href="#overview" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "overview" ? "active" : ""
                  }`}
              >
                <FaInfoCircle className='text-white icon' />
                <span>
                  Overview
                </span>
              </p>
            </Link>
            <Link href="#features" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "features" ? "active" : ""
                  }`}
              >
                <MdStarRate className='text-white icon' />
                <span>

                  Features & Amenities
                </span>
              </p>
            </Link>
            <Link href="#cab-charges" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "cab-charges" ? "active" : ""
                  }`}
              >
                <RiMoneyRupeeCircleFill className='text-white icon' />
                <span>

                  Cab Charges
                </span>
              </p>
            </Link>
            <Link href="#gallery" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "gallery" ? "active" : ""
                  }`}
              >
                <BsImages className='text-white icon' />
                <span>

                  gallery
                </span>
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
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  01
                </span>
                overview</h3>
              <hr />
              <p className='text-justify'>
                Jaipur Taxi Service offer&apos;s you Toyota Innova Crysta Cab Hire for Jaipur Local & Outstation Trips from Jaipur, Jodhpur, Udaipur, Jaisalmer, Mount Abu & other cities of Rajasthan. Our Innova Crysta Taxi Cars are sanitized before & after every duty, all our Cabs well maintained and driven by experienced & courteus cab driver&apos;s. Our Cab Hire Services are available for Jaipur to Haridwar, Jaipur to Ajmer, Jaipur to Beawar, Jaipur to Bhilwara and all over India as well as Cab for Jaipur Local Use. Our Cab Hire Service offer guranteed lowest fare in Jaipur. Toyota Innova Crysta Taxi Cars is also available for Rajasthan Tour with Driver, Conferences, Weddings, Events & Corporate Movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="container-fluid py-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  02
                </span>
                features & amenities</h3>
              <hr />
              <h4 className='w-100'>
                Our Toyota Innova Crysta Cab Service in Jaipur is available with following features & amenities
              </h4>
            </div>
            <div className="row mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center">
              {innova_crysta_feat.slice(0, isShowAll ? innova_crysta_feat.length : 8).map((feature, index) => (
                <div
                  key={index}
                  className="col-12 col-lg-3 col-md-6 p-2"
                  style={{ height: "170px" }}
                >
                  <div className="cab-feature-insider h-100 cab-feature d-flex flex-column justify-content-between align-items-start gap-2 p-3 rounded-4 text-black">
                    <span className="bg-black text-tertary p-3 rounded-5">
                      {feature.icon}
                    </span>
                    <hr className="my-1" />
                    <h4 className="web-title fw-bold text-capitalize">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="col-12 d-flex w-100 align-items-center gap-2 mt-3">
                <hr />
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-1 d-flex text-nowrap text-right text-capitalize' onClick={handleShow}>
                  {isShowAll ? 'collapse' : 'view all'}
                  {isShowAll ? <BiChevronUp className='text-tertary icon' /> : <BiChevronDown className='text-tertary icon' />}

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* charges */}
      <section id="cab-charges" className="container-fluid py-4 bg-white">{ }
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  03
                </span>
                cab charges</h3>
              <hr />
              <h4 className='w-100'>
                Jaipur Taxi Service offer best rates for Toyota Innova Crysta Cab for Jaipur Local Use & Outstation Trip from Jaipur.
              </h4>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary w-100 p-3 text-center'>Jaipur Local Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  {innova_crysta_jaipur_local_use.rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.particulars}</td>
                      <td>{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary w-100 p-3 text-center'>outstation Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  {innova_crysta_outstation_use.rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.particulars}</td>
                      <td>{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <section id="gallery" className="container-fluid py-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  04
                </span>
                cab gallery</h3>
              <hr />
              <h4 className='w-100'>
                Discover lenss from our well-maintained fleet
              </h4>
            </div>
            <div className="gallery-container row d-flex justify-content-center align-items-center py-0 overflow-hidden rounded-4 px-0">
              <button className='rounded-5 text-capitalize fw-bold web-title' onClick={() => handleOpenSlick()}>
                <BsImages className='me-2' />
                <span>view all images</span>
              </button>
              {/* Gallery Images */}
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`col-12 col-lg-3 col-sm-6 cab-detail-img-slider px-0`}
                  onClick={() => handleOpenSlick(index)} // Opens slick modal on image click
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    width={1200}
                    height={600}
                    className="d-block w-100"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* slick modal show */}
      <Modal show={showSlick} onHide={handleCloseSlick} size="xl" centered className='image-modal' animation={false}>
        <Modal.Body className="p-0 bg-transparent" style={{ background: 'transparent' }}>
          <button
            className="d-flex p-3 m-3 close-button rounded-5"
            onClick={handleCloseSlick}
            aria-label="Close"
          ><RiCloseFill /> </button>
          <SlickSlider settings={sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="text-center rounded-4 overflow-hidden modal-image-container mb-2">
                <Image
                  width={1200}
                  height={600}
                  className="d-block w-100 h-auto"
                  style={{ objectFit: "cover" }}
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </SlickSlider>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Page