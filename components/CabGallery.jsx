'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsImages } from 'react-icons/bs';
import SlickImageModal from './SlickImageModal'; // Ensure this is the correct import for your modal component.

const CabGallery = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpenModal = (index) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (

        <>
            <div className="gallery-container row d-flex justify-content-center align-items-center overflow-hidden rounded-4 py-0 px-1">
                  <button className='rounded-4 text-capitalize fw-bold web-title' onClick={() => handleOpenModal(0)}>
                    <BsImages className='me-2' />
                    <span>view all images</span>
                  </button>
                  {/* Gallery Images */}
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`col-6 cab-detail-img-slider px-0`}
                      onClick={() => handleOpenModal(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        width={1200}
                        height={600}
                        className="d-block w-100"
                        src={src}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
            {/* Slick Modal */}
            <SlickImageModal
                show={showModal}
                handleClose={handleClose}
                images={images}
                currentIndex={currentIndex}
            />
        </>
    );
};

export default CabGallery;
