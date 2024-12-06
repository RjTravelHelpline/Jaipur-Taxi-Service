'use client'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import TourPackages from '@/components/TourPackages'
import useShowAllToggle from '@/components/useShowAllToggle'
import { JaipurSightSeeingTours, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(JaipurSightSeeingTours, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'jaipur sightseeing tours',
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
              <BreadcrumbItem href="/tour-packages-rajasthan">rajasthan tour packages</BreadcrumbItem>
              <BreadcrumbItem active>jaipur sightseeing tours</BreadcrumbItem>
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
                Discover Jaipur&apos;s Rich History and Culture with Our Exclusive Sightseeing Cab Tours
              </h4>
              <hr />
              <p className='text-justify'>Embark on a journey to explore the vibrant heritage and rich cultural tapestry of the Pink City with our unique Jaipur Sightseeing Cab services. At Jaipur Taxi Service, we stand out by offering the best way to discover the city&apos;s historical landmarks, architectural wonders, and bustling markets in comfort and style.</p>
              <p className='text-justify'>
                Our Jaipur Sightseeing Cab packages are designed to provide you with a comprehensive tour of the city&apos;s most iconic attractions. Whether you&apos;re fascinated by the grandeur of Amer Fort, the intricate carvings of Hawa Mahal, or the serene beauty of Jal Mahal, our experienced drivers ensure you get a detailed and enjoyable experience at each location. We also cover the City Palace, Jantar Mantar, and the vibrant bazaars where you can shop for traditional Rajasthani crafts, jewellery, and textiles.
              </p>
              <p className="text-justify">
                Our fleet includes a range of well-maintained vehicles to suit your needs, from comfortable sedans to spacious SUVs. All our cabs are equipped with modern amenities to make your journey pleasant and hassle-free. We prioritise your safety and convenience with drivers who are skilled, thorough, and knowledgeable about the city&apos;s history and culture.
              </p>
              <p className="text-justify">
                Booking a Jaipur Sightseeing Cab with us is not just a service; it&apos;s a seamless experience. You can easily reserve your cab online through our website or contact us directly for personalised service. We offer flexible tour packages, including half-day, full-day, and customised tours to fit your schedule and interests. With competitive pricing and no hidden costs, we provide an affordable way to explore Jaipur at your own pace.
              </p>
              <p className="text-justify">
                Don&apos;t miss out on the opportunity to immerse yourself in the majestic beauty of Jaipur. Choose Jaipur Taxi Service for your next city tour, and let us make your sightseeing experience truly memorable with our reliable and comfortable cab services.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* sightseeing packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>Top Jaipur Sightseeing Tours</h3>
              <p className='text-center text-capitalize'>Some of the most popular Jaipur sightseeing tours</p>
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