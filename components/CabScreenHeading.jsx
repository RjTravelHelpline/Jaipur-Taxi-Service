'use client';
import React from 'react';

const CabScreenHeading = ({ icon, title }) => {
    return (
        <div className="text-capitalize fw-bold web-title bg-linear-modal w-100 px-3 text-center d-flex justify-content-start align-items-center">
            <h3 className="text-capitalize fw-bold web-title d-flex mb-0 py-4">
                <span className="d-flex align-items-center me-2 fw-bold text-black">
                    {icon}
                </span>
                {title}
            </h3>
        </div>
    );
};

export default CabScreenHeading;
