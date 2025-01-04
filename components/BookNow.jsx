'use client';

import React, { useState } from 'react';
import { PiTaxiFill } from 'react-icons/pi';
import EnquiryModal from './EnquiryModal';
import { BiSolidPaperPlane } from 'react-icons/bi';

const BookNow = ({ title, description, buttonText, modalTitle }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="book-now-comp d-flex justify-content-center align-items-center rounded-4">
            <div className="insider d-flex justify-content-between align-items-center flex-wrap gap-3 p-4 px-4 bg-tertary-down">
                <div className="d-flex justify-content-start align-items-start flex-column">
                    <h4 className="banner-title-2 web-title fw-bold text-capitalize text-white mb-0 d-flex align-items-center gap-2">
                        <span className='text-black'><BiSolidPaperPlane /></span>
                        <span className='fw-light'>{title.split(' ').slice(0, 1).join('')}</span>{title.split(' ').slice(1).join(' ')}
                    </h4>
                </div>
                <button
                    className="rounded-5 text-white text-capitalize d-flex align-items-center justify-content-center bg-black"
                    style={{ fontWeight: '500' }}
                    onClick={() => setModalShow(true)}
                >
                    <PiTaxiFill className="text-tertary me-2" /> {buttonText}
                    <div className="lens-flare"></div>
                </button>
                <EnquiryModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={modalTitle}
                />
            </div>
        </div>
    );
};

export default BookNow;
