'use client'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, suvCabRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(suvCabRentals, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'suv car rental jaipur',
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
              <BreadcrumbItem active>suv car rental jaipur</BreadcrumbItem>
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
                Welcome to Jaipur Taxi Service, your premier destination for reliable and affordable car rental in Jaipur, Rajasthan. Whether you are a tourist exploring the rich heritage of the Pink City or a local needing a dependable vehicle for your travel needs, we have covered you with our extensive SUV fleet.
              </p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>Why Choose Our SUV Car Rental Services?</h3>
              <hr />
              <p className='text-justify'>
                At Jaipur Taxi Service, we understand the importance of comfort and safety during your travels. Our SUV car rental in Jaipur, Rajasthan, is designed to offer you the best in class experience. Our fleet includes top models like Toyota Innova, Mahindra Scorpio, and Toyota Fortuner, all maintained to the highest standards to ensure a smooth and hassle-free journey.
              </p>
              <p className="text-justify">
                <strong>Perfect for All Your Travel Needs: </strong>
                Our SUVs are perfect for a variety of travel needs. Whether you are planning a family vacation, a business trip, or a weekend getaway, our spacious and well-equipped SUVs provide the ideal solution. You can travel in style and comfort with ample legroom, powerful air conditioning, and modern amenities.</p>
              <p className="text-justify">
                <strong>Customised Rental Packages: </strong>
                Safety is our top priority. All our vehicles undergo regular maintenance checks and are equipped with the latest safety features. Our professional drivers, who have extensive knowledge of Jaipur&apos;s roads and traffic, are trained to follow all traffic regulations, ensuring a safe and secure journey for you and your loved ones.</p>
              <p className="text-justify">
                <strong>Affordability: </strong>
                We offer customised rental packages to suit your specific requirements. Whether you need a vehicle for a few hours, a day, or an extended period, we provide flexible options to cater to your needs. Our competitive pricing ensures you get the best value for your money without compromising quality.
              </p>
              <p className="text-justify">
                <strong>Professional Chauffeur Services: </strong>
                For those who prefer a chauffeured experience, we offer professional and experienced drivers who are well-versed in the local routes and tourist attractions. Our chauffeurs are trained to provide exceptional service, ensuring that your journey is safe and enjoyable.
              </p>
              <p className="text-justify">
                <strong>Easy Booking Process: </strong>
                Booking your SUV with Jaipur Taxi Service is quick and convenient. Visit our website and fill out the booking form, or contact us directly via phone or email. Our customer support team is available 24/7 to assist you with any queries and help you make your reservation.
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
              {CarRentalsByCategory.slice(3, 6).map((pkg, index) => (
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