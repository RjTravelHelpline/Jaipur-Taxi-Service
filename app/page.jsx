"use client"
import RentalSlider from '@/components/RentalSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import PackagesSlider from '@/components/PackagesSlider';
import { PopularTourPackages } from '@/data/TourPackagesData';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getPackagesByCategory } from '@/utils/utils';
import { allCabRentals } from '@/data/cabRentalData';
const HomeBanner01 = '/Images/Banners/home-banner.png';
const Home = () => {

  const popularRentals = getPackagesByCategory(allCabRentals, 'popular')
  return (

    <>
      <div className="container-fluid home-banner px-0">
        <Carousel fade pause={false} controls={false} interval={4000}>
          <Carousel.Item>
            <Image src={HomeBanner01} alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={1000} priority={true} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-4 d-flex justify-content-center align-items-center px-2">
            <h2 className="text-center py-lg-3 py-sm-2 d-flex justify-content-center align-items-start text-capitalize"><FaQuoteLeft className="quote-left text-tertary mx-1" />
              Reliable Taxi Services across india
              <FaQuoteRight className="quote-right text-tertary mx-1" />
            </h2>
            <div className="col-12 col-lg-10 col-sm-12 d-flex flex-column justify-content-center align-items-center">
              <p className="text-justify">
                Jaipur Taxi Service is one of the oldest Car Rental Companies in Jaipur, Rajasthan (India), which provides <strong>Jaipur sightseeing Taxi & Car</strong>. Car Hire Rental Service for Jaipur on an hourly, daily, weekly and monthly basis to fulfil your business, leisure, wedding, conference & other taxi car rental needs for <strong>Jaipur</strong>, <strong>Jaisalmer</strong>, <strong>Jodhpur</strong>, <strong>Bikaner</strong>, <strong>Udaipur</strong>, <strong>Mount Abu</strong> and at all major tourist, pilgrimage and industrial cities of Rajasthan & all over Rajasthan.
              </p>
            </div>
            <div className="col-12 col-lg-10 col-sm-12 d-flex justify-content-between align-items-center gap-2">
              <hr />
              <Link href='/about-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more about<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div >
      {/* popular tour packages */}
      <div className="container-fluid py-5 bg-tertary-down">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 packages rental-container">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h2 className='text-capitalize text-center fw-bold'>popular cab rental</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <RentalSlider rentals={popularRentals} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* popular tour packages */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row py-5 d-flex justify-content-center align-items-center px-2 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h2 className='text-capitalize text-center fw-bold'>popular tour packages</h2>
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

      {/* jaipur taxi for locals */}
      <div className="container-fluid py-5" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-2 why-us">
            <div className="col-12 col-lg-8 col-sm-10 px-5">
              <h2 className='text-capitalize text-center fw-bold'>why choose us</h2>
              <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <WhyChooseUs />
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/why-choose-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
