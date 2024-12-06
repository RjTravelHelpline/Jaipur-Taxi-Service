'use client'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory } from '@/data/cabRentalData'
import { TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'
const HomeBanner01 = '/Images/Banners/home-taxi-02.jpg';

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(CarRentalsByCategory, 6);

  const slides = [
    {
      image: HomeBanner01,
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Jaipur Cab Rental Service',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* Breadcrumb  */}
      <div className="container-fluid bg-white bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem active>car rental jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-lg-5 py-sm-4 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center mb-3'>overview</h3>
              {/* <hr /> */}
              <h4 className='mb-0 text-center text-capitalize'>Your ultimate choice for reliable Cab rental Services</h4>
              <hr />
              <p className='text-justify'>Welcome to Jaipur Taxi Service, your premier destination for Cab Rental in Jaipur. Whether you&apos;re a tourist exploring the vibrant Pink City or a local needing reliable transportation, we offer the perfect cab rental solutions tailored to your needs, ensuring a convenient and stress-free travel experience.</p>
              <p className='text-justify'>
                Professional drivers enhance the travel experience, providing punctual and courteous service while being well-versed with local routes. Jaipur Taxi Service&apos;s transparent pricing policy ensures no hidden charges, making it easier for travelers to plan their budgets. The user-friendly online booking system simplifies the process, allowing customers to book rides conveniently from their devices.
              </p>
              <p className="text-justify">
                Customer satisfaction is paramount, evidenced by their 24/7 customer support, which addresses queries and concerns promptly. This commitment to service quality has garnered positive reviews and repeat customers, solidifying its reputation as a trustworthy taxi service in Jaipur.
              </p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center mb-3'>why choose our <span className="text-tertary">cab rentals</span>?</h3>
              <h4 className='text-center text-capitalize mb-0'>we offer the perfect cab rental solutions tailored to your needs</h4>
              <hr />
              <p className='text-justify'>At Jaipur Taxi Service, we understand that every journey is unique. Our fleet includes a wide variety of vehicles, from budget-friendly hatchbacks to luxurious sedans and spacious SUVs. This variety ensures you find the perfect cab for any occasion, making you feel catered to and special.</p>
              <p className='text-justify'>
                Our cab rental service in Jaipur is designed for comfort and convenience. All our vehicles are well-maintained and equipped with modern amenities, ensuring a pleasant travel experience. We also offer transparent pricing with no hidden charges, making your journey hassle-free and cost-effective.
              </p>
              <p className='text-justify'>
                <strong>Experienced and Professional Drivers:</strong> Safety and reliability are our top priorities. Our drivers are not only experienced and knowledgeable about Jaipur&apos;s roads and landmarks but also courteous and professional. They ensure timely pick-up and drop-off, allowing you to focus on enjoying your trip without any worries, making you feel secure and in good hands.
              </p>
              <p className='text-justify'>
                <strong>Explore Jaipur with Ease:</strong> With our cab rental service, exploring Jaipur&apos;s iconic attractions, such as the Amber Fort, City Palace, Hawa Mahal, and local markets, becomes effortless. Whether planning a city tour or a trip to nearby destinations, we provide a range of flexible rental options, including hourly rentals and full-day packages, to suit your specific travel needs.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>our rental deals</h3>
              <p className='text-center text-capitalize'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {displayedItems.map((pkg, index) => (
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
            <ToggleShowAllButton toggleShowAll={toggleShowAll} expandText='view all' collapseText='show less' showAll={showAll} />
          </div>
        </div>
      </div>

      {/* featured tours */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>featured tour packages</h3>
              <p className='text-center text-capitalize'>Curated tours designed to suit every travel need and budget</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
              {TourPackagesByCategory.slice(0, 3).map((pkg, index) => (
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
              <Link href='/tour-packages-rajasthan' className='explore'>
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