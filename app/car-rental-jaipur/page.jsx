import HeroBanner from '@/components/HeroBanner'
import { CarRentalsByCategory } from '@/data/cabRentalData'
import { TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'
const HomeBanner01 = '/Images/Cabs/cab-rental-banner.jpg';

const page = () => {
  const slides = [
    {
      image: HomeBanner01,
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Jaipur Cab Rental Service',
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
              <BreadcrumbItem active>car rental jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row justify-content-center align-items-center  py-4">
            <h3 className='text-capitalize fw-bold'>our taxi services</h3>
            <p className='mb-2'>Curated tours designed to suit every travel need and budget</p>
            <hr />
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {CarRentalsByCategory.slice(0, 6).map((pkg, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-4 my-1 d-flex align-items-center pe-2"
                >
                  <Link href={pkg.navigate} className="text-capitalize">
                    <Card className="card bg-transparent rounded-4">
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
      <div className="container-fluid py-4 bg-tertary-down" >
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard py-4">
            <h3 className='text-capitalize fw-bold'>featured tour packages</h3>
            <p className='mb-2'>Curated tours designed to suit every travel need and budget</p>
            <hr />
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0">
              {TourPackagesByCategory.slice(3).map((pkg, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-4 my-1 d-flex align-items-center pe-2"
                >
                  <Link href={pkg.navigate} className="text-capitalize">
                    <Card className="card bg-transparent rounded-4">
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