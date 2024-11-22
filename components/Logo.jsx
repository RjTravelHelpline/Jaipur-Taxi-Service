import Link from 'next/link'
import React from 'react'

const Logo = ({childStyle, parentStyle}) => {
    return (
        <>
            <Link href="/" className='py-0'>
                <h1 className={`logo mb-0 ${parentStyle}`}>jaipur taxi service</h1>
                <p className={`logo-subhead mb-0 ${childStyle}`}>BOOK • TRAVEL • APPRECIATE</p>
            </Link>

        </>
    )
}

export default Logo