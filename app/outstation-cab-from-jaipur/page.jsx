"use client"
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { OutStationTourPackages, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdExpandLess, MdExpandMore, MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(OutStationTourPackages, 9);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'outstation cab from jaipur',
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
              <BreadcrumbItem active>outstation cab from jaipur</BreadcrumbItem>
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
              <h4 className="text-center text-capitalize mb-0">
                Outstation Cab Services from Jaipur for Every Journey</h4>
              <hr />
              <p className='text-justify'>Regarding car booking in Jaipur for outstation trips, Jaipur Taxi Service is a trusted and convenient choice. Whether planning a quick getaway or an extended journey, booking a car with us guarantees a smooth and enjoyable travel experience. Our fleet boasts diverse vehicles, from economical sedans to luxurious SUVs Car Rental Jaipur, ensuring we can cater to your specific needs and budget. With transparent pricing, our car booking services are designed to provide comfort and reliability without straining your finances.</p>
              <p className='text-justify'>
                Booking a car with Jaipur Taxi Service is a breeze. Our online reservation system lets you easily specify your travel dates, destination, and preferred car type. Our dedicated team ensures that each vehicle is well-maintained, and our experienced drivers prioritise your safety and comfort throughout the journey, making the entire process simple and hassle-free.
              </p>
              <p className='text-justify'>
                At Jaipur Taxi Service, we are committed to offering competitive rates for outstation trips from Jaipur, making us one of the best car booking options in the region. Whether travelling to nearby destinations in Rajasthan or venturing further afield, our service guarantees punctuality and professionalism, all at a price that won&apos;t break the bank.
              </p>
              <p className='text-justify'>
                Our service extends beyond providing transportation; we offer a reliable partner for your travel needs. Our outstation car booking service covers everything from Jaipur to popular tourist destinations and lesser-known gems. Whether a business trip or a family vacation, Jaipur Taxi Service ensures your journey is as enjoyable as the destination.
              </p>
              <p className='text-justify'>
                Choose Jaipur Taxi Service for your next outstation trip and experience the ease of car booking in Jaipur with a service that always puts your needs first. We value your trust and strive to make your journey as enjoyable as the destination.
              </p>
              <hr />
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center'>6 Reasons for Book Outstation Cab from Jaipur Taxi Service
              </h3>
              <hr />
              <p className='text-justify'>
                Concerning car booking in Jaipur for outstation travel, Jaipur Taxi Benefit offers numerous benefits, making it the favoured choice for voyagers. There are six compelling motives to book your cab outstation with us:
              </p>
              <p className='text-justify'>
                Wide Range of Vehicles: Whether you need a sedan, SUV, or luxury car, we offer a diverse fleet to cater to your needs and preferences. Our large fleet ensures you can always find a vehicle, even during peak travel times, as we always have backup vehicles ready for such situations.
              </p>
              <p className='text-justify'>
                Experienced Drivers: Our drivers are not only skilled and familiar with routes across Rajasthan and neighbouring states, but they also strictly adhere to safety guidelines, ensuring a safe and smooth journey for you and your loved ones.
              </p>
              <p className='text-justify'>
                Transparent Pricing: We offer competitive and transparent pricing with no hidden charges, making it easier to plan your travel budget.
              </p>
              <p className='text-justify'>
                Easy Online Booking: Our user-friendly online booking system is designed for your convenience. With just a few clicks, you can reserve a car, ensuring a hassle-free experience from start to finish. This feature is aimed at giving you peace of mind for your journey, making the process of booking a car as easy as possible.
              </p>
              <p className='text-justify'>
                Punctual Service: We understand the importance of time and ensure on-time pickups and drop-offs. This commitment to punctuality is designed to give you the security of a stress-free journey, knowing we&apos;ll be there when you need us, and you can rely on us to keep to your schedule.
              </p>
              <p className='text-justify'>
                24/7 Customer Support: Our dedicated customer support team is always available to assist with your booking and any inquiries. This ensures you&apos;re never alone during travel, providing a seamless and supported experience.
              </p>
              <p className='text-justify'>
                By choosing Jaipur Taxi Service, you&apos;re not just booking a car; you&apos;re opting for reliability, comfort, and exceptional service. Whether it&apos;s an end-of-the-week getaway or an amplified excursion, we guarantee your travel will be as vital as your goal. Book your outstation cab from Jaipur with us and experience the best car booking service in the city, giving you the confidence that you&apos;ve made the right choice for your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* outstation packages  */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center bydayspackages carRentalsCard">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>outstation tour deals </h3>
              <p className='text-center text-capitalize'>Hassle-Free Cab Services for outstation</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 bydayspackages carRentalsCard">
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
                        <hr />
                        <p className="price px-2 text-capitalize w-auto">
                          starting from ₹{pkg.price}/-
                        </p>
                      </div>
                    </Card>
                  </Link>
                </div>
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

