import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import { CarRentalsByCategory, cheapestCabRentals } from '@/data/cabRentalData'
import { JaipurAirport } from '@/data/ImagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
  const slides = [
    {
      image: JaipurAirport,
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'cheapest car rental jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      <HeroBanner slides={slides} />
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-0">
            <h3 className='text-capitalize fw-bold'>Deals</h3>
            <p className='text-capitalize'>experience our excellent services at the lowest Car Hire</p>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap packages rental-container px-0">
              <RentalPackages rentals={cheapestCabRentals} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid [y-5 bg-tertary-down">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-0">
            <h3 className='text-capitalize fw-bold'>what for?</h3>
            <p className='text-capitalize'>looking for something else</p>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {CarRentalsByCategory.slice(0, 3).map((pkg, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-4 my-1 d-flex align-items-center px-2"
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
            <div className="col-12 d-flex w-100 align-items-center gap-2 mt-3">
              <hr />
              <Link href='/cheapest-car-rental-jaipur' className='explore'>
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