import HeroBanner from '@/components/HeroBanner'
import PackagesSlider from '@/components/PackagesSlider'
import { JaipurDayTours, JaipurLocalTaxiTours, JaipurSightSeeingTours, OneWayTaxiTours, OutStationTourPackages, RajasthanTourByCars, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'rajasthan tour packages',
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
              <BreadcrumbItem active>Rajasthan Tour Packages</BreadcrumbItem>
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
                Comprehensive and Affordable Car Rental Services for Exploring Rajasthan
              </h4>
              <hr />
              <p className='text-justify'>Jaipur Car Rental Service provides a large number of tour packages at the lowest price. We provide affordable local sightseeing tours and outstation trips of Rajasthan with guides. We offer day tours from Jaipur to Ajmer, Pushkar, Bhangarh Fort, Abhaneri Stepwell and Ranthambhore National Park. We also provide complete Rajasthan tour covering all the forts of Rajasthan, Palaces, Lakes, Bawdi&apos;s, village tours and thar desert of Jaisalmer.</p>
              <p className='text-justify'>
                Professional drivers enhance the travel experience, providing punctual and courteous service while being well-versed with local routes. Jaipur Taxi Service&apos;s transparent pricing policy ensures no hidden charges, making it easier for travelers to plan their budgets. The user-friendly online booking system simplifies the process, allowing customers to book rides conveniently from their devices.
              </p>
              <p className="text-justify">
                Customer satisfaction is paramount, evidenced by their 24/7 customer support, which addresses queries and concerns promptly. This commitment to service quality has garnered positive reviews and repeat customers, solidifying its reputation as a trustworthy taxi service in Jaipur.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* tour pakages category */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>packages we offer</h3>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap rounded-4 py-2">
              {TourPackagesByCategory.map((pkg, index) => (
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
                      <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                        <h3 className="w-100 text-capitalize mx-1 web-title">
                          {pkg.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* jaipur sightseeing tours */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>jaipur sightseeing tours</h3>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <PackagesSlider packages={JaipurSightSeeingTours} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* day tours from jaipur */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Day Tours From Jaipur</h3>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <PackagesSlider packages={JaipurDayTours} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* rajasthan tour by car rental */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>rajasthan tour by car</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>

            </div>
            <PackagesSlider packages={RajasthanTourByCars} />
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/one-way-car-rental-jaipur' className='explore'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* one way car rental */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>one way car rentals</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>

            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">
              {OneWayTaxiTours.slice(3).map((pkg, index) => (
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
                        <h3 className="w-100 text-capitalize mx-1 web-title">
                          {pkg.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/one-way-car-rental-jaipur' className='explore'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* outstation cab rentals */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Outstation Cab from Jaipur</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">
              {OutStationTourPackages.slice(0, 3).map((pkg, index) => (
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
                        <h3 className="w-100 text-capitalize mx-1 web-title">
                          {pkg.title}
                        </h3>
                        <hr />
                        <p className="price px-2 text-capitalize w-auto">
                          starting from ₹{pkg.price}/-
                        </p>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/one-way-car-rental-jaipur' className='explore'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* jaipur taxi for locals */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Jaipur Local Taxi Fares</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>

            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">
              {JaipurLocalTaxiTours.slice(0, 3).map((pkg, index) => (
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
                        <h3 className="w-100 text-capitalize mx-1 text-center web-title">
                          {pkg.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/one-way-car-rental-jaipur' className='explore'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page