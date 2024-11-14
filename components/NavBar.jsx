"use client";
import React from 'react'
import {
    FaTaxi,
} from 'react-icons/fa6';
import {
    IoLogoWhatsapp,
    IoMdCall,
} from 'react-icons/io';
import { MdEmail, } from 'react-icons/md';
import Logo from './Logo'

const NavBar = () => {
    return (
        <>
            <div className="nav container-fluid d-flex justify-content-center flex-column align-items-center px-0">
                {/* header one */}
                <div className="nav-child row px-0 bg-black py-lg-1 py-sm-1 w-100 bg-black d-flex py-0 justify-content-center align-items-center">
                    <div className="d-flex w-auto justify-content-center align-items-center" style={{ borderRight: '1px solid gray' }}>
                        <MdEmail className="text-white me-1" />
                        <a href="mailto:mail@rajasthantravelhelpline.com" target='_blank' className="text-lowercase text-tertary">
                            mail@rajasthantravelhelpline.com
                        </a>
                    </div>
                    <div className="d-flex w-auto justify-content-center align-items-center" style={{ borderRight: '1px solid gray' }}>
                        <IoMdCall className="text-white me-1" />
                        <a href="tel:+919024337038" target='_blank' className="text-tertary">
                            +91-9024337038
                        </a>
                    </div>
                    <div className="d-flex w-auto justify-content-center align-items-center">
                        <IoLogoWhatsapp className="text-white me-1" />
                        <a href="tel:+919166555888" target='_blank' className="text-tertary">
                            +91-9166555888
                        </a>
                    </div>
                </div>
                {/* header two */}
                <div className="nav-child w-100 row bg-white px-lg-3 px-sm-2 py-lg-2 py-sm-2 justify-content-center align-items-center">
                    <div className="col-lg-6 d-flex justify-content-start align-items-center">
                        <Logo />
                    </div>
                    <div className="book-now col-lg-6 d-flex justify-content-end align-items-center">
                        <button className="rounded-4 text-black text-uppercase d-flex align-items-center justify-content-center gap-2">
                            <FaTaxi className='text-white' /> book now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar