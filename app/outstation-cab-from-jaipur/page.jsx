"use client"
import HeroBanner from '@/components/HeroBanner'
import { OutStationTourPackages, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdExpandLess, MdExpandMore, MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'outstation cab from jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      <HeroBanner slides={slides} />
      <div className="container-fluid">
        <div className="container">
          <div className="row px-2">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem active>outstation cab from jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard">
            {OutStationTourPackages.map((pkg, index) => (
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
        </div>
      </div>
      <div className="container-fluid py-4" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard px-2">
            <div className="insider rounded-3 p-3">
              <h3 className='text-capitalize fw-bold text-center'>Featured Tour Packages</h3>
              <p className='mb-2 text-center'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">
              {TourPackagesByCategory.slice(3).map((pkg, index) => (
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
          </div>
        </div>
      </div>
    </>
  )
}

export default page

