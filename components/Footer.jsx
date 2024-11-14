import Image from 'next/image';
import React from 'react'

const Footer = () => {
    const footerLogo = '/rajasthan-travel-helpline.png';
    const date = new Date();
    const mydate = date.getUTCFullYear();
    return (
        <>
            <div className="container-fluid bg-black">
                <div className="row w-100 d-flex justify-content-center aiign-items-center">
                    <a
                        href="https://rajasthantourpackages.in/"
                        target="_blank"
                        className="d-flex justify-content-center aiign-items-center footer-link"
                        aria-label='rajasthan travel helpline'
                    >
                        <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" layout='responsive' title='Rajasthan Travel Helpline Contact Details' />
                    </a>
                </div>
                <div className="row py-0 d-flex justify-content-center aiign-items-center">
                    <div className="col-lg-8 col-sm-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <p className="copyright text-center py-lg-2 py-sm-1 text-capitalize text-white">
                        © 2003-{mydate} | Rajasthan travel helpline. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer