'use client'
import React from 'react'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import { RiWhatsappFill } from 'react-icons/ri'

const BottomSocials = () => {
    return (
        <>
            <div className="bottom-socials rounded-5 overflow-hidden p-2 gap-2">
                <a href="tel:+91-9024337038" class="d-flex align-items-center p-2 rounded-5" style={{ backgroundColor: '#000000' }}>
                    <IoMdCall className='fs-4 text-white' />
                </a>
                <a href="https://wa.me/9166555888" target="_blank" class="d-flex align-items-center p-2 rounded-5" style={{ backgroundColor: '#4AB060' }}>
                    <RiWhatsappFill className='fs-4 text-white' />
                </a>
                <a href="mailto:mailto:mail@rajasthantravelhelpline.com" class="d-flex align-items-center p-2 rounded-5" style={{ backgroundColor: '#EB4334' }}>
                    <IoMdMail className='fs-4 text-white' />
                </a>
            </div>
        </>
    )
}

export default BottomSocials

