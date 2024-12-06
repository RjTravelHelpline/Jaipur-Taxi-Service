'use client'
import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { CarRentalsByCategory, sedanCabRentals } from '@/data/cabRentalData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(sedanCabRentals, 3);
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
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid bg-white bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem active>sedan car rental jaipur</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-lg-5 py-sm-4 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>
                Welcome to Jaipur Taxi Service, your exclusive rental car partner at Jaipur Services. Whether you&apos;re a tourist exploring Pink City&apos;s rich heritage or a resident needing reliable transportation, our sedan car rental service offers the perfect solution for all your travel needs, ensuring you feel privileged and special.</p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>Why Choose Our Sedan Car Rental Service in Jaipur?</h3>
              <hr />
              <p className='text-justify'>
                At Jaipur Taxi Service, we understand the importance of comfort, safety, and convenience. Our fleet of well-maintained sedans is designed to provide you with a luxurious and smooth driving experience. Here&apos;s why our rental car service stands out:
              </p>
              <p className="text-justify">
                <strong>Comfort and Luxury: </strong>
                Our sedans have plush interiors, ample legroom, and modern amenities to ensure you travel comfortably. Whether a short trip within the city or a long-distance journey, our cars provide a relaxing environment for every passenger.</p>
              <p className="text-justify">
                <strong>Safety First: </strong>
                Safety is our top priority. All our vehicles undergo regular maintenance checks and are equipped with the latest safety features. Our professional drivers, who have extensive knowledge of Jaipur&apos;s roads and traffic, are trained to follow all traffic regulations, ensuring a safe and secure journey for you and your loved ones.</p>
              <p className="text-justify">
                <strong>Affordability: </strong>
                We believe in offering top-notch services at competitive prices, ensuring you feel financially secure. Our transparent pricing ensures you get the best value for your money without hidden charges. Enjoy premium sedan car rentals in Jaipur without breaking the bank.
              </p>
              <p className="text-justify">
                <strong>Convenience and Flexibility: </strong>
                Booking a rental car with us is a breeze. Our user-friendly website allows you to make reservations in just a few clicks, relieving you from the stress of complicated booking processes. We offer flexible rental plans to suit your schedule, whether you need a car for a few hours, a full day, or even longer.
              </p>
              <p className="text-justify">
                <strong>Explore Jaipur with Ease: </strong>
                Jaipur has historical landmarks, vibrant markets, and cultural experiences. With our sedan car rental jaipur service, you can explore famous attractions like the Amber Fort, City Palace, Hawa Mahal, and more at your own pace. Say goodbye to the hassles of public transportation and hello to the freedom of a Rental Car.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* car rentals */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>our rental deals</h3>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
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
              {CarRentalsByCategory.slice(2, 5).map((pkg, index) => (
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