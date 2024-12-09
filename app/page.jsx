"use client"
import RentalSlider from '@/components/RentalSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Carousel, CarouselCaption, Modal } from 'react-bootstrap';
import Image from 'next/image';
import PackagesSlider from '@/components/PackagesSlider';
import { JaipurDayTours, PopularTourPackages } from '@/data/TourPackagesData';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getPackagesByCategory } from '@/utils/utils';
import { allCabRentals } from '@/data/cabRentalData';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Testimonials from '@/components/Testimonials';
import SlickSlider from '@/components/SlickSlider';
import { reviewers } from '@/data/Reviews';
const HomeBannerFig = '/Images/Banners/home-banner-fig.jpg';
const Home = () => {

  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const popularRentals = getPackagesByCategory(allCabRentals, 'popular')
  return (

    <><div className="container-fluid home-banner px-0 mt-5">
      <Carousel fade pause={false} controls={false} interval={4000}>
        <Carousel.Item>
          <Image src={HomeBannerFig} alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={1000} priority={true} />
          <CarouselCaption>
            <div className="home-banner-search w-100 flex-column">
              <h3 className='text-capitalize text-white fw-bold web-title banner-title'>Ride Through <span className='fw-bold'>Rajasthan&apos;s </span>Wonders</h3>
              <hr />
              <div
                className="pseudo-input rounded-5 bg-white text-muted d-flex justify-content-start align-items-center"
                onClick={handleShowSearch}
              >
                <span className='me-2 text-white bg-tertary rounded-5 p-3 d-flex' >
                  <FaSearch />
                </span>
                <p className='mb-0 text-capitalize home-banner-input'>Search for taxis, tours, and travel packages & more..</p>
              </div>
            </div>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
    </div>
      <div className="container-fluid bg-white pb-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
            <h1 className='text-capitalize text-center mb-0 fw-bold web-title'>Reliable taxi services across rajasthan</h1>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <hr />
              <p className="text-justify">
                Jaipur Taxi Service is one of the oldest Car Rental Companies in Jaipur, Rajasthan (India), which provides <strong>Jaipur sightseeing Taxi & Car</strong>. Car Hire Rental Service for Jaipur on an hourly, daily, weekly and monthly basis to fulfil your business, leisure, wedding, conference & other taxi car rental needs for <strong>Jaipur</strong>, Jaisalmer, Jodhpur, Bikaner, Udaipur, Mount Abu and at all major tourist, pilgrimage and industrial cities of Rajasthan & all over Rajasthan.
              </p>
              <p className='text-justify'>We are one of the best taxi car rental service providers in Jaipur, having head office in Jaipur and associate offices in Jaisalmer, Jodhpur, Udaipur & Pushkar. We are equipped with all types of Cars, Tempo Travellers, Buses & Coaches driven by decent, well behaved, Soft Spoken and well-mannered drivers holding Commercial Vehicle Driving Licences issued by Transport Department. All chauffeurs of Jaipur Taxi Service are well trained to handle all kinds of situations occurred during the road journey and are also well versed with local roads and languages.</p>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center gap-2">
              <hr />
              <h4 className='text-capitalize text-nowrap mb-0'>want to know <span className='text-tertary'>more about us</span>?</h4>
              <Link href='/about-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>read more <MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div >
      {/* popular tour packages */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 packages rental-container">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>popular cab rental</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <RentalSlider rentals={popularRentals} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/car-rental-jaipur'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* popular tour packages */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>popular tour packages</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <PackagesSlider packages={PopularTourPackages} showPrice={true} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* day trips from jaipur */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>jaipur day trips</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <PackagesSlider packages={JaipurDayTours} showPrice={false} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>why choose us</h2>
              <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <WhyChooseUs />
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-2">
              <hr />
              <Link href='/why-choose-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 reviews">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>guests&apos; reviews</h2>
              <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <div className="row d-flex align-items-stretch px-2">
              <SlickSlider settings={{ slidesToShow: 2 }}>
                {reviewers.map((reviewer, index) => {
                  return <Testimonials key={index} reviewer={reviewer} />;
                })}
              </SlickSlider>
            </div>
            {/* testimonials */}
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/guest-feedback'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* search model */}
      <Modal size='xl' show={showSearch} onHide={handleCloseSearch} style={{ width: '100% !important', padding: '0 !important' }} className='search-modal'>
        <div className="w-100 d-flex justify-content-end">
          <button onClick={handleCloseSearch} className='rounded-5 text-black bg-gray p-lg-3 p-sm-2 d-flex'><IoClose /></button>
        </div>
        <Modal.Body style={{ width: '100%' }}>
          <h2 className="fw-bold web-title text-capitalize mb-3">
            explore more, <span className='text-tertary'>worry less</span>
          </h2>
          <SearchBar />
        </Modal.Body>
        {/* <div className="image-container rounded-bottom-4" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                    <Image width={1200} height={200} src="/Images/Banners/home-taxi-01.jpg" alt="Image" style={{ width: '100% !important', height: '100%', objectFit: 'cover' }} />
                </div> */}
        <Modal.Footer style={{ width: '100%', display: 'flex', }}>
          <p className='text-capitalize text-muted'>powered by <span className="text-tertary">jaipur taxi service</span></p>
        </Modal.Footer>
      </Modal >
    </>
  );
};

export default Home;
