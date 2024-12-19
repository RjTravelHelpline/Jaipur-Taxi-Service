import Bread from '@/components/Bread'
import React from 'react'

const page = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Privacy Policy", link: null, active: true },
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
              <h1 className='text-capitalize web-title fw-bold'>privacy policy</h1>
              <hr />
              <p className='text-right'>Last Updated: {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <hr />
              <h3 className=' text-capitalize'>1. overview</h3>
              <p>One of the foremost concerns for users when using online services is the privacy of their personal information. At Jaipur Taxi Service, we understand this concern and prioritize protecting your data. Our privacy policy outlines the types of information we collect, how we use it, and the measures we take to ensure your data remains secure.</p>
              <hr />
              <h3 className=' text-capitalize'>2. information collection</h3>
              <p>Jaipur Taxi Service collects various information to provide and improve our services. This includes:
              </p>
              <p><strong>Personal Information:</strong> This encompasses any data that can identify you personally, such as your name, email address, phone number, and payment details. We collect this information when you book a taxi, fill out a contact form, or subscribe to our newsletter.</p>
              <p> <strong>Non-Personal Information:</strong> This includes data that can not identify you personally, such as browser type, operating system, and website usage patterns. We gather this information through cookies and other tracking technologies to enhance your browsing experience.</p>
              <hr />
              <h3 className=' text-capitalize'>3. use of collected information</h3>
              <p>The information collected is used for various purposes, including but not limited to:</p>
              <p>Service Delivery: Personal information helps us confirm bookings, process payments, and provide customer support.</p>
              <p>Improvement of Services: Non-personal information aids in understanding user behaviour, which allows us to refine our services and website functionalities.</p>
              <p>Marketing and Communication: With your consent, we may use your contact information to send promotional materials, updates, and special offers.</p>
              <hr />
              <h3 className=' text-capitalize'>4. sharing of collected information</h3>
              <p>Jaipur Taxi Service respects your privacy and does not sell, trade, or transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our website, conducting business, or servicing you as long as those parties agree to keep this information confidential.</p>
              <hr />
              <h3 className=' text-capitalize'>5. security and data protection</h3>
              <p>We implement various security measures to maintain the safety of your personal information. This includes using secure servers and SSL (Secure Socket Layer) technology to encrypt sensitive information. Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure, and we can not guarantee absolute security.</p>
              <hr />
              <h3 className=' text-capitalize'>6. Cookies</h3>
              <p>Cookies are small files that a site or its service provider transfers to your computer hard drive through your web browser (if you allow), enabling the site or service provider systems to recognize your browser and capture certain information. We use cookies to help us remember and process the items in your booking, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction to offer better site experiences and tools in the future.</p>
              <hr />
              <h3 className=' text-capitalize'>7. third-party & trackings</h3>
              <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
              <hr />
              <h3 className=' text-capitalize'>8. Your Consent</h3>
              <p>By using our site, you consent to our privacy policy. If we decide to change it, we will post the changes on this page and/or update the Privacy Policy modification date below.</p>
              <hr />
              <h3 className=' text-capitalize'>9. Contact Us</h3>
              <p>If you have any questions about this privacy policy, the practices of Jaipur Taxi Service, or your dealings with us, please contact us at <a href="mailto:jaipurtaxiservice@gmail.com" style={{ textDecoration: 'underline !important' }}>jaipurtaxiservice@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page