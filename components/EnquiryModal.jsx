'use client'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CabEnquiryForm from './CabEnquriyForm'
import { IoClose } from 'react-icons/io5'

const EnquiryModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='pt-4 bg-transparent enquiry-modal'
        >
            {/* <Modal.Header className='overflow-hidden py-0 border-0'>
                <div className="image-container" style={{ height: '200px', overflow: 'hidden' }}>
                    <Image
                        src='/Images/Banners/home-banner-fig.jpg'
                        alt='Modal Image'
                        title='Modal Image Title'
                        width={1500}
                        height={1000}
                        priority={true}
                        className="h-100"
                        style={{ objectFit: 'cover' }}
                    />

                </div>
            </Modal.Header> */}
            <Modal.Body>
                <CabEnquiryForm selectedPackage={props.title} />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <button className='bg-tertary-down d-flex p-2 rounded-5' onClick={props.onHide}>
                    <IoClose />
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default EnquiryModal