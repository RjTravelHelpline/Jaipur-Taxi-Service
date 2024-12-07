import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  const date = new Date()
  return (
    <>
      <div className="container-fluid py-lg-5 py-sm-3 mt-5">
      <div className="row justify-content-center align-items-center mt-lg-5 mt-sm-3">
          <div className="col-12 col-lg-8 px-2">
            <div className="insider rounded-3 px-3">
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem active>terms and conditions</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="insider bg-white rounded-3 p-3">
              <p className='text-tertary fw-bold text-uppercase mb-0 '>Jaipur Taxi Service</p>
              <h1 className='text-capitalize web-title fw-bold'>terms & conditions</h1>
              <hr />
              <p className='text-right'>Last Updated: {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <hr />
              <h3 className="text-capitalize">1. Acceptance of Terms</h3>
              <p>Using this site, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you disagree with these terms, please do not use our website or services. Your continued use of our services indicates your acceptance of these terms.</p>
              <hr />
              <h3 className="text-capitalize">2. Services Offered</h3>
              <p>Jaipur Taxi Service is dedicated to providing the best taxi and car rental services in Jaipur. We strive to offer the best service possible, and we are committed to serving you. However, we reserve the right to modify or discontinue our services at any time without prior notice.</p>
              <hr />
              <h3 className="text-capitalize">3. Booking and Payments</h3>
              <p>All bookings are subject to availability and confirmation by Jaipur Taxi Service. Payments can be made online through our secure and reliable payment gateway. We accept major credit cards and other approved methods of payment. Full payment is required at the time of booking unless otherwise stated.</p>
              <hr />
              <h3 className="text-capitalize">4. Cancellation and Refund Policy</h3>
              <p>Cancellations must be made at least 24 hours before the scheduled pickup time to be eligible for a refund. Rest assured, refunds for cancellations made within 24 hours of the scheduled pickup time will be processed promptly within 7-10 business days.</p>
              <hr />
              <h3 className="text-capitalize">5. User Conduct</h3>
              <p>You agree to use our services for lawful purposes only. This includes using our services for personal transportation, sightseeing, or any other legal activity. You must not use our website or services in any way that causes damage or harm to our business, website, or any other user.</p>
              <hr />
              <h3 className="text-capitalize">6. Limitation of Liability</h3>
              <p>Jaipur Taxi Service will not be liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of our services. Our total liability to you for any damages shall not exceed the amount you paid for the service in question.</p>
              <hr />
              <h3 className="text-capitalize">7. Changes to Terms and Conditions</h3>
              <p>We reserve the right to change these terms and conditions at any time. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>
              <hr />
              <h3 className=' text-capitalize'>8. Contact Us</h3>
              <p>If you have any questions about this privacy policy, the practices of Jaipur Taxi Service, or your dealings with us, please contact us at <a href="mailto:jaipurtaxiservice@gmail.com" style={{ textDecoration: 'underline !important' }}>jaipurtaxiservice@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page