import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import { busAndCoachRentals } from '@/data/cabRentalData'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Jaipur Bus Rental',
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
              <BreadcrumbItem active>bus rental service in jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center packages rental-container">
            <RentalPackages rentals={busAndCoachRentals} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page