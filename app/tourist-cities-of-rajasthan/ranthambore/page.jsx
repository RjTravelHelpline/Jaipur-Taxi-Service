'use client'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import Bread from '@/components/Bread'

const Page = () => {
  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "tourist cities of rajasthan", link: "/tourist-cities-of-rajasthan", active: false },
    { label: "ranthambore", link: null, active: true },
  ];

  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "ranthambore", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

    </>
  )
}

export default Page