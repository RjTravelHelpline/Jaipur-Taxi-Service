'use client'
import HeroBanner from '@/components/HeroBanner'
import { busAndCoachRentals, cheapestCabRentals, luxuryBusRentals, luxuryCabRentals, sedanCabRentals, suvCabRentals, tempoTravellerRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { BiCategory, BiCategoryAlt, BiChevronUp, BiSolidBusSchool } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import { FaCarRear } from 'react-icons/fa6'
import { MdCategory, MdDirectionsCarFilled, MdOutlineArrowOutward, MdOutlineCategory } from 'react-icons/md'
import { TourPackagesByCategory } from '@/data/TourPackagesData'
import { FaLink, FaMoneyBillWave } from 'react-icons/fa'
import { IoCarSportSharp, IoDocumentText, IoSettings } from 'react-icons/io5'
import SectionNavigation from '@/components/SectionNavigation'
import Bread from '@/components/Bread'
import CabScreenHeading from '@/components/CabScreenHeading'
import BookNow from '@/components/BookNow'
import RentalCategory from '@/components/RentalCategory'
import CabGallery from '@/components/CabGallery'
import { toyota_corolla_jaipur_local_use, toyota_corolla_outstation_use } from '@/data/Charges'
import CabFareTable from '@/components/CabFairTable'
import CabFeatures from '@/components/CabFeatures'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import { innova_crysta_feat } from '@/data/Features'
import SlickSlider from '@/components/SlickSlider'
import SlickImageModal from '@/components/SlickImageModal'

const Page = () => {
  const [isShowAll, setIsShowAll] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  const [activeIndex, setActiveIndex] = useState(6);

  const images = [
    "/Images/Cabs/innova-crysta-banner-01.jpg",
    "/Images/Cabs/innova-crysta-banner-02.jpg",
    "/Images/Cabs/innova-crysta-banner-03.jpg",
    "/Images/Cabs/innova-crysta-banner-04.jpg",
  ];
  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // navigation
  const sections = [
    { id: "overview", label: "Overview", icon: <IoDocumentText /> },
    { id: "features", label: "Features & Amenities", icon: <IoSettings /> },
    { id: "cab-charges", label: "Cab Charges", icon: <FaMoneyBillWave /> },
  ];

  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Jaipur Cab Rental", link: "/car-rental-jaipur", active: false },
    { label: "SUV Cab Rental", link: "/sedan-car-rental-jaipur", active: false },
    { label: "Toyota Innova Crysta", link: null, active: true },
  ];

  // tempo & bus rentals
  const tempo_and_bus_rentals = [...tempoTravellerRentals, ...busAndCoachRentals, ...luxuryBusRentals]

  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "Toyota Innova Crysta", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="/Images/Cabs/innova-crysta-banner.png" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

      {/*  */}
      <div className="container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-12 mx-lg-3 mx-sm-0 d-flex justify-content-start cab-nav" >
              <SectionNavigation sections={sections} />
            </div>
            <div className="col-lg-9 col-sm-12 d-flex justify-content-center align-items-center flex-column px-lg-3 px-sm-0 py-3">

              {/* section 1 */}
              <div className="cab-insider w-100">
                <SlickImageModal
                  show={showModal}
                  handleClose={handleClose}
                  images={images}
                  currentIndex={currentIndex}
                />
                <SlickSlider settings={{
                  slidesToShow: 2,
                  autoplay: false,
                }}>
                  <div
                    className="col-12 col-sm-12 col-md-8 col-lg-4 py-0 d-flex justify-content-between align-items-stretch rounded-3 overflow-hidden px-1" onClick={() => handleOpenModal(1)}
                  >
                    <Image
                      width={1200}
                      height={500}
                      className="d-block w-100 h-auto rounded-4"
                      style={{ objectFit: "cover" }}
                      src="/Images/Cabs/innova-crysta-banner-01.jpg"
                      alt={`Slide`}
                    />
                  </div>
                  <div
                    className="col-12 col-sm-12 col-md-8 col-lg-4 py-0 d-flex justify-content-between align-items-stretch rounded-3 overflow-hidden px-1" onClick={() => handleOpenModal(2)}
                  >
                    <Image
                      width={1200}
                      height={500}
                      className="d-block w-100 h-auto rounded-4"
                      style={{ objectFit: "cover" }}
                      src="/Images/Cabs/innova-crysta-banner-02.jpg"
                      alt={`Slide`}
                    />
                  </div>
                  <div
                    className="col-12 col-sm-12 col-md-8 col-lg-4 py-0 d-flex justify-content-between align-items-stretch rounded-3 overflow-hidden px-1" onClick={() => handleOpenModal(3)}
                  >
                    <Image
                      width={1200}
                      height={500}
                      className="d-block w-100 h-auto rounded-4"
                      style={{ objectFit: "cover" }}
                      src="/Images/Cabs/innova-crysta-banner-03.jpg"
                      alt={`Slide`}
                    />
                  </div>
                  <div
                    className="col-12 col-sm-12 col-md-8 col-lg-4 py-0 d-flex justify-content-between align-items-stretch rounded-3 overflow-hidden px-1" onClick={() => handleOpenModal(4)}
                  >
                    <Image
                      width={1200}
                      height={500}
                      className="d-block w-100 h-auto rounded-4"
                      style={{ objectFit: "cover" }}
                      src="/Images/Cabs/innova-crysta-banner-04.jpg"
                      alt={`Slide`}
                    />
                  </div>
                </SlickSlider>
              </div>
              <div className="cab-insider w-100 pt-3" id="overview">

                <CabScreenHeading icon={<IoDocumentText />} title='overview' />
                <hr />
                <p className="text-justify">
                  If you looking for spacious & safest car hire in Jaipur with comfort of luxury in lowest rates then Innova Crysta is perfect car for you. Jaipur Taxi Service offer&apos;s luxury car hire service across major cities of Rajasthan. We have had the privilege of providing over a million safe rides to our esteemed customers. Innova Crysta Car Hire service is available for Jaipur City Tour, Outstation Tour, Jaipur to Bikaner, Jaipur to Jaisalmer, Jaipur to Ahmedabad, Jaipur to Mumbai, Jaipur to Surat and all over India. All our Taxi Cars are driven by experienced & soft spoken cab drivers who are medically fit, police verified and 100% professional.
                </p>
              </div>

              {/* section 2 */}
              <div className="cab-insider w-100 pt-3" id='features'>
                <CabScreenHeading icon={<IoSettings />} title='features & amenities' />
                <hr />
                <div className="row mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center">
                  <CabFeatures features={innova_crysta_feat.slice(0, isShowAll ? innova_crysta_feat.length : 6)} />
                  <ToggleShowAllButton showAll={isShowAll} toggleShowAll={handleShow} />
                </div>
              </div>

              {/* section 3 */}
              <div className="cab-insider w-100 pt-3" id='cab-charges'>
                <CabScreenHeading icon={<FaMoneyBillWave />} title='cab charges' />
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
                    <h4 className='text-capitalize fw-bold bg-active-gray w-100 p-3'>Jaipur Local Use</h4>
                    <CabFareTable rows={toyota_corolla_jaipur_local_use.rows} />
                  </div>
                  <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
                    <h4 className='text-capitalize fw-bold bg-active-gray w-100 p-3 '>outstation Use</h4>
                    <CabFareTable rows={toyota_corolla_outstation_use.rows} />
                  </div>
                </div>
              </div>

              {/* section 5 */}
              <div className="cab-insider book-now bg-linear-modal p-0 w-100 rounded-4">
                <BookNow
                  title="Confirm Your Ride"
                  description="Instant Booking for Stress-Free and Reliable Rides"
                  buttonText="Book Now"
                  modalTitle="Toyota Innova Crysta"
                />
              </div>
            </div>

            {/* sticky side content */}
            <div className="col-lg-3 col-sm-12 about-nav gap-0 bg-white py-3">
              <h4 className={`text-capitalize fw-bold web-title bg-linear-modal-02 d-flex mb-0 p-3 text-white rounded-4`}>
                <span className="d-flex align-items-center me-2 fw-bold text-black">
                  <MdCategory />
                </span>
                explore
              </h4>
              <RentalCategory
                icon={<MdDirectionsCarFilled />}
                title="Hatchback Cab Rentals"
                cabRentals={cheapestCabRentals}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={1}
              />
              <RentalCategory
                icon={<MdDirectionsCarFilled />}
                title="Sedan Cab Rentals"
                cabRentals={sedanCabRentals}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={2}
              />
              <RentalCategory
                icon={<FaCarRear />}
                title="SUV Cab Rentals"
                cabRentals={suvCabRentals}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={3}
              />
              <RentalCategory
                icon={<IoCarSportSharp />}
                title="Luxury Cab Rentals"
                cabRentals={luxuryCabRentals}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={4}
              />
              <RentalCategory
                icon={<BiSolidBusSchool />}
                title="Tempo & Bus Rentals"
                cabRentals={tempo_and_bus_rentals}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={5}
              />
            </div>
          </div>
        </div>
      </div>

      {/* featured tours
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
      </div> */}

    </>
  )
}

export default Page