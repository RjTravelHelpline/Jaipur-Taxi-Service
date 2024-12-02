import HeroBanner from '@/components/HeroBanner'
import TourPackages from '@/components/TourPackages'
import { RajasthanTourByCars } from '@/data/TourPackagesData'
import React from 'react'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'rajasthan tour by car',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      <HeroBanner slides={slides} />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center packages">
            {RajasthanTourByCars.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} showPrice={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page