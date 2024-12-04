import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import { sedanCabRentals } from '@/data/cabRentalData'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'sedan car rental jaipur',
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
              <BreadcrumbItem active>sedan car rental jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center packages rental-container">
            <RentalPackages rentals={sedanCabRentals} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page