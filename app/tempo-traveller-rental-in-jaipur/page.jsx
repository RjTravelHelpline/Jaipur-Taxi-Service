'use client'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, tempoTravellerRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(tempoTravellerRentals, 3);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'tempo traveller rental jaipur',
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
              <BreadcrumbItem active>tempo traveller rental in jaipur</BreadcrumbItem>
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
                Tempo Travellers is a special travelling alternate for groups of people having 8 to 20. The main reason is that we usually attempt to find comfort and more leg space when we travel. Wouldn&apos;t you want to make your footrest by hiring a tempo traveller in Jaipur Rajasthan? Jaipur Taxi Service offer&apos;s 8 Seater Maharaja Seats Tempo Traveller, 10 Seater Luxury Tempo Traveller, 12 Seater Tempo Traveller, 15 Seater Tempo Traveller & 20 Seater Tempo traveller on rent for Jaipur Local Use, Outstation Trips & Rajasthan Tours. Our service makes your Journey comfortable and simple.
              </p>
              <p className='text-justify'>
                We provide Tempo Traveller on Rent from Jaipur, Jodhpur, Jaisalmer, Bikaner, Udaipur & Ajmer. All our tempo travellers are holding all India permits issued by Transport Department and authorized to travel from Jaipur to Manali, Jaipur to Shimla, Jaipur to Nainital, Jaipur to Rishikesh, Jaipur to Srinagar, Jaipur to Vaishno Devi, Jaipur to Mumbai, Jaipur to Goa, Jaipur to Dwarka, Jaipur to Ahmedabad, Jaipur to Jaisalmer, Jaipur to Mount Abu, Jaipur to Chardham Yatra, Jaipur to Ujjain, Jaipur to Mathura, Jaipur to Ayodhya and all over India.
              </p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>6 REASONS - Which make us Special While finding a Cheapest Tempo Traveller in Jaipur ?</h3>
              <hr />
              <p className='text-justify'>
                Jaipur Taxi Service offers 24 X 7 Tempo Traveller Rental Service at the lowest fares in Jaipur! Below are the reasons which make us Special While finding a Tempo Traveller Rental Service in Jaipur Rajasthan.

              </p>
              <p className="text-justify">
                <strong>Professional & Experienced Drivers: </strong>
                Jaipur Tempo Traveller Rental Service provides professional drivers who can act as a guide during your trip. A well-experienced driver is essential for a convenient journey, and we fully care about this. If your driver knows about the place and the trip plan, he can thoroughly guide you on places to visit, what time to see, and all other relevant information. The intelligent driver is always helpful to the customers, so we fully care about it.</p>
              <p className="text-justify">
                <strong>Affordable & Lowest Fare Deals: </strong>
                Tempo Traveller service in jaipur can be booked at the cheapest and affordable rates from Jaipur Taxi Service. We provide 8 Seater, 10 Seater, 12 Seater, 15 Seater & 20 Seater Tempo Traveller on Rent, customers can book as per their requirements easily from us. Tempo Traveller fares are depends on the journey type, we always try to provide competitive and most affordable rates for hiring a Tempo Traveller.</p>
              <p className="text-justify">
                <strong>Easy Payment Methods: </strong>
                Payment processing is one of the major concerns for all travelers and for that Jaipur Tempo Traveller Rental Service provides easy methods of payment. Customers can make the payment online through Debit / Credit Card, Paytm, Phone Pe, Bank Transfers and also in Cash.
              </p>
              <p className="text-justify">
                <strong>Reliability in Tempo Traveller Rental Services: </strong>
                Travelers who want to book a tempo traveller in jaipur need to have reliability and utmost trust in the company. So, we provide very reliable & cheapest tempo traveller service in jaipur rajasthan.
              </p>
              <p className="text-justify">
                <strong>No Hide & Seek in Fare: </strong>
                It’s very important to have 100% transparency between travellers & tempo traveller service provider - for a hassle-free smooth journey. At the time of tempo traveller booking, we explain all terms, conditions, inclusions & exclusions to our customer. In the case of any further clarification regar
              </p>
              <p className="text-justify">
                <strong>Resolving Customer Issues: </strong>
                When booking a Tempo Traveller in jaipur, we are just a call away for resolving any type of issue regarding your travel which one can face before or after the trip.
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
              <h3 className='text-capitalize fw-bold text-center web-title'>tempo traveller rental deals</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 packages rental-container">
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
              {CarRentalsByCategory.slice(-3).reverse().map((pkg, index) => (
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