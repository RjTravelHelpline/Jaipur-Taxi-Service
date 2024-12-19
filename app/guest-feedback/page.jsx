'use client'
import HeroBanner from '@/components/HeroBanner'
import Testimonials from '@/components/Testimonials'
import { reviewers } from '@/data/Reviews'
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { RiCloseFill } from 'react-icons/ri';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { getLatestItems } from '@/utils/utils';
import Bread from '@/components/Bread';
const tourHimachal = '/Images/Reviews/tour-himachal.jpg';
const tourHimachal02 = '/Images/Reviews/tour-himachal-02.jpg';
const tourTamilnadu = '/Images/Reviews/tour-tamilnadu.jpg';
const tourDesert01 = '/Images/Gallery/tour-jaisalmer-01.jpeg';
const tourDesert02 = '/Images/Gallery/tour-jaisalmer-02.jpeg';
const tourDesert03 = '/Images/Gallery/tour-jaisalmer-03.jpg';
const tourDesert04 = '/Images/Gallery/tour-jaisalmer-04.jpg';
const tourDesert05 = '/Images/Gallery/tour-jaisalmer-05.jpg';
const tourDesert06 = '/Images/Gallery/tour-jaisalmer-06.jpeg';
const tourDesert07 = '/Images/Gallery/tour-jaisalmer-07.jpeg';
const tourDesert08 = '/Images/Gallery/tour-jaisalmer-08.jpeg';
const tourDesert09 = '/Images/Gallery/tour-jaisalmer-09.jpeg';

const Page = () => {

  const sortedReviews = getLatestItems(reviewers)
  const images = [
    { src: tourHimachal, alt: 'Image 1' },
    { src: tourHimachal02, alt: 'Image 2' },
    { src: tourTamilnadu, alt: 'Image 3' },
    { src: tourDesert01, alt: 'Image 4' },
    { src: tourDesert02, alt: 'Image 5' },
    { src: tourDesert03, alt: 'Image 6' },
    { src: tourDesert04, alt: 'Image 7' },
    { src: tourDesert05, alt: 'Image 8' },
    { src: tourDesert06, alt: 'Image 9' },
    { src: tourDesert07, alt: 'Image 10' },
    { src: tourDesert08, alt: 'Image 11' },
    { src: tourDesert09, alt: 'Image 12' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Guest Reviews & Testimonials',
      subheading: 'See why our guests trust us with their travels in Rajasthan',
    },
  ]
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Guest Feedback", link: null, active: true },
  ];
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <Bread items={breadcrumbItems} />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 reviews">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold web-title'>guests&apos; reviews</h2>
              <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <div className="row d-flex justify-content-start align-items-center  review-card-screen">
              {sortedReviews.map((reviewer, index) => {
                return <Testimonials key={index} reviewer={reviewer} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="container-fluid py-5 bg-linear-modal">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 reviews">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className="text-capitalize text-center fw-bold web-title">our gallery</h2>
              <p className="text-center text-capitalize">Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <div className="row d-flex justify-content-start align-items-center gallery-images">
              {images.map((image, index) => (
                <div key={index} className="col-lg-3 col-sm-6 px-2 mb-3">
                  <div
                    className="gallery-image-container"
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Image src={image.src} alt={image.alt} width={400} height={300} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className='image-modal' animation={false}>
          <Modal.Body className="p-0">
            <button
              className="d-flex p-3 m-3 close-button rounded-5"
              onClick={handleCloseModal}
              aria-label="Close"
            ><RiCloseFill /> </button>
            <button
              className="modal-prev-button p-3"
              onClick={() =>
                setCurrentImageIndex(
                  (currentImageIndex - 1 + images.length) % images.length
                )
              }
              aria-label="Previous"
            > <SlArrowLeft />
            </button>
            <div className="text-center rounded-4 overflow-hidden modal-image-container">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={800}
                height={600}
                className='modal-image'
              />
            </div>
            <button
              className="modal-next-button p-3"
              onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
              aria-label="Next"
            >
              <SlArrowRight />
            </button>

            <div className="mt-4 bottom-image-slider">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`mx-2 thumbnail-container ${index === currentImageIndex ? 'active-image' : ''
                    }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image src={image.src} alt={image.alt} width={100} height={75} />
                </div>
              ))}
            </div>

          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default Page
