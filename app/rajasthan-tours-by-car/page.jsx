'use client'
import Bread from '@/components/Bread'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import TourPackages from '@/components/TourPackages'
import useShowAllToggle from '@/components/useShowAllToggle'
import { RajasthanTourByCars, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(RajasthanTourByCars, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'rajasthan tour by car',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "rajasthan tour packages", link: "/tour-packages-rajasthan", active: false },
    { label: "rajasthan tours by car", link: null, active: true },
  ];
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <Bread items={breadcrumbItems} />

      {/* content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <h4 className="text-center text-capitalize mb-0">
                Affordable and Comfortable Rajasthan Tour by Car with Jaipur Taxi Service
              </h4>
              <hr />
              <p className='text-justify'>Jaipur Taxi Service is a dominating provider of Taxi for Rajasthan tour, Car Rentals for Rajasthan tours, Rajasthan Tour by Private Cab, taxi packages, tourist cab packages, sedan, SUV & luxury car rental services at the most economical rates in Rajasthan. We take every assignment with the utmost responsibility to ensure you a tourist experience far beyond your expectations. We have completely imbibed the pleasure of holiday travel and ensure a hassle-free journey in a well-maintained vehicle geared by a licensed professional driver. We follow a clear-cut communication pattern to make our customers aware of the rates and what they can expect from the trip. Book a Car Rental for Rajasthan Tour from Jaipur Taxi Service to utilize every moment of your holiday.</p>
              <p className='text-justify'>
                We have carefully designed the packages to connect maximum tourist destinations within the shortest period of time. We also extend our services to customized packages as well. Apart from taking care of the travel requirements, we are the happiest to manage your tour as a whole. Stay relaxed and enjoy your holidays in Rajputana.
              </p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>Find the Best Tour Itineraries and Taxi for Rajasthan Tour
              </h3>
              <hr />
              <p className='text-justify'>
                If you wish to explore places by car or coach, Jaipur Taxi Service can assist you with the most affordable taxi packages. We offer Taxi for Rajasthan tour, economy and luxury cars to travel around the country with expert drivers to make your trip comfortable. You’ll get the Rajasthan tour by private cab with best packages at competitive rates here.
              </p>
              <p className='text-justify'>
                Our top taxi packages for Rajasthan will transform your travel dreams into reality by offering hassle-free pick and drop, n number of stops in between the travel and, of course, guidance from our experienced tour taxi drivers throughout the travel. Each part of Rajasthan has unique traditions and diverse cultures. Thus it tops the list of every enthusiastic traveller. We know the needs of our guests, thus offering highly occupied cars and coaches with fixed and customized tour taxi packages.
              </p>
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>Customized Rajasthan Taxi Tour Packages
              </h3>
              <hr />
              <p className='text-justify'>
                The specialty of our tour and taxi packages is the quality we maintain and the hospitality we provide for our guests. The team just requires the needs, preferences and expected price range to fix the custom tour taxi package for you. You just sit back and enjoy your holidays while we take care of your further needs all throughout your trip to Rajasthan.
              </p>
              <p className='text-justify'>
                Professional tour taxi drivers will drive you to the most beautiful places in Rajasthan through the most happening routes to reach the destination. You can choose the taxi model at your convenience, or let us advise on which car will suit your holiday needs.
              </p>
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>Type of Tour Taxi Packages
              </h3>
              <hr />
              <p className='text-justify'>
                We offer varied options to our guests, which accompanies vehicle model according to the route to be followed. The possibilities include cultural, honeymoon, business, or special wildlife tours. Our vehicles follow a quality assurance strategy, and you will get a tidy and conditioned vehicle experience as you start the journey. Our professional team always strives to maintain the quality while we suggest any Rajasthan Tour Car packages to our guests. That is why we are one of the best and most affordable taxi booking services in Rajasthan. Contact us at +91 9166-555-888 & and experience the most affordable and convenient Rajasthan tourist taxi services and the best itineraries to unveil your holidays in Rajasthan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Popular Tour Packages by Cab</h3>
              <p className='text-center text-capitalize'>Curated Journeys Across Rajasthan for a Comfortable and Unforgettable Experience</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 packages">
              {displayedItems.map((pkg, index) => (
                <TourPackages key={index} pkg={pkg} showPrice={false} />
              ))}
            </div>
            <ToggleShowAllButton showAll={showAll} toggleShowAll={toggleShowAll} />
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
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page