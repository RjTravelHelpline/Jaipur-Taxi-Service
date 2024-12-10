'use client'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdPhone } from 'react-icons/md'
import { RiPhoneFill, RiWhatsappFill } from 'react-icons/ri'

const BottomSocials = () => {
    return (
        <>
            <div className="bottom-socials rounded-top-4 overflow-hidden">
                <a href="tel:+91-9024337038" className='p-3 fs-4' target="_blank" rel="noopener noreferrer">
                    <RiPhoneFill />
                </a>
                <a href="https://wa.me/9166555888" className='p-3 fs-4' target="_blank" rel="noopener noreferrer">
                    <RiWhatsappFill />
                </a>
                <a href="mailto:mail@rajasthantravelhelpline.com" className='p-3 fs-4' target="_blank" rel="noopener noreferrer">
                    <MdMail />
                </a>
            </div>
        </>
    )
}

export default BottomSocials