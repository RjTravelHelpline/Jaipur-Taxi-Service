import RentalPackages from '@/components/RentalPackages'
import { luxuryBusRentals } from '@/data/cabRentalData'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-10 col-sm-12 px-2">
              <div className="insider rounded-3 px-3">
                <Breadcrumb>
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
                  <BreadcrumbItem active>luxury bus hire service in jaipur</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <div className="insider rounded-3 p-3">
                <h1 className='text-capitalize fw-bold text-center'>luxury bus rentals in jaipur</h1>
                <hr />
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center packages rental-container">
            <RentalPackages rentals={luxuryBusRentals} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page