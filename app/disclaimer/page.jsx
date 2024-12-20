import Bread from '@/components/Bread'
import React from 'react'

const page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "disclaimer", link: null, active: true },
    ];
    const date = new Date()
    return (
        <>
            <div className="container-fluid py-lg-5 py-sm-3 mt-5">
                <div className="row justify-content-center align-items-center mt-lg-5 mt-sm-3">
                    <div className="col-12 col-lg-8 col-sm-12 px-2">
                        <Bread items={breadcrumbItems} style='bg-white px-0' />
                        <div className="insider bg-white rounded-3 p-3">
                            <p className='text-tertary fw-bold text-uppercase mb-0'>Jaipur Taxi Service</p>
                            <h1 className='text-capitalize web-title fw-bold'>disclaimer</h1>
                            <hr />
                            <p className='text-right'>Last Updated: {date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page
