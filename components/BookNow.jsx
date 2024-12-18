'use client';

import React, { useState } from 'react';
import { PiTaxiFill } from 'react-icons/pi';
import EnquiryModal from './EnquiryModal';

const BookNow = ({ title, description, buttonText, modalTitle }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="book-now-comp d-flex justify-content-center align-items-center">
            <div className="insider d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
                <div className="d-flex justify-content-start align-items-start flex-column">
                    <h4 className="banner-title-2 web-title fw-bold text-capitalize text-white mb-0">
                        {title}
                    </h4>
                    <p className="text-capitalize mb-0 text-hr">
                        {description}
                    </p>
                </div>
                <button
                    className="rounded-5 text-white text-capitalize d-flex align-items-center justify-content-center"
                    style={{ fontWeight: '500' }}
                    onClick={() => setModalShow(true)}
                >
                    <PiTaxiFill className="text-black me-2" /> {buttonText}
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
