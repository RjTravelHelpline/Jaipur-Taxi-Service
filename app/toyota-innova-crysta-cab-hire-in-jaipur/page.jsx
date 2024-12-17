'use client'
import HeroBanner from '@/components/HeroBanner'
import { busAndCoachRentals, cheapestCabRentals, luxuryBusRentals, luxuryCabRentals, sedanCabRentals, suvCabRentals, tempoTravellerRentals } from '@/data/cabRentalData'
import { toyota_corolla_jaipur_local_use, toyota_corolla_outstation_use } from '@/data/Charges'
import { innova_crysta_feat } from '@/data/Features'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, Card, Table } from 'react-bootstrap'
import { BiChevronUp, BiChevronDown, BiSolidBusSchool } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import { FaCarRear } from 'react-icons/fa6'
import { MdArrowOutward, MdDirectionsCarFilled, MdOutlineArrowOutward } from 'react-icons/md'
import { TourPackagesByCategory } from '@/data/TourPackagesData'
import { FaCar, FaLink } from 'react-icons/fa'
import { IoCarSportSharp } from 'react-icons/io5'
import SlickImageModal from '@/components/SlickImageModal'
import SectionNavigation from '@/components/SectionNavigation'
import { PiTaxiFill } from 'react-icons/pi'
import EnquiryModal from '@/components/EnquiryModal'

const Page = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  const [activeIndex, setActiveIndex] = useState(6); // Tracks the index of the currently open accordion

  const handleShowAccord = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the state based on index
  };

  // slick modal
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Images/Cabs/innova-crysta-banner-01.jpg",
    "/Images/Cabs/innova-crysta-banner-02.jpg",
    "/Images/Cabs/innova-crysta-banner-03.jpg",
    "/Images/Cabs/innova-crysta-banner-04.jpg",
  ];

  // navigation
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features & Amenities" },
    { id: "cab-charges", label: "Cab Charges" },
    { id: "gallery", label: "Gallery" },
  ];
  const handleOpenModal = (index = 0) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


  // tempo & bus rentals
  const tempo_and_bus_rentals = [...tempoTravellerRentals, ...busAndCoachRentals, ...luxuryBusRentals]
  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "toyota innova crysta", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="/Images/Cabs/innova-crysta-banner.png" />
      {/* breadcrumb */}
      <div className="container-fluid bg-black bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem href="/suv-car-rental-jaipur">SUV cab rental</BreadcrumbItem>
              <BreadcrumbItem active>toyoto innova crysta</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-lg-9 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-lg-3 px-sm-0">

              {/* section 1 */}
              <div className="cab-insider w-100 py-3" id="overview">
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-4 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid black' }}>
                  overview
                </h3>
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
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-4 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid black' }}>
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
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-4 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid black' }}>
                  cab charges</h3>
                <hr />
                <p className='w-100 web-title fw-bold'>
                  Jaipur Taxi Service offer best rates for Toyota Innova Crysta Cab for Jaipur Local Use & Outstation Trip from Jaipur.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
                    <h4 className='text-capitalize fw-bold bg-active-gray w-100 p-3'>Jaipur Local Use</h4>
                    <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                      <thead>
                        <tr>
                          <th className='web-title fw-bold'>Particulars</th>
                          <th className='web-title fw-bold'>Fare</th>
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
                    <h4 className='text-capitalize fw-bold bg-active-gray w-100 p-3 '>outstation Use</h4>
                    <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                      <thead>
                        <tr>
                          <th className='web-title fw-bold'>Particulars</th>
                          <th className='web-title fw-bold'>Fare</th>
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
                <h3 className='text-capitalize fw-bold web-title bg-linear-modal p-4 w-100 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid black' }}>
                  {/* <span className="text-black p-3  d-flex justify-content-center align-items-center fs-3" style={{ borderLeft: '5px solid black' }}>
                    <BsImages />
                  </span> */}
                  cab galley</h3>
                <hr />
                <div className="gallery-container row d-flex justify-content-center align-items-center overflow-hidden rounded-4 py-0 px-1">
                  <button className='rounded-4 text-capitalize fw-bold web-title' onClick={() => handleOpenModal(0)}>
                    <BsImages className='me-2' />
                    <span>view all images</span>
                  </button>
                  {/* Gallery Images */}
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`col-6 cab-detail-img-slider px-0`}
                      onClick={() => handleOpenModal(index)}
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
              <div className="cab-insider bg-black book-now w-100 p-2 rounded-4">
                <div className="book-now-comp d-flex justify-content-center align-items-center">
                  <div className="insider d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
                    <div className="d-flex justify-content-start align-items-start flex-column">
                      <h4 className="banner-title-2 web-title fw-bold text-capitalize text-white mb-0">
                        Confirm Your Ride
                      </h4>
                      <p className='text-capitalize mb-0 text-hr'>
                        Instant Booking for Stress-Free and Reliable Rides
                      </p>
                    </div>
                    <button className="rounded-5 text-white text-capitalize d-flex align-items-center justify-content-center" style={{ fontWeight: '500' }} onClick={() => setModalShow(true)}>
                      <PiTaxiFill className='text-black me-2' /> book now
                      <div className="lens-flare"></div>
                    </button>
                    <EnquiryModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      title='Toyota Innova Crysta'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* sticky side content */}
            <div className="col-lg-3 col-sm-12 py-4 about-nav bg-white px-1">
              <div className="cab-side-insider">
                <p className={`web-title fw-bold category bg-tertary mb-0 p-3 d-flex align-items-center justify-content-between ${activeIndex === 6 ? 'rounded-top-4' : ' rounded-4'}`}>
                  <span className="text-white me-2 d-flex justify-content-center align-items-center">
                    <FaLink className='me-2 text-black' />
                    Quick Links
                  </span>
                  <span className='cursor-pointer bg-tertary-down text-white d-flex p-2 rounded-5' onClick={() => handleShowAccord(6)} >
                    {activeIndex === 6 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {
                  activeIndex === 6 && (
                    <SectionNavigation sections={sections} />
                  )
                }
              </div>
              <div className="cab-side-insider my-2">
                <p className={`web-title fw-bold bg-active-gray mb-0 category  p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === 1 ? 'rounded-top-4 bg-tertary-down text-tertary' : ' rounded-4'}`}>
                  <span className="d-flex justify-content-center align-items-center">
                    <span className='me-2 text-tertary' >
                      <MdDirectionsCarFilled />
                    </span>
                    Hatchback Cab Rentals
                  </span>
                  <span className='cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex' onClick={() => handleShowAccord(1)} >
                    {activeIndex === 1 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {activeIndex === 1 && (
                  <>
                    <div className="categories">
                      {cheapestCabRentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index} >
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3' >
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
                <p className={`web-title fw-bold bg-active-gray mb-0 category  p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === 2 ? 'rounded-top-4 bg-tertary-down text-tertary' : ' rounded-4'}`}>
                  <span className="d-flex justify-content-center align-items-center">
                    <span className='me-2 text-tertary' >
                      <FaCar />
                    </span>
                    Sedan Cab Rentals
                  </span>
                  <span className='cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex' onClick={() => handleShowAccord(2)} >
                    {activeIndex === 2 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {activeIndex === 2 && (
                  <>
                    <div className="categories">
                      {sedanCabRentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index} >
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3' >
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
                <p className={`web-title fw-bold bg-active-gray mb-0 category  p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === 3 ? 'rounded-top-4 bg-tertary-down text-tertary' : ' rounded-4'}`}>
                  <span className="d-flex justify-content-center align-items-center">
                    <span className='me-2 text-tertary' >
                      <FaCarRear />
                    </span>
                    SUV Cab Rentals
                  </span>
                  <span className='cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex' onClick={() => handleShowAccord(3)} >
                    {activeIndex === 3 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {activeIndex === 3 && (
                  <>
                    <div className="categories">
                      {suvCabRentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index}>
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3' >
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
                <p className={`web-title fw-bold bg-active-gray mb-0 category  p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === 4 ? 'rounded-top-4 bg-tertary-down text-tertary' : ' rounded-4'}`}>
                  <span className="d-flex justify-content-center align-items-center">
                    <span className='me-2 text-tertary' >
                      <IoCarSportSharp />
                    </span>
                    Luxury Cab Rentals
                  </span>
                  <span className='cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex' onClick={() => handleShowAccord(4)} >
                    {activeIndex === 4 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {activeIndex === 4 && (
                  <>
                    <div className="categories">
                      {luxuryCabRentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index}>
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3' >
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
                <p className={`web-title fw-bold bg-active-gray mb-0 category  p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === 5 ? 'rounded-top-4 bg-tertary-down text-tertary' : ' rounded-4'}`}>
                  <span className="d-flex justify-content-center align-items-center">
                    <span className='me-2 text-tertary' >
                      <BiSolidBusSchool />
                    </span>
                    Tempo & Bus Rentals
                  </span>
                  <span className='cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex' onClick={() => handleShowAccord(5)} >
                    {activeIndex === 5 ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                </p>
                {activeIndex === 5 && (
                  <>
                    <div className="categories">
                      {tempo_and_bus_rentals.map((item, index) => {
                        return (
                          <Link href={item.navigate} className="px-0" key={index}>
                            <p className='text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3' >
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
      {/* <div className="container-fluid py-3 bg-black">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 book-now">
            <div className="col-12 col-lg-8 col-sm-12 book-now-comp d-flex justify-content-center align-items-center">
              <div className="insider d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
                <div className="d-flex justify-content-start align-items-start flex-column">
                  <h4 className="banner-title-2 web-title fw-bold text-capitalize text-white mb-0">
                    Let’s Confirm Your Ride
                  </h4>
                  <p className='text-center text-capitalize mb-0 text-hr'>
                    Instant Booking for Stress-Free and Reliable Rides
                  </p>
                </div>
                <button className="rounded-5 text-white text-capitalize d-flex align-items-center justify-content-center" style={{ fontWeight: '500' }}>
                  <PiTaxiFill className='text-black me-2' /> book now
                  <div className="lens-flare"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* featured tours */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>featured tour packages</h3>
              <p className='text-center text-capitalize'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages ">
              {TourPackagesByCategory.slice(0, 6).reverse(3, 0).map((pkg, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 d-flex align-items-center px-2"
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
                      <Link href={pkg.navigate} className="text-capitalize go-link bg-white p-3 rounded-5 d-flex"><MdOutlineArrowOutward className='' /></Link>
                      <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                        <h3 className="w-100 text-capitalize mx-1">
                          {pkg.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* slick modal show */}
      <SlickImageModal
        show={showModal}
        handleClose={handleClose}
        images={images}
        currentIndex={currentIndex}
      />
    </>
  )
}

export default Page