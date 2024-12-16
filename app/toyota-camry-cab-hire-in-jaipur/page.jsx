'use client'
import HeroBanner from '@/components/HeroBanner'
import SlickSlider from '@/components/SlickSlider'
import { CarRentalsByCategory, luxuryCabRentals } from '@/data/cabRentalData'
import { toyota_corolla_jaipur_local_use, toyota_corolla_outstation_use } from '@/data/Charges'
import { innova_crysta_feat } from '@/data/Features'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, BreadcrumbItem, Modal, Table } from 'react-bootstrap'
import { BiChevronUp, BiChevronDown, BiSolidCategory } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import { RiCloseFill, RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { HiQueueList } from "react-icons/hi2";
import { TbLayoutListFilled } from "react-icons/tb";
import { FaCarSide } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'

const Page = () => {
  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  const [activeIndex, setActiveIndex] = useState(3); // Tracks the index of the currently open accordion

  const handleShowAccord = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the state based on index
  };

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
      <HeroBanner
        slides={[
          { heading: "toyota camry cab", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="/Images/Cabs/toyota-camry-banner.png" />
      {/* breadcrumb */}
      <div className="container-fluid bg-black bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem href="/suv-car-rental-jaipur">luxury cab rental</BreadcrumbItem>
              <BreadcrumbItem active>toyoto camry </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-lg-9 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-lg-3 px-sm-2">

              {/* section 1 */}
              <div className="cab-insider w-100 py-3" id="overview">
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-3 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                  <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                    01
                  </span>
                  overview</h3>
                <hr />
                <p className='w-100 web-title fw-bold'>
                  Toyota Corolla is the best selling Car of Toyota Motor Corporation India.
                </p>
                <p className='text-justify'>
                  If you looking for spacious & safest car hire in Jaipur with comfort of luxury in lowest rates then Toyota Corolla is perfect car for you. Jaipur Taxi Service offer&apos;s luxury car hire service across major cities of Rajasthan. We have had the privilege of providing over a million safe rides to our esteemed customers. Toyota Corolla Car Hire service is available for Jaipur City Tour, Outstation Tour, Jaipur to Bikaner, Jaipur to Jaisalmer, Jaipur to Ahmedabad, Jaipur to Mumbai, Jaipur to Surat and all over India. All our Taxi Cars are driven by experienced & soft spoken cab drivers who are medically fit, police verified and 100% professional.
                </p>
              </div>

              {/* section 2 */}
              <div className="cab-insider w-100 py-3" id='features'>
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-3 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                  <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                    02
                  </span>
                  features & amenities</h3>
                <hr />
                <p className='w-100 web-title fw-bold'>
                  Our Toyota Innova Crysta Cab Service in Jaipur is available with following features & amenities
                </p>
                <div className="row mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center">
                  {innova_crysta_feat.slice(0, isShowAll ? innova_crysta_feat.length : 6).map((feature, index) => (
                    <div
                      key={index}
                      className="col-12 col-lg-4 col-md-6 p-2"
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

              {/* section 3 */}
              <div className="cab-insider w-100 py-3" id='cab-charges'>
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-3 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                  <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                    03
                  </span>
                  cab charges
                </h3>
                <hr />
                <p className='w-100 web-title fw-bold'>
                  Jaipur Taxi Service offer best rates for Toyota Innova Crysta Cab for Jaipur Local Use & Outstation Trip from Jaipur.
                </p>
                <div className="row">
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
                        {toyota_corolla_jaipur_local_use.rows.map((row, index) => (
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
                        {toyota_corolla_outstation_use.rows.map((row, index) => (
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

              {/* section 4 */}
              <div className="cab-insider w-100 py-3" id='gallery'>
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-3 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                  <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                    04
                  </span>
                  cab gallery
                </h3>
                <hr />
                <div className="gallery-container row d-flex justify-content-center align-items-center overflow-hidden rounded-4 py-0 px-0">
                  <button className='rounded-4 text-capitalize fw-bold web-title' onClick={() => handleOpenSlick()}>
                    <BsImages className='me-2' />
                    <span>view all images</span>
                  </button>
                  {/* Gallery Images */}
                  {images.slice(0, 3).map((src, index) => (
                    <div
                      key={index}
                      className={`col-12 col-lg-4 col-sm-6 cab-detail-img-slider px-0`}
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
            {/* sticky side content */}
            <div className="col-lg-3 col-sm-12 py-4 about-nav bg-white px-1">
              <div className="cab-side-insider">
                <h4 className={`web-title fw-bold text-white category bg-tertary p-3 d-flex align-items-center justify-content-between ${activeIndex === 3 ? 'rounded-top-4' : ' rounded-4'}`}>
                  <span className="text-white me-2 d-flex justify-content-center align-items-center">
                    <TbLayoutListFilled className='me-2 text-black' />
                    Inside The Page
                  </span>
                  <span className='cursor-pointer bg-tertary-down text-white d-flex p-1 rounded-5' onClick={() => handleShowAccord(3)} >
                    {activeIndex === 3 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </h4>
                {
                  activeIndex === 3 && (
                    <>
                      <Link href="#overview" className="px-0">
                        <p
                          className={`text-black nav-link rounded-4 p-lg-3 p-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "overview" ? "active" : ""
                            }`}
                        >
                          <span className="text-black me-1 fw-bold d-flex justify-content-center align-items-center">
                            01
                          </span>
                          <span>
                            Overview
                          </span>
                        </p>
                      </Link>
                      <Link href="#features" className="px-0">
                        <p
                          className={`text-black nav-link rounded-4 p-lg-3 p-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "features" ? "active" : ""
                            }`}
                        >
                          <span className="text-black me-1 fw-bold d-flex justify-content-center align-items-center">
                            02
                          </span>
                          <span>
                            Features & Amenities
                          </span>
                        </p>
                      </Link>
                      <Link href="#cab-charges" className="px-0">
                        <p
                          className={`text-black nav-link rounded-4 p-lg-3 p-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "cab-charges" ? "active" : ""
                            }`}
                        >
                          <span className="text-black me-1 fw-bold d-flex justify-content-center align-items-center">
                            03
                          </span>
                          <span>
                            Cab Charges
                          </span>
                        </p>
                      </Link>
                      <Link href="#gallery" className="px-0">
                        <p
                          className={`text-black nav-link rounded-4 p-lg-3 p-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "gallery" ? "active" : ""
                            }`}
                        >
                          <span className="text-black me-1 fw-bold d-flex justify-content-center align-items-center">
                            04
                          </span>
                          <span>

                            gallery
                          </span>
                        </p>
                      </Link>
                      <hr />
                    </>
                  )
                }
              </div>
              <div className="cab-side-insider my-2">
                <h4 className={`web-title fw-bold text-white category bg-tertary p-3 d-flex align-items-center justify-content-between ${activeIndex === 1 ? 'rounded-top-4' : ' rounded-4'}`}>
                  <span className="text-white me-2 d-flex justify-content-center align-items-center">
                    <BiSolidCategory className='me-2 text-black' />
                    Cab Rental Category
                  </span>
                  <span className='cursor-pointer bg-tertary-down text-white d-flex p-1 rounded-5' onClick={() => handleShowAccord(1)} >
                    {activeIndex === 1 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </h4>
                {activeIndex === 1 && (
                  <>
                    <div className="categories">
                      {CarRentalsByCategory.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index} >
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-2' >
                              <span>
                                <MdArrowOutward className='me-1 text-tertary' />
                              </span>
                              <span>{item.title}</span>
                            </p>
                          </Link>
                        )
                      })}
                    </div>
                    <hr />
                  </>
                )}
              </div>
              <div className="cab-side-insider my-2">
                <h4 className={`web-title fw-bold text-white category bg-tertary p-3 d-flex align-items-center justify-content-between ${activeIndex === 2 ? 'rounded-top-4' : ' rounded-4'}`}>
                  <span className="text-white me-2 d-flex justify-content-center align-items-center">
                    <FaCarSide className='me-2 text-black' />
                    Luxury Cab Rentals
                  </span>
                  <span className='cursor-pointer bg-tertary-down text-white d-flex p-1 rounded-5' onClick={() => handleShowAccord(2)} >
                    {activeIndex === 2 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </h4>
                {activeIndex === 2 && (
                  <>
                    <div className="categories">
                      {luxuryCabRentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index}>
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-2' >
                              <span>
                                <MdArrowOutward className='me-1 text-tertary' />
                              </span>
                              <span>{item.title}</span>
                            </p>
                          </Link>
                        )
                      })}
                    </div>
                    <hr />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slick modal show */}
      <Modal show={showSlick} onHide={handleCloseSlick} size="xl" centered className='image-modal' animation={false}>
        <Modal.Body className="p-0">
          <button
            className="d-flex p-3 m-3 close-button rounded-5"
            onClick={handleCloseSlick}
            aria-label="Close"
          ><RiCloseFill /> </button>
          <SlickSlider settings={sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="text-center rounded-4 overflow-hidden modal-image-container mb-4">
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