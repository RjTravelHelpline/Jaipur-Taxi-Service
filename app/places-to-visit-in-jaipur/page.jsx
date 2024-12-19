'use client'
import Bread from '@/components/Bread'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import { PlacesToVisitInJaipur, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(PlacesToVisitInJaipur, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'places to visit in jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "rajasthan tour packages", link: "/tour-packages-rajasthan", active: false },
    { label: "places to visit in jaipur", link: null, active: true },
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
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-2 text-center'>overview</h3>
              <hr />
              <p className='text-justify'>
                Jaipur - Jaipur - The Pink City is the capital of Rajasthan, India. It was founded in 1727 by Sawai Jai Singh II, a great ruler as well as a renowned mathematician and astrologer. In 1876 Jaipur dressed in pink to welcome Prince Albert, consort of Queen Victoria, and earned the epitaph Pink City. Jaipur is one of the popular places to visit in India and one of the renowned tourist places in Rajasthan. Jaipur attracts numerous visitors from all over the world due to its rich heritage and culture.
              </p>
              <p className='text-justify'> Amber Fort, Nahargarh Fort, Jaigarh Fort, World Largest Cannon, City Palace, Jantar-Mantar (Observatory), Jal Mahal (Water Palace), Hawa Mahal (Wind Palace), Gaitore, Garh Ganesh, Patrika Gate, Jhalana Leopard Safari, etc. are the important monuments in Jaipur. Adventure activities like paragliding, hot air ballooning, rock climbing, camel riding and others can also be done here. Jaipur is also known as Shoppers Paradise; the excellent handicrafts of Jaipur are exquisite gold jewellery enamelled or inlaid with precious stones, blue pottery, carving on wood, stone & ivory, block print & tie & dye textiles, handmade paper etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h3 className='text-capitalize fw-bold text-center web-title'>places to visit</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort</p>
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
                        <h3 className="w-100 text-capitalize mx-1 text-center">
                          {pkg.title}
                        </h3>

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