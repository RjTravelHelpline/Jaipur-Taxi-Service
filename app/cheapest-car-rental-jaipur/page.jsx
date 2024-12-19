'use client'
import Bread from '@/components/Bread'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, cheapestCabRentals } from '@/data/cabRentalData'
import { JaipurAirport } from '@/data/ImagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(cheapestCabRentals, 3);
  const slides = [
    {
      image: JaipurAirport,
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'cheapest car rental jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Jaipur Cab Rental", link: "/car-rental-jaipur", active: false },
    { label: "Cheapest Cab Rental", link: "/cheapest-car-rental-jaipur", active: false },
    { label: "About Jaipur Taxi Service", link: null, active: true },
  ];
  return (
    <>

      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <Bread items={breadcrumbItems} />

      {/* content */}
      <div className="container-fluid py-lg-5 py-sm-4 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>Jaipur Taxi Service offers 24 X 7 cheapest cab hiring services. We put our best efforts into providing our customers with the utmost comfort and satisfaction at the cheapest cab fares in Jaipur. Travellers from around the world come to Jaipur and start their trip to other parts of Rajasthan. Outstation cabs in Jaipur are readily available with us at the lowest prices.</p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>reasons to choosing our Cheapest Cabs in Jaipur</h3>
              <hr />
              <p className='text-justify'>
                <strong>Professional & Experienced Drivers: </strong>Jaipur Taxi Service provides professional drivers who can act as a guide during your trip. A well-experienced driver is very important for a convenient trip, and we fully care about this thing. If your driver knows about the place and the trip plan, he can fully guide you on places to visit, what time to visit, and all other relevant information related to that. The driver who is smart and knowledgeable is always helpful to the customers, so we fully care about it.
              </p>
              <p className="text-justify">
                <strong>Easy Payment Methods: </strong>Payment processing is one of the major concerns for all travellers, and for that, Jaipur Taxi Service provides easy methods of payment. Customers can make the payment online through Debit / Credit Card, Paytm, Phone Pe, Bank Transfers and also in Cash.
              </p>
              <p className="text-justify">
                <strong>Reliability in Jaipur Cab Services: </strong>Travelers who want to avail of cab services in Jaipur need to have reliability and utmost trust in the company. So, we provide very reliable & cheapest cab booking deals where you can get the best choice of cab hire. Jaipur Taxi Service has earned the trust of its customers. Customers can book a cab in Jaipur fully assured of travelling with us also on time and safely & securely.
              </p>
              <p className="text-justify">
                <strong>No Hide & Seek in Fare: </strong> It&apos;s very important to have 100% transparency between travellers & cab service providers - for a hassle-free, smooth journey. At the time of Cab Booking, we explain all terms, conditions, inclusions & exclusions to our customers. In the case of any further clarification regarding a cab booking service, customers can call Jaipur Taxi Service 24 x 7 No. +91 9166-555-888 or mail us.</p>
              <p className="text-justify">
                <strong>Resolving Customer Issues: </strong>When booking a cab in Jaipur, we are just a call away from resolving any type of issue regarding your travel that you can face before or after the trip.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* packges */}
      <div className="container-fluid bg-linear-modal">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-0">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Cheapest cab deals </h3>
              <p className='text-center text-capitalize'>Hassle-Free chepest Cab Services by jaipur taxi</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap packages rental-container px-0">
              <RentalPackages rentals={displayedItems} />
            </div>
            <ToggleShowAllButton showAll={showAll} toggleShowAll={toggleShowAll} />
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
              {CarRentalsByCategory.slice(1, 4).map((pkg, index) => (
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