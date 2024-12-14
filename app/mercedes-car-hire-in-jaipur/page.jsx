'use client'
import HeroBanner from '@/components/HeroBanner'
import { toyota_corolla_jaipur_local_use, toyota_corolla_outstation_use } from '@/data/Charges'
import { innova_crysta_feat } from '@/data/Features'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, BreadcrumbItem, Table } from 'react-bootstrap'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import { FaInfoCircle } from 'react-icons/fa'
import { MdStarRate } from 'react-icons/md'
import { RiMoneyRupeeCircleFill } from 'react-icons/ri'

const Page = () => {
  const [isShowAll, setIsShowAll] = useState(false)

  const handleShow = () => {
    setIsShowAll(!isShowAll);
  };

  // navigation
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "features", "cab-charges", "gallery"];
      const scrollPosition = window.scrollY;
      if (scrollPosition < 90) {
        setActiveSection(null);
        return;
      }
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop - 400 && scrollPosition < offsetBottom - 100) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "mercedes e class cab", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="/Images/Cabs/mercedes-e-class-banner.png" />
      {/* breadcrumb */}
      <div className="container-fluid bg-black bread-container-fluid">
        <div className="container bread-container">
          <div className="row px-lg-2 px-sm-0 bread-row">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/car-rental-jaipur">jaipur cab rental</BreadcrumbItem>
              <BreadcrumbItem href="/suv-car-rental-jaipur">luxury cab rental</BreadcrumbItem>
              <BreadcrumbItem active>mercedes e class </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      {/* navigation */}
      <div className="container-fluid about-nav bg-black">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center py-0 bg-black px-2">
            <Link href="#overview" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "overview" ? "active" : ""
                  }`}
              >
                <FaInfoCircle className='text-white icon' />
                <span>
                  Overview
                </span>
              </p>
            </Link>
            <Link href="#features" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "features" ? "active" : ""
                  }`}
              >
                <MdStarRate className='text-white icon' />
                <span>

                  Features & Amenities
                </span>
              </p>
            </Link>
            <Link href="#cab-charges" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "cab-charges" ? "active" : ""
                  }`}
              >
                <RiMoneyRupeeCircleFill className='text-white icon' />
                <span>

                  Cab Charges
                </span>
              </p>
            </Link>
            <Link href="#gallery" className="px-0">
              <p
                className={`text-tertary nav-link px-lg-3 px-sm-2 text-capitalize mb-0 d-flex align-items-center gap-2 p-2 ${activeSection === "gallery" ? "active" : ""
                  }`}
              >
                <BsImages className='text-white icon' />
                <span>

                  gallery
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* overview */}
      <section id="overview" className="container-fluid py-lg-5 py-sm-4 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  01
                </span>
                overview</h3>
              <hr />
              <h4 className='w-100'>
                Toyota Corolla is the best selling Car of Toyota Motor Corporation India.
              </h4>
              <p className='text-justify'>
                If you looking for spacious & safest car hire in Jaipur with comfort of luxury in lowest rates then Toyota Corolla is perfect car for you. Jaipur Taxi Service offer&apos;s luxury car hire service across major cities of Rajasthan. We have had the privilege of providing over a million safe rides to our esteemed customers. Toyota Corolla Car Hire service is available for Jaipur City Tour, Outstation Tour, Jaipur to Bikaner, Jaipur to Jaisalmer, Jaipur to Ahmedabad, Jaipur to Mumbai, Jaipur to Surat and all over India. All our Taxi Cars are driven by experienced & soft spoken cab drivers who are medically fit, police verified and 100% professional.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* features */}
      <section id="features" className="container-fluid py-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  02
                </span>
                features & amenities</h3>
              <hr />
              <h4 className='w-100'>
                Our Toyota Innova Crysta Cab Service in Jaipur is available with following features & amenities
              </h4>
            </div>
            <div className="row mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center">
              {innova_crysta_feat.slice(0, isShowAll ? innova_crysta_feat.length : 8).map((feature, index) => (
                <div
                  key={index}
                  className="col-12 col-lg-3 col-md-6 p-2"
                  style={{ height: "170px" }}
                >
                  <div className="cab-feature-insider h-100 cab-feature d-flex flex-column justify-content-between align-items-start gap-2 p-3 rounded-4 text-black">
                    <span className="bg-black text-tertary p-3 rounded-5">
                      {feature.icon}
                    </span>
                    <hr className="my-1" />
                    <h4 className="web-title fw-bold text-capitalize">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="col-12 d-flex w-100 align-items-center gap-2 mt-3">
                <hr />
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-1 d-flex text-nowrap text-right text-capitalize' onClick={handleShow}>
                  {isShowAll ? 'collapse' : 'view all'}
                  {isShowAll ? <BiChevronUp className='text-tertary icon' /> : <BiChevronDown className='text-tertary icon' />}

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* charges */}
      <section id="cab-charges" className="container-fluid py-4 bg-white">{ }
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 why-us">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  03
                </span>
                cab charges</h3>
              <hr />
              <h4 className='w-100'>
                Jaipur Taxi Service offer best rates for Toyota Innova Crysta Cab for Jaipur Local Use & Outstation Trip from Jaipur.
              </h4>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary w-100 p-3 text-center'>Jaipur Local Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  {toyota_corolla_jaipur_local_use.rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.particulars}</td>
                      <td>{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="col-lg-6 col-sm-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h4 className='text-capitalize fw-bold web-title bg-tertary w-100 p-3 text-center'>outstation Use</h4>
              <Table cellspacing="0" cellpadding="10" className='table-stripped'>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  {toyota_corolla_outstation_use.rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.particulars}</td>
                      <td>{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      {/* gallery */}
      <section id="gallery" className="container-fluid py-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
            <div className="col-12 mb-lg-3 mb-sm-2 d-flex justify-content-center align-items-center flex-column px-2">
              <h3 className='text-capitalize fw-bold web-title bg-linear-modal w-100 p-lg-3 p-sm-2 text-center d-flex justify-content-start align-items-center' style={{ borderLeft: '5px solid var(--color-black)' }}>
                <span className="text-tertary me-2 fs-1 d-flex justify-content-center align-items-center">
                  04
                </span>
                cab gallery</h3>
              <hr />
              <p className='w-100 text-muted text-capitalize'>
                Images will be uploaded yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page