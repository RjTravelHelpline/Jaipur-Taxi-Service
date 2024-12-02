import HeroBanner from '@/components/HeroBanner'
import { JaipurLocalTaxiTours } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
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
      <HeroBanner slides={slides} />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard">
            {JaipurLocalTaxiTours.map((pkg, index) => (
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
        </div>
      </div>
    </>
  )
}

export default page