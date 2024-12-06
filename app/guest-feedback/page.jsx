import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'Guest Reviews & Testimonials',
      subheading: 'See why our guests trust us with their travels in Rajasthan.',
    },
  ]
  return (
    <>
      {/* banner */}
      <HeroBanner slides={slides} />

      {/* breadcrumb */}
      <div className="container-fluid bg-white bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem active>guest reviews</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid py-5 bg-white">

      </div>
    </>
  )
}

export default page