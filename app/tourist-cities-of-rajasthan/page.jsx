'use client'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import useShowAllToggle from '@/components/useShowAllToggle'
import {  PlacesToVisitInRajasthan, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
  const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(PlacesToVisitInRajasthan, 6);
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'tourist cities of rajasthan',
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
              <BreadcrumbItem href="/tour-packages-rajasthan">rajasthan tour packages</BreadcrumbItem>
              <BreadcrumbItem active>tourist cities of rajasthan</BreadcrumbItem>
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
                Rajasthan is India’s most popular destination for tourists, and for good reason. Within a fairly small area of the huge country, there is a wealth of fascinating and diverse places to visit. With the cost of traveling amongst the cheapest in the world, Rajasthan is a destination to suit any traveler. The Rajasthan State enfolds in its lap a diverse kaleidoscope of nature ranging from shimmering sands to rugged ranges to lovely landscapes.
              </p>
              <p className="text-justify">
                It is this mystique of nature that enchanted the royal dynasties of the bygone era who added a resplendent touch to the state by building some of the most opulent palaces, formidable forts, ornamental gardens, exquisite temples and colourful havelis - each and architectural masterpiece. From there emerged some great tales of heroism and romance still echoing in the golden landmarks that dot the entire state of Rajasthan.
              </p>
              <p className="text-justify">
                You can experience the opulent lifestyle of the Maharajas of yesteryears by staying in the Palace Hotels or Heritage Hotels - the former royal residences that now offer impeccable services to tourists amidst a royal ambience. On your trip through the state, you will discover that life is a celebration in Rajasthan. The spirit to rejoice every moment is reflected in the gaily coloured costumes, chunky folk jewellery and the ever bright smile of the people that brings alive even the drab desert landscape.
              </p>
              <p className="text-justify">
                The state has its unique festivities interspersed throughout the year, celebrating each season, each legend, each deity… and, infact, each day. Almost every evening is spectacular sight with local dancers swaying to the folk tunes against the back drop of the desert shimmering in the moonlight.
              </p>
              <p className="text-justify">
                Another reason to visit Rajasthan is its perfectly preserved, rich craft heritage. The Rajasthan state is a treasure-trove of the best in Indian handicrafts that attracts tourists from all over the world. You can shop for fabulous fabrics in lovely prints, precious and semi precious stones, Kundan and Minakari (enameling in gold and silver) jewellery, embroidered leather shoes or juttis, blue pottery, miniature paintings, carpets, blankets, beautiful trinkets… all unique to the state.
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
              <h3 className='text-capitalize fw-bold text-center web-title'>most popular cities to visit in rajasthan</h3>
              <p className='text-center text-capitalize'>explore the beauty of Rajasthan with ease and comfort </p>
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
                        <hr />
                        <p className="mb-0 text-tertary bg-tertary-down text-uppercase">
                          city tour
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