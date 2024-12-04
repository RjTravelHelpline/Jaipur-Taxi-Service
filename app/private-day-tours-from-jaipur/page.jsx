import HeroBanner from '@/components/HeroBanner'
import TourPackages from '@/components/TourPackages'
import { JaipurDayTours } from '@/data/TourPackagesData'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'private day tours jaipur',
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
              <BreadcrumbItem active>private day tours from jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center packages">
            {JaipurDayTours.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} showPrice={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page