import Link from 'next/link';
import React from 'react';
import { BiChevronRight, BiError } from 'react-icons/bi';
import { PiWarning } from 'react-icons/pi';

const NotFound = () => {
  return (
    <>
      <div
        className="container-fluid bg-black py-5 d-flex flex-column justify-content-center align-items-center"
        style={{ height: '80vh' }}
      >
        <div className="container m-auto d-flex flex-column justify-content-center align-items-center gap-2">
          <PiWarning className="banner-title text-tertary bg-tertary-down p-2 rounded-5" />
          <h1 className="fw-bold text-hr banner-title text-center mb-0 web-title">
            404 <span className=" fw-light">Not Found</span>
          </h1>
          <hr />
          <Link
            href="/"
            className="bg-black text-white rounded-4 d-flex align-items-center"
          >
            <button>
              Back to Home <BiChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
