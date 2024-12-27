'use client'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import Bread from '@/components/Bread'

const Page = () => {
  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "places to visit in jaipur", link: "/places-to-visit-in-jaipur", active: false },
    { label: "amer fort jaipur", link: null, active: true },
  ];


  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "amer fort jaipur", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

    </>
  )
}

export default Page