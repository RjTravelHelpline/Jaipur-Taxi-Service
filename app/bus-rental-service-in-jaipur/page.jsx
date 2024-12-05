"use client"
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { busAndCoachRentals, CarRentalsByCategory } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(busAndCoachRentals, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Bus Rental service jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid">
        <div className="container">
          <div className="row px-2">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem active>bus rental service in jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>
                With Jaipur Bus & Coach Rental Service, you will find many Luxury AC and Non-AC Buses and AC Luxury Coach. You can opt for the bus rental service from Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner, Sawai Madhopur, Delhi & Agra to reach your desired destination. We offer a broad category of buses loaded with different seating capacities and features. Besides, we offer luxurious buses with air suspension so every guest can make the most of their journey at a competitive price. You can hire a bus according to your schedule and requirements.
              </p>
              <p className='text-justify'>
                Jaipur Bus & Coach Rental Service learn about and understand the requirement of our customers and allow them to make the most of our bus & coach hire services. We take immense pride in serving our esteemed customers with 18 Seater, 27 Seater, 35 Seater, 45 Seater & 52 Seater AC & Non AC buses/coaches. Not only are they maintained in a proper condition, but they are also driven by a skilled driver with relevant experience, with the conductor taking good care of each passenger&apos;s safety.
              </p>
              <p className='text-justify'>
                Our bus rental services are a perfect option for guests looking for an outstation trip from Jaipur and other cities of Rajasthan like Udaipur, Jodhpur, Jaisalmer, Bikaner, Ajmer, Sawai Madhopur, Agra and so on. Those who need local transport for a group of people in Jaipur or need to use superior quality bus rental services like weddings, engagements, conferences etc. or for a sacred tour to Khatu Shyam Ji, Haridwar, Vaishno Devi, Chardham, Varanasi and other religious places.
              </p>
              <p className='text-justify'>
                For booking and other queries for bus hire or AC Coach rental service in Jaipur, contact Mr.Harsh Vardhan at +91 9166-555-888, or you can also fill out the contact form given on the site. Because of dynamic prices of petrol/diesel/fuel and also depending on market conditions, Coach hire price may vary slightly. For any other models which are not listed here, Please feel free to get in touch with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center packages rental-container">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>jaipur bus rental deals</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 packages rental-container">
              <RentalPackages
                rentals={displayedItems}
              />
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
              <h3 className='text-capitalize fw-bold text-center web-title'>explore rentals by-lg 3 p-sm-2ategory</h3>
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