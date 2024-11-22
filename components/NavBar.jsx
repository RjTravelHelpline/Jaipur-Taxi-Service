"use client";
import React, { useEffect, useState } from 'react'
import {
    FaGripLines,
    FaTaxi,
} from 'react-icons/fa6';
import {
    IoMdArrowDropdown,
    IoMdClose,
} from 'react-icons/io';
import Logo from './Logo'
import Link from 'next/link';
import { cabRental, placesToVisit, taxiFares, tempoAndBus, tourData } from '@/data/HeaderData';
import { IoCallSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

const NavBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [ismobile, setIsmobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    // Navigation handling
    const handleNavigation = () => {
        setShowNavigation((prevState) => !prevState);
    };

    // Mobile dropdown handling
    const handleMobileDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active class
    };
    // Handle window resize events
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsmobile(window.innerWidth <= 1100);
            }
        };

        // Initial check for the window size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navItems = [
        {
            title: 'cab rental',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {cabRental.map((category, index) => (
                            <div className="col py-2" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Tempo & Bus Rental',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {tempoAndBus.map((category, index) => (
                            <div className="col py-2" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Tour Packages',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {tourData.map((category, index) => (
                            <div className="col py-2" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Taxi Fares',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {taxiFares.map((category, index) => (
                            <div className="col py-2" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Places to visit',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {placesToVisit.map((category, index) => (
                            <div className="col py-2" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        }
    ];
    return (
        <>

            <div className="m-auto nav container-fluid d-flex justify-content-center flex-column align-items-center px-0">
                {/* header two */}
                <div className="nav-child w-100 row bg-white px-lg-3 px-sm-2 py-lg-2 py-sm-2 justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-start align-items-center">
                        <Logo childStyle='text-black text-center' parentStyle='text-tertary text-center' />
                    </div>
                    {ismobile ? (
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <button
                                className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham w-auto"
                                onClick={handleNavigation}
                            >
                                <FaGripLines className='text-white' />
                            </button>
                        </div>) : (
                        <div className="book-now col-6 d-flex justify-content-end align-items-center">
                            <button className="d-flex justify-content-center align-items-center p-3 rounded-5 shadow-none text-black w-auto me-2">
                                <IoCallSharp className='text-black' />
                            </button>
                            <button className="d-flex justify-content-center align-items-center p-3 rounded-5 shadow-none text-black w-auto me-2">
                                <RiWhatsappFill className='text-black' />
                            </button>
                            <button className="rounded-4 text-black text-uppercase d-flex align-items-center justify-content-center gap-2">
                                <FaTaxi className='text-white' /> book now
                            </button>
                        </div>
                    )}
                </div>
                {/* header three */}
                <div className="nav-child row py-2 w-100 bg-black">
                    <ul className="list-inline d-flex justify-content-center align-items-center gap-0 mb-0">
                        <li className="nav-item text-uppercase">
                            <Link href="/" className="text-white p-2 px-3">
                                home
                            </Link>

                        </li>
                        <li className="nav-item text-uppercase">
                            <Link href="/about-jaipur-taxi-service" className="text-white p-2 px-3">
                                about us
                            </Link>

                        </li>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="nav-item text-uppercase"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href="#" className={`text-white nav-tab-link p-2 px-3 ${activeIndex === index ? 'nav-active-link' : ''}`}>
                                    {item.title}
                                </Link>
                                {activeIndex === index && (
                                    <div className="mega-menu">
                                        <div className="insider p-5">
                                            {item.content}
                                        </div>
                                    </div>
                                )}
                            </li>))}
                        <li className="nav-item text-uppercase">
                            <Link href="/contact-us" className="text-white p-2 px-3">
                                contact us
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`container mobile-navigation  px-0 pt-5 ${showNavigation ? 'show-navigation' : ''
                    }`}
            >
                <button
                    className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-close-ham"
                    onClick={() => {
                        setShowNavigation(false);
                    }}
                >
                    {showNavigation ? <IoMdClose /> : <FaGripLines />}
                </button>
                <div className="row flex-column gap-4 p-4 w-100 px-2">
                    <div
                        className={`nav-mobile-item cursor-pointer d-flex justify-content-center align-items-center flex-column ${activeIndex === 1 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(1)}
                    >
                        <h3 className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            Jaipur Car Rental{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </h3>
                        <div className="mobile-dropdown-menu bg-tertary-down py-2 w-100">
                            {cabRental.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="dropdown-category mb-2 w-100 py-2">
                                    {/* Category Title */}
                                    <h4 className="category-title fw-bold text-start w-100 text-black">{category.title}</h4>
                                    {/* Items */}
                                    {category.items.map((item, itemIndex) => (
                                        <Link
                                            onClick={() => setShowNavigation(false)}
                                            key={itemIndex}
                                            href={item.path} // Use the `path` dynamically
                                            className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                        >
                                            <icon className="dropdown-icon02">≻</icon>
                                            {item.name} {/* Use the `name` dynamically */}
                                        </Link>
                                    ))}
                                    {/* <hr /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item cursor-pointer d-flex justify-content-center align-items-center flex-column ${activeIndex === 2 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(2)}
                    >
                        <h3 className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            Tempo & Bus Rentals{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </h3>
                        <div className="mobile-dropdown-menu bg-tertary-down py-2 w-100">
                            {tempoAndBus.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="dropdown-category mb-2 w-100 py-2">
                                    {/* Category Title */}
                                    <h4 className="category-title fw-bold text-start w-100 text-black">{category.title}</h4>
                                    {/* Items */}
                                    {category.items.map((item, itemIndex) => (
                                        <Link
                                            onClick={() => setShowNavigation(false)}
                                            key={itemIndex}
                                            href={item.path} // Use the `path` dynamically
                                            className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                        >
                                            <icon className="dropdown-icon02">≻</icon>
                                            {item.name} {/* Use the `name` dynamically */}
                                        </Link>
                                    ))}
                                    {/* <hr /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item cursor-pointer d-flex justify-content-center align-items-center flex-column ${activeIndex === 3 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(3)}
                    >
                        <h3 className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            Tour Packages{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </h3>
                        <div className="mobile-dropdown-menu bg-tertary-down py-2 w-100 rounded-4">
                            {tourData.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="dropdown-category mb-2 w-100 py-2">
                                    {/* Category Title */}
                                    <h4 className="category-title fw-bold text-start w-100 text-black">{category.title}</h4>
                                    {/* Items */}
                                    {category.items.map((item, itemIndex) => (
                                        <Link
                                            onClick={() => setShowNavigation(false)}
                                            key={itemIndex}
                                            href={item.path} // Use the `path` dynamically
                                            className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                        >
                                            <icon className="dropdown-icon02">≻</icon>
                                            {item.name} {/* Use the `name` dynamically */}
                                        </Link>
                                    ))}
                                    {/* <hr /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item cursor-pointer d-flex justify-content-center align-items-center flex-column ${activeIndex === 4 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(4)}
                    >
                        <h3 className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            Taxi fares{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </h3>
                        <div className="mobile-dropdown-menu bg-tertary-down py-2 w-100">
                            {taxiFares.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="dropdown-category mb-2 w-100 py-2">
                                    {/* Category Title */}
                                    <h4 className="category-title fw-bold text-start w-100 text-black">{category.title}</h4>

                                    {/* Items */}
                                    {category.items.map((item, itemIndex) => (
                                        <Link
                                            onClick={() => setShowNavigation(false)}
                                            key={itemIndex}
                                            href={item.path} // Use the `path` dynamically
                                            className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                        >
                                            <icon className="dropdown-icon02">≻</icon>
                                            {item.name} {/* Use the `name` dynamically */}
                                        </Link>
                                    ))}
                                    {/* <hr /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item cursor-pointer d-flex justify-content-center align-items-center flex-column ${activeIndex === 5 ? 'active' : ''}`}
                        onClick={() => handleMobileDropdown(5)}
                    >
                        <h3 className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0 w-100 d-flex justify-content-between align-items-center">
                            Places to Visit{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </h3>

                        {/* Dropdown */}
                        <div className="mobile-dropdown-menu bg-tertary-down py-2 w-100">
                            {placesToVisit.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="dropdown-category mb-2 w-100 py-2">
                                    {/* Category Title */}
                                    <h4 className="category-title fw-bold text-start w-100 text-black">{category.title}</h4>

                                    {/* Items */}
                                    {category.items.map((item, itemIndex) => (
                                        <Link
                                            onClick={() => setShowNavigation(false)}
                                            key={itemIndex}
                                            href={item.path} // Use the `path` dynamically
                                            className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                        >
                                            <icon className="dropdown-icon02">≻</icon>
                                            {item.name} {/* Use the `name` dynamically */}
                                        </Link>
                                    ))}
                                    {/* <hr /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="nav-mobile-item cursor-pointer d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/about-jaipur-taxi-service"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route text-capitalize"
                        >
                            about us
                        </Link>
                    </div>
                    <div className="nav-mobile-item cursor-pointer d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/contact-us"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route text-capitalize"
                        >
                            contact us
                        </Link>
                    </div>
                    <div className="nav-mobile-item cursor-pointer d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route text-capitalize"
                        >
                            home
                        </Link>
                    </div>
                    <hr />
                </div>
                <div className=" w-100 row p-0 py-5 mobile-navigation-footer d-flex justify-content-center align-items-center bg-black text-white position-relative">
                    <p className="position-absolute p-2 w-auto h-20 top-0 z-1 bg-tertary"></p>
                    <Logo childStyle='text-white text-center' parentStyle='text-tertary text-center' />
                </div>
            </div>
        </>
    )
}

export default NavBar