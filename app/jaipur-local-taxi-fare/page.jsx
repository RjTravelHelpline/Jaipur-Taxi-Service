'use client'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { JaipurLocalTaxiTours, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Packages = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(JaipurLocalTaxiTours, 3);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'jaipur local taxi fares',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid">
        <div className="container">
          <div className="row px-2">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem active>jaipur local taxi fare</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <h4 className="text-center text-capitalize mb-0">
                Seamless and Convenient Jaipur Local Taxi Tours for Every Traveler
              </h4>
              <hr />
              <p className='text-justify'>By offering an unforgettable amalgamation of the past with the present and of history with modernity, the city of Jaipur has become a place that every traveller must visit at least once in his or her lifetime. Jaipur Taxi Service offers Car Hire Service for Jaipur Airport Pickup & Drop, Cab Hire Service from Jaipur Railway Station and Car Rental Service for Jaipur Local Use for 04 Hours, 08 Hours & 12 Hours. We offer Cab Hire Service for Jaipur at Guaranteed lowest prices.</p>
              <p className='text-justify'>
                <strong>Cab Hire Service from Jaipur Airport: </strong>
                Jaipur International Airport taxi can be difficult to find at the time of your arrival or at the last moment from your place to Jaipur International Airport, so reserving a taxi for Jaipur airport in advance means your airport transfer in Jaipur will go smoothly. When you arrive at the Jaipur airport, our pre-allotted taxi with a driver will be ready to take you to your destination. We allow you to save time and avoid queues when arriving at or travelling to Jaipur Airport.
              </p>
              <p className='text-justify'>
                <strong>Cab Hire Service from Jaipur Railway Station: </strong>
                Suppose you&apos;re looking for a cab hire service to or from Jaipur Railway Station. Jaipur Taxi Service can help to get you started around. To book a pickup and drop off to Jaipur Railway Station or Taxi Service from Jaipur Railway Station to Khatu Shyam Ji, Salasar, Jhunjhunu & other cities of Rajasthan.
              </p>
              <p className='text-justify'>
                <strong>Cab Hire Service for Jaipur Local Use: </strong>
                If you are in Jaipur and looking for Cab Hire Service for roaming in Jaipur for business visits, shopping in the old city of Jaipur, sightseeing tour, leisure trip, late night party, wedding or any other purpose. YOU ARE IN THE RIGHT PLACE. Jaipur Taxi Service offers Cab Hire Service in Jaipur on an hourly basis at the lowest price with well-mannered, police verified and soft-spoken drivers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>local taxi use packages</h3>
              <p className='text-center text-capitalize'>Tailored Local Tours to Explore Jaipur&apos;s Iconic Attractions with Comfort</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {displayedItems.map((pkg, index) => (
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
                        <h3 className="w-100 text-capitalize mx-1 text-center">
                          {pkg.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <ToggleShowAllButton showAll={showAll} toggleShowAll={toggleShowAll} />
          </div>
        </div>
      </div>

      {/* featured tours */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>featured tour packages</h3>
              <p className='text-center text-capitalize'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {TourPackagesByCategory.slice(0, 3).map((pkg, index) => (
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

export default Packages