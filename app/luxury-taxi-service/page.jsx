'use client'
import Bread from '@/components/Bread'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, luxuryCabRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(luxuryCabRentals, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'luxury car rental jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Jaipur Cab Rental", link: "/car-rental-jaipur", active: false },
    { label: "Luxury Cab Rental", link: null, active: true },
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
              <p className='text-justify'>
                Hire Luxury Car in Jaipur from Jaipur Taxi Service to style up your moving game! We are the one-stop luxury car rental provider in Jaipur, Rajasthan, with an impressive fleet of cars that define luxury and sophistication. We provide the best-maintained cars with well-trained professional chauffeurs.
              </p>
              <hr />
              <p className="text-justify">
                Our luxury car on hire in Jaipur is for any occasion that requires a car. It could be for your parent&apos;s wedding anniversary, an award show or a social event. Your luxury rental car should match your style & status.
              </p>
              <p className='text-justify'>
                <strong>Luxury Car Hire for Wedding:</strong> Enjoy a breathtaking experience in your dream luxury car! It is every couple&apos;s dream to have a perfect wedding. Whatever type of wedding or reception you are planning, we are sure to have the right luxury car rental for the wedding to suit. With our wide range of big cars that are synonyms with style and comfort, our comprehensive services, and excellent customer service, you are definitely going to impress your guests.
              </p>
              <p className="text-justify">
                <strong>Car Hire Service for Corporate:</strong> Our luxury car rental service in Jaipur is totally dedicated to the corporate sector. When you hire us, we represent your company. We will do our best to make a lasting impression on your clients.</p>
              <p className="text-justify">
                Perhaps your clients or senior executives are visiting Jaipur Rajasthan soon. Allow Jaipur Taxi Service to collect them from the airport and take them to their destination. They are sure to enjoy the first-class experience with the luxury car hire service.
              </p>
              <p className="text-justify">
                We assure you that all our luxury cars have stunning interiors and exteriors. They are spacious and are built with the latest technology and safety features to make your ride absolutely flawless. We guarantee highly maintained cars, reliability and professionalism. We offer a price that you may have unheard of when it comes to luxury.
              </p>
              <p className="text-justify">
                Hire a luxury car in Jaipur from Jaipur Taxi Service and enjoy the freedom to pick the grandest of brands available in this segment. Following are some most popular luxury cars:
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
              <h3 className='text-capitalize fw-bold text-center web-title'>SUV cab rental deals</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort</p>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center flex-wrap px-0 packages rental-container">
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
              {CarRentalsByCategory.slice(4).map((pkg, index) => (
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