import PackagesSlider from '@/components/PackagesSlider'
import { JaipurDayTours, JaipurLocalTaxiTours, JaipurSightSeeingTours, OneWayTaxiTours, OutStationTourPackages, RajasthanTourByCars, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages px-2">
            <div className="col-12 col-lg-10 col-sm-12 px-2">
              <div className="insider rounded-3 p-3">
                <h1 className='text-capitalize fw-bold text-center'>rajasthan tour packages</h1>
                <hr />
              </div>
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
                        <h3 className="w-100 text-capitalize mx-1">
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
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>jaipur sightseeing tours</h3>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
              <hr />
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
      <div className="container-fluid" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>Day Tours From Jaipur</h3>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
              <hr />
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

      {/* one way car rental */}
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>rajasthan tour by car</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>
              <hr />
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
      <div className="container-fluid" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>one way car rentals</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>
              <hr />
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
                        <h3 className="w-100 text-capitalize mx-1">
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
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>Outstation Cab from Jaipur</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>
              <hr />
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
                        <h3 className="w-100 text-capitalize mx-1">
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
      <div className="container-fluid" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h3 className='text-capitalize fw-bold text-center'>Jaipur Local Taxi Fares</h3>
              <p className='text-center text-capitalize'>experience our excellent services at the lowest Car Hire</p>
              <hr />
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
                        <h3 className="w-100 text-capitalize mx-1 text-center">
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