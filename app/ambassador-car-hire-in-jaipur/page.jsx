'use client'
import HeroBanner from '@/components/HeroBanner'
import { busAndCoachRentals, cheapestCabRentals, luxuryBusRentals, luxuryCabRentals, sedanCabRentals, suvCabRentals, tempoTravellerRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { BiSolidBusSchool } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import { FaCarRear } from 'react-icons/fa6'
import { MdDirectionsCarFilled, MdOutlineArrowOutward } from 'react-icons/md'
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

const Page = () => {
  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  const [activeIndex, setActiveIndex] = useState(6);

  const images = [
    "",
  ];

  // navigation
  const sections = [
    { id: "overview", label: "Overview", icon: <IoDocumentText /> },
    { id: "features", label: "Features & Amenities", icon: <IoSettings /> },
    { id: "cab-charges", label: "Cab Charges", icon: <FaMoneyBillWave /> },
    { id: "gallery", label: "Gallery", icon: <BsImages /> },
  ];

  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Jaipur Cab Rental", link: "/car-rental-jaipur", active: false },
    { label: "Sedan Cab Rental", link: "/sedan-car-rental-jaipur", active: false },
    { label: "ambassador", link: null, active: true },
  ];

  // tempo & bus rentals
  const tempo_and_bus_rentals = [...tempoTravellerRentals, ...busAndCoachRentals, ...luxuryBusRentals]

  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "ambassador", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

      {/*  */}
      <div className="container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-lg-9 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-lg-3 px-sm-0">

              {/* section 1 */}
              <div className="cab-insider w-100 py-3" id="overview">
                <CabScreenHeading icon={<IoDocumentText />} title='overview' />
                <hr />
              </div>

              {/* section 2 */}
              <div className="cab-insider w-100 py-3" id='features'>
                <CabScreenHeading icon={<IoSettings />} title='features & amenities' />
                <hr />
                <div className="row mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center">
                  <CabFeatures features={innova_crysta_feat.slice(0, isShowAll ? innova_crysta_feat.length : 6)} />
                  <ToggleShowAllButton showAll={isShowAll} toggleShowAll={handleShow} />
                </div>
              </div>

              {/* section 3 */}
              <div className="cab-insider w-100 py-3" id='cab-charges'>
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

              {/* section 4 */}
              <div className="cab-insider w-100 py-3" id='gallery'>
                <CabScreenHeading icon={<BsImages />} title='cab gallery' />
                <hr />
                <CabGallery images={images} />
              </div>

              {/* section 5 */}
              <div className="cab-insider bg-black book-now w-100 p-2 rounded-4">
                <BookNow
                  title="Confirm Your Ride"
                  description="Instant Booking for Stress-Free and Reliable Rides"
                  buttonText="Book Now"
                  modalTitle="Toyota Innova Crysta"
                />
              </div>
            </div>

            {/* sticky side content */}
            <div className="col-lg-3 col-sm-12 py-4 about-nav bg-white px-1">
              <RentalCategory
                icon={<FaLink className='me-2 text-black' />}
                title="Quick Links"
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={6}
                isLinksSection={true}
                otherSection={<SectionNavigation
                  sections={sections}
                />}
              />
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

    </>
  )
}

export default Page