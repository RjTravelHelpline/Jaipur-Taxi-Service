'use client';

import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const RentalCategory = ({ icon, title, cabRentals, activeIndex, setActiveIndex, index, isLinksSection = false, otherSection }) => {
    const handleShowAccord = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="cab-side-insider my-2">
            <p
                className={`web-title fw-bold ${isLinksSection ? 'bg-tertary text-white' : 'bg-active-gray'} mb-0 category p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === index ? 'rounded-top-4 text-tertary' : 'rounded-4'
                    }`}
            >
                <span className="d-flex justify-content-center align-items-center">
                    <span className="me-2 text-tertary">{icon}</span>
                    {title}
                </span>
                <span
                    className="cursor-pointer text-black p-2 bg-tertary-down rounded-5 d-flex"
                    onClick={() => handleShowAccord(index)}
                >
                    {activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                </span>
            </p>
            {activeIndex === index && (
                <>
                    {isLinksSection ? (
                        <>
                            {otherSection}
                        </>
                    ) : (
                        <>
                            <div className="categories">
                                {cabRentals.map((item, idx) => (
                                    <Link href={item.navigate} className="px-0" key={idx}>
                                        <p className="text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-3">
                                            <span>
                                                <MdArrowOutward className="me-1 text-tertary" />
                                            </span>
                                            <span>{item.title}</span>
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )
                    }
                    <hr />
                </>
            )}
        </div>
    );
};

export default RentalCategory;
