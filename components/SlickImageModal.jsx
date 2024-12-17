'use client'
import React from "react";
import { Modal } from "react-bootstrap";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import SlickSlider from "./SlickSlider";

const SlickImageModal = ({
    show,
    handleClose,
    images = [],
    currentIndex = 0,
}) => {

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            centered
            className="image-modal"
            animation={false}
        >
            <button
                className="d-flex p-3 m-3 close-button rounded-5"
                onClick={handleClose}
                aria-label="Close"
            >
                <RiCloseFill />
            </button>
            <Modal.Body className="p-0">
                <SlickSlider settings={{ intialSlide: currentIndex, slidesToShow: 1, autoplay: false }}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="text-center rounded-4 overflow-hidden modal-image-container mb-4"
                        >
                            <Image
                                width={1200}
                                height={600}
                                className="d-block w-100 h-auto"
                                style={{ objectFit: "cover" }}
                                src={src}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </SlickSlider>
            </Modal.Body>
        </Modal >
    );
};

export default SlickImageModal;
