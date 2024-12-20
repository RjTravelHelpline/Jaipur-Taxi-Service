'use client'
import Bread from '@/components/Bread'
import HeroBanner from '@/components/HeroBanner'
import ToggleShowAllButton from '@/components/ToggleShowAllButton'
import TourPackages from '@/components/TourPackages'
import useShowAllToggle from '@/components/useShowAllToggle'
import { JaipurDayTours, TourPackagesByCategory } from '@/data/TourPackagesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page = () => {
    const { showAll, displayedItems, toggleShowAll } = useShowAllToggle(JaipurDayTours, 6);
    const slides = [
        {
            image: '',
            alt: 'Jaipur Taxi',
            title: '',
            heading: 'day trips from jaipur',
            subheading: 'Comfort & Convenience for Every Journey',
        },
    ]
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "rajasthan tour packages", link: "/tour-packages-rajasthan", active: false },
        { label: "day trips from jaipur", link: null, active: true },
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
                                Explore Rajasthan&apos;s Heritage with Exclusive Private Day Tours from Jaipur
                            </h4>
                            <hr />
                            <p className='text-justify'>Discover the diverse beauty of Rajasthan with our exclusive tour packages from Jaipur. Whether you&apos;re a history buff, a cultural enthusiast, or a nature lover, our carefully curated tours ensure you experience the best of what this vibrant state offers. Jaipur Taxi Service brings you unparalleled comfort, safety, and convenience as you embark on a journey to explore the wonders of Rajasthan.</p>
                            <p className='text-justify'>
                                Our tour packages from Jaipur are designed to cater to all your travel needs, ensuring a seamless and stress-free adventure. Begin your journey with a visit to the magnificent Amber Fort, a stunning blend of Hindu and Mughal architecture. Explore the City Palace, a royal residence showcasing an impressive art and artefact collection. Don&apos;t miss the Hawa Mahal, the iconic Palace of Winds, with its unique facade and historical significance.
                            </p>
                            <p className="text-justify">
                                For those seeking a deeper cultural experience, our tour packages include visits to traditional Rajasthani villages where you can witness local artisans at work and enjoy authentic Rajasthani cuisine. Explore the vibrant markets of Jaipur, where you can shop for exquisite handicrafts, jewellery, and textiles that reflect the region&apos;s rich heritage.
                            </p>
                            <p className="text-justify">
                                Nature lovers can indulge in our packages that include excursions to Ranthambore National Park, home to the majestic Bengal tiger, and the serene Sambhar Salt Lake, the largest inland salt lake in India. Experience the tranquillity of these natural wonders while enjoying guided tours and safaris.
                            </p>
                            <p className="text-justify">
                                Our tour packages from Jaipur also cover the enchanting cities of Udaipur, Jodhpur, and Jaisalmer. Immerse yourself in the beauty of the City of Lakes, Udaipur, with its stunning palaces and serene lakes. Get lost in the vibrant blue city of Jodhpur with its imposing Mehrangarh Fort and lively bazaars. Experience the golden sands of Jaisalmer and its magnificent fort.
                            </p>
                            <p className="text-justify">
                                At Jaipur Taxi Service, we prioritise your comfort and safety. Our well-maintained vehicles and expert drivers, with their extensive knowledge of the region, ensure a hassle-free and secure travel experience. Book your tour package from Jaipur today and embark on an unforgettable journey through the heart of Rajasthan. </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            {/*  packages */}
            <div className="container-fluid py-5 bg-linear-modal">
                <div className="container">
                    <div className="row justify-content-center align-items-center packages">
                        <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
                            <h3 className='text-capitalize fw-bold text-center web-title'>private day tour packages</h3>
                            <p className='text-center text-capitalize'>Some of the most popular day tours from Jaipur</p>
                        </div>
                        <div className="w-100 d-flex justify-content-center align-items-center flex-wrap px-0 packages">
                            {displayedItems.map((pkg, index) => (
                                <TourPackages key={index} pkg={pkg} showPrice={false} />
                            ))}
                        </div>
                        <ToggleShowAllButton showAll={showAll} toggleShowAll={toggleShowAll} />
                    </div> </div>
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