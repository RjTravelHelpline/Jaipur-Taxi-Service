'use client'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import Bread from '@/components/Bread'

const Page = () => {
  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "jaipur sightseeing tours", link: "/jaipur-sightseeing-tours", active: false },
    { label: "jaipur market and shopping tour", link: null, active: true },
  ];


  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "jaipur market and shopping tour", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

    </>
  )
}

export default Page