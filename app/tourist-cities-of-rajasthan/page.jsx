import HeroBanner from '@/components/HeroBanner'
import { PlacesToVisitInRajasthan } from '@/data/TourPackagesData'
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
      heading: 'tourist cities of rajasthan',
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
              <BreadcrumbItem href="/tour-packages-rajasthan">rajasthan tour packages</BreadcrumbItem>
              <BreadcrumbItem active>tourist cities of rajasthan</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard">
            {PlacesToVisitInRajasthan.map((pkg, index) => (
              <div
                key={index}
                className="col-12 col-sm-12 col-md-6 col-lg-4 my-2 d-flex align-items-center px-2"
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
                      <p className="text-tertary mb-0 text-center fw-bold text-uppercase">
                        city tour
                      </p>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page