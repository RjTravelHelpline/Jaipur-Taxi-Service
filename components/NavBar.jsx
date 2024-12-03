"use client";
import React, { useEffect, useState } from 'react'
import {
    FaArrowRightToCity,
    FaChevronDown,
    FaGripLines,
    FaRegBookmark,
    FaTaxi,
} from 'react-icons/fa6';
import {
    IoMdArrowDropdown,
    IoMdClose,
} from 'react-icons/io';
import Logo from './Logo'
import Link from 'next/link';
import { cabRental, placesToVisit, taxiFares, tempoAndBus, tourData } from '@/data/HeaderData';
import { FaSearch } from 'react-icons/fa';
import { Modal, ModalFooter } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { BiChevronDown, BiTaxi } from 'react-icons/bi';
import { PiTaxiFill } from 'react-icons/pi';
import Image from 'next/image';

const NavBar = () => {


    const [showSearch, setShowSearch] = useState(false);
    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);


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

    const handleClose = () => {
        setActiveIndex(null);
    }
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
                                <p className="text-tertary fw-bolder web-title">{category.title}</p>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                                onClick={handleClose}
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                    <hr />
                                    <Link href={category.more} className='rounded-3 px-3 p-1 mx-2 text-' style={{ border: '1px solid var(--color-tertary-down)' }} onClick={handleClose}>explore more </Link>
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
                                <p className="text-tertary fw-bolder web-title">{category.title}</p>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                                onClick={handleClose}
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                    <hr />
                                    <Link href={category.more} className='rounded-3 px-3 p-1 mx-2 text-' style={{ border: '1px solid var(--color-tertary-down)' }} onClick={handleClose}>explore more </Link>
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
                                <p className="text-tertary fw-bolder web-title">{category.title}</p>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                                onClick={handleClose}
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                    <hr />
                                    <Link href={category.more} className='rounded-3 px-3 p-1 mx-2 text-' style={{ border: '1px solid var(--color-tertary-down)' }} onClick={handleClose}>explore more </Link>
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
                                <p className="text-tertary fw-bolder web-title">{category.title}</p>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                                onClick={handleClose}
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                    <hr />
                                    <Link href={category.more} className='rounded-3 px-3 p-1 mx-2 text-' style={{ border: '1px solid var(--color-tertary-down)' }} onClick={handleClose}>explore more </Link>
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
                                <p className="text-tertary fw-bolder web-title">{category.title}</p>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="p-2">
                                            <Link
                                                href={item.path} // Use the dynamic path here
                                                className="d-flex align-items-center text-white"
                                                onClick={handleClose}
                                            >
                                                <span className="text-tertary me-2">≻</span>
                                                {item.name} {/* Use the `name` dynamically */}
                                            </Link>
                                        </li>
                                    ))}
                                    <hr />
                                    <Link href={category.more} className='rounded-3 px-3 p-1 mx-2 text-' style={{ border: '1px solid var(--color-tertary-down)' }} onClick={handleClose}>explore more </Link>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
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
                            <button className="d-flex justify-content-center align-items-center p-3 rounded-5 shadow-none me-1 search-button bg-tertary-down" onClick={handleShowSearch}>
                                <FaSearch className=' text-tertary' />
                            </button>
                            <button
                                className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham w-auto"
                                onClick={handleNavigation}
                            >
                                <FaGripLines className='text-white' />
                            </button>
                        </div>) : (
                        <div className="book-now col-6 d-flex justify-content-end align-items-center">
                            <button className="d-flex justify-content-center align-items-center rounded-5 shadow-none me-2 search-button bg-gray w-50" style={{ cursor: 'text !important' }} onClick={handleShowSearch}>
                                <FaSearch className='me-2 text-tertary' />
                                <div className="w-100 d-flex justify-content-start align-items-center">
                                    <p className='mb-0 text-capitalize w-auto'>search here</p>
                                </div>
                            </button>
                            <button className="rounded-5 text-white text-capitalize d-flex align-items-center justify-content-center" style={{ fontWeight: '500' }}>
                                <PiTaxiFill className='text-black me-2' /> book now
                                <div className="lens-flare"></div>
                            </button>
                        </div>
                    )}
                </div>
                {/* header three */}
                <div className="nav-child row py-2 w-100 bg-white" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <div className="col-4 nav-right">
                        <ul className="list-inline d-flex justify-content-start align-items-center gap-0 mb-0 px-2">
                            <li className="nav-item text-capitalize">
                                <Link href="/" className="text-white p-2 px-3 nav-tab-link">
                                    home
                                </Link>
                            </li>
                            <li className="nav-item text-capitalize">
                                <Link href="/about-jaipur-taxi-service" className="text-white p-2 px-3 nav-tab-link">
                                    about us
                                </Link>
                            </li>
                            <li className="nav-item text-capitalize">
                                <Link href="/contact-us" className="text-white p-2 px-3 nav-tab-link">
                                    contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8 nav-right">
                        <ul className="list-inline d-flex justify-content-end align-items-center gap-0 mb-0 px-2">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="nav-item text-capitalize"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href="#" className={`text-nowrap text-white nav-tab-link p-2 px-3 ${activeIndex === index ? 'nav-active-link' : ''}`}>
                                        {item.title}  <BiChevronDown
                                            className={`chevron-icon ${activeIndex === index ? 'rotated' : ''}`}
                                        />
                                    </Link>
                                    {activeIndex === index && (
                                        <div className="mega-menu">
                                            <div className="insider p-5">
                                                {item.content}
                                            </div>
                                        </div>
                                    )}
                                </li>))}
                        </ul>
                    </div>
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
            {/* search model */}
            <Modal size='xl' show={showSearch} onHide={handleCloseSearch} className='search-modal'>
                <Modal.Dialog style={{ width: '100%' }} className='my-0' >
                    <Modal.Body style={{ width: '100%' }}>
                        <h2 className="fw-bold web-title text-capitalize mb-3">
                            explore more, <span className='text-tertary'>worry less</span>
                        </h2>
                        <SearchBar />
                    </Modal.Body>
                </Modal.Dialog>
                {/* <div className="image-container rounded-bottom-4" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                    <Image width={1200} height={200} src="/Images/Banners/home-taxi-01.jpg" alt="Image" style={{ width: '100% !important', height: '100%', objectFit: 'cover' }} />
                </div> */}
            </Modal >
        </>
    )
}

export default NavBar