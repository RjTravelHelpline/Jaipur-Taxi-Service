import React from 'react'
import { PiBrowserFill, PiFacebookLogoFill, PiPhone, PiPhoneCallFill, PiWhatsappLogo, PiWhatsappLogoFill } from "react-icons/pi";
import { BiLogoInstagramAlt, BiLogoSkype, BiLogoTwitter, BiMailSend, BiWorld } from "react-icons/bi";
import { IoBrowsers, IoMail } from 'react-icons/io5';
import { RiMailFill, RiWhatsappFill } from 'react-icons/ri';
import { MdMail } from 'react-icons/md';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const page = () => {
  const date = new Date()
  return (
    <>
      <div className="container-fluid py-lg-5 py-sm-3 mt-5">
        <div className="row justify-content-center align-items-center mt-lg-5 mt-sm-3">
          <div className="col-12 col-lg-8 col-sm-12 px-2">
            <div className="insider rounded-3 px-3">
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem active>contact us</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="insider bg-white rounded-3 p-3">
              <p className='text-tertary fw-bold text-uppercase mb-0'>Jaipur Taxi Service</p>
              <h1 className='text-capitalize web-title fw-bold'>contact us</h1>
              <hr />
              <p className='text-right'>Last Updated: {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <hr />
              <h3 className=' text-capitalize'>registered office</h3>
              <p>G-18, City Plaza
                Bani Park,
                Jaipur - 302016 (Rajasthan, India)</p>
              <hr />
              <h3 className=' text-capitalize'>social screens</h3>
              <div className='d-flex justify-content-start gap-2 flex-wrap py-2'>
                <a href='https://www.facebook.com/rajasthantravelhelpline/' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'>
                    <PiFacebookLogoFill className='fs-2 p-1' />
                  </button>
                </a>
                <a href='https://www.instagram.com/rajasthantravelhelpline/' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><BiLogoInstagramAlt className='fs-2 p-1' />
                  </button>
                </a>
                <a href='skype:rajasthantravel?chat' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><BiLogoSkype className='fs-2 p-1' /></button>
                </a>
              </div>
              <hr />
              <h3 className=' text-capitalize'>contact options</h3>
              <div className='d-flex justify-content-start gap-2 flex-wrap py-2'>
                <a href='tel:+91-9024337038' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><PiPhoneCallFill className='fs-2 me-1 p-1' />
                    <span>+91-9024337038</span>
                  </button>
                </a>
                <a href='https://wa.me/919166555888' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><RiWhatsappFill className='fs-2 me-1 p-1' />
                    <span>+91-9166555888</span>
                  </button>
                </a>
                <a href='mailto:jaipurtaxiservice@gmail.com' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><MdMail className='fs-2 me-1 p-1' />
                    <span>jaipurtaxiservice@gmail.com</span>
                  </button>
                </a>
              </div>
              <hr />
              <h3 className=' text-capitalize'>websites</h3>
              <div className='d-flex justify-content-start gap-2 flex-wrap py-2'>
                <a href='https://www.rajasthantourpackages.in/' target='_blank' rel='noopener noreferrer'>
                  <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2'><BiWorld className='fs-2 me-1 p-1' />
                    <span>rajasthantourpackages.in</span>
                  </button>
                </a>
              </div>
              <hr />
              <h3 className=' text-capitalize'>quick inquiry</h3>
              <p className='text-muted text-capitalize'>option will be provided soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page