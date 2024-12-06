'use client'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, luxuryBusRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(luxuryBusRentals, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'luxury Bus Rental service jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid bg-white bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem active>luxury Bus Rental service jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>
                Jaipur Bus & Coach Hire Service offers Volvo Bus & Scania Bus on hire from Jaipur, Udaipur, Jodhpur, Delhi & Agra. When you approach us for Volvo, Scania or other Super Luxury bus hire service for your trip, you will find not only our driver and helper of good nature but the interiors of the bus is also comfortable and homely. We are a leading Luxury bus & coach rental agency in Jaipur, Rajasthan. We are committed to providing you best condition bus & coach on hire for City Tours, Rajasthan Tour, Weddings, Conferences, Events, Outstation trips, Corporate movements & shootings.
              </p>
              <p className='text-justify'>
                We have Tempo Traveller to Volvo & Scania buses with a seating capacity of 8 Seater to 45 Seater. All our coaches are with pushback seats & air-conditioned. You can utilize our services of corporate bus hire, wedding bus hire, luxury bus on rent in Jaipur for outstation, Volvo bus hire for holidays, tourist bus hire for Rajasthan tour and events with minimum charges as compared to others.
              </p>
              <p className='text-justify'>
                Bookings and other queries for luxury bus hire service in Jaipur can be made by contacting Mr.Harsh Vardhan at +91 9166-555-888, or you can also fill out the contact form given on the site.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center packages rental-container">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>jaipur luxury bus rental deals</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 packages rental-container">
              <RentalPackages rentals={displayedItems} />
            </div>
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>explore rentals by category</h3>
              <p className='text-center text-capitalize'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {CarRentalsByCategory.slice(0, 3).reverse().map((pkg, index) => (
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
            <div className="col-12 d-flex w-100 align-items-center gap-2 mt-3">
              <hr />
              <Link href='/car-rental-jaipur' className='explore'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page