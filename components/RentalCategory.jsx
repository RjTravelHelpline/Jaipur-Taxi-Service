'use client';
import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { BiChevronUp, BiChevronDown, BiChevronRight } from 'react-icons/bi';

const RentalCategory = ({ icon, title, cabRentals, activeIndex, setActiveIndex, index, isLinksSection = false, otherSection }) => {
    const handleShowAccord = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="cab-side-insider">
            <p
                className={`cursor-pointer web-title fw-bold mb-0 category p-3 overflow-hidden d-flex align-items-center justify-content-between ${activeIndex === index ? 'rounded-top-4 text-tertary' : 'rounded-4'
                    }`} onClick={() => handleShowAccord(index)}
            style={{borderBottom:'1px solid var(--color-border)'}}>
                <span className="d-flex justify-content-center align-items-center">
                    <span className="me-2 text-black d-flex align-items-center">{icon}</span>
                    {title}
                </span>
                <span
                    className="text-black rounded-5 d-flex"
                >
                    {activeIndex === index ? <BiChevronDown /> : <BiChevronRight />}
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
                                        <p className="text-black nav-link rounded-4 text-capitalize mb-0 d-flex align-items-center gap-2 p-2">
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
                </>
            )}
        </div>
    );
};

export default RentalCategory;
