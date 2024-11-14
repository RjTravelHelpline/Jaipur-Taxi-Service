import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <>
            <Link href="/" className='py-0'>
                <h1 className="logo mb-0 text-tertary text-center">jaipur taxi service</h1>
                <p className='logo-subhead mb-0 text-black text-center'>BOOK • TRAVEL • APPRECIATE</p>
            </Link>

        </>
    )
}

export default Logo