"use client"
import RentalSlider from '@/components/RentalSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import { allCabRentals } from '@/data/cabRentalData';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight, FaTaxi } from 'react-icons/fa6';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';
import PackagesSlider from '@/components/PackagesSlider';
import { PopularTourPackages } from '@/data/TourPackagesData';
const HomeBanner01 = '/Images/Banners/home-taxi-01.jpg';
const HomeBanner02 = '/Images/Banners/home-taxi-02.jpg';
const HomeBanner03 = '/Images/Banners/home-taxi-03.jpg';
const Home = () => {
  return (

    <>
      <div className="container-fluid home-banner px-0 bg-tertary-down">
        <Carousel fade pause={false} controls={false} interval={4000}>
          <Carousel.Item>
            <Image src={HomeBanner01} alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={1000} priority={true} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={HomeBanner02} alt="Home Banner" width={1500} height={1000} priority={true} />

          </Carousel.Item>
          <Carousel.Item>
            <Image src={HomeBanner03} alt="Home Banner" width={1500} height={1000} priority={true} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid bg-tertary-down">
        <div className="container">
          <div className="row py-4 d-flex justify-content-center align-items-center px-2">
            <h1 className='text-center fw-bold'>Jaipur <span className='text-tertary'>Taxi Service</span></h1>
            <h2 className="text-center py-lg-3 py-sm-2 d-flex justify-content-center align-items-start"><FaQuoteLeft className="quote-left text-tertary mx-1" />
              Reliable Taxi Services Across India – Your Journey, Our Priority!
              <FaQuoteRight className="quote-right text-tertary mx-1" />
            </h2>
            <p className="text-justify">
              Jaipur Taxi Service is one of the oldest Car Rental Companies in Jaipur, Rajasthan (India), which provides <strong>Jaipur sightseeing Taxi & Car</strong>. Car Hire Rental Service for Jaipur on an hourly, daily, weekly and monthly basis to fulfil your business, leisure, wedding, conference & other taxi car rental needs for Jaipur, Jaisalmer, Jodhpur, Bikaner, Udaipur, Mount Abu and at all major tourist, pilgrimage and industrial cities of Rajasthan & all over Rajasthan.
            </p>
            <p className="text-justify">
              We are one of the best taxi car rental service providers in Jaipur, having head office in Jaipur and associate offices in Jaisalmer, Jodhpur, Udaipur & Pushkar. We are equipped with all types of Cars, Tempo Travellers, Buses & Coaches driven by decent, well behaved, Soft Spoken and well-mannered drivers holding Commercial Vehicle Driving Licences issued by Transport Department. All chauffeurs of Jaipur Taxi Service are well trained to handle all kinds of situations occurred during the road journey and are also well versed with local roads and languages.
            </p>
            {/* <Link href='/about-jaipur-taxi-service' className='text-uppercase d-flex justify-content-center align-items-center  bg-white rounded-5'>More <MdArrowRight className='text-black' /></Link> */}
          </div>
        </div>
      </div >
      <div className="container">
        <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages rental-container">
          <h2 className="text-uppercase fw-normal text-center">
            popular <span className="fw-bold">cabs</span>
          </h2>
          <div className="col-8 d-flex justify-content-center align-items-center gap-2">
            <hr style={{ borderColor: 'var(--color-black)' }} />
            <p className="mb-0 text-tertary p-1 d-flex bg-tertary rounded-5"> </p>
            <hr style={{ borderColor: 'var(--color-black)' }} />
          </div>
          <RentalSlider rentals={allCabRentals} />
        </div>
        <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages">
          <h2 className="text-uppercase fw-normal text-center">
            tour <span className="fw-bold">packages</span>
          </h2>
          <div className="col-8 d-flex justify-content-center align-items-center gap-2">
            <hr style={{ borderColor: 'var(--color-black)' }} />
            <p className="mb-0 text-tertary p-1 d-flex bg-tertary rounded-5"> </p>
            <hr style={{ borderColor: 'var(--color-black)' }} />
          </div>
          <PackagesSlider packages={PopularTourPackages} />
        </div>
        <div className="row py-5 px-2 d-flex justify-content-center align-items-center">
          <h2 className="text-uppercase fw-normal text-center">
            why <span className="fw-bold">choose us</span>
          </h2>
          <div className="col-8 d-flex justify-content-center align-items-center gap-2">
            <hr style={{ borderColor: 'var(--color-black)' }} />
            <p className="mb-0 text-tertary p-1 d-flex bg-tertary rounded-5"> </p>
            <hr style={{ borderColor: 'var(--color-black)' }} />
          </div>
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
};

export default Home;
