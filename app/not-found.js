import Link from 'next/link';
import React from 'react';
import { BiChevronRight, BiError } from 'react-icons/bi';

const NotFound = () => {
  return (
    <>
      <div
        className="container-fluid bg-black py-5 d-flex flex-column justify-content-between align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="container m-auto d-flex justify-content-center align-items-end gap-2">
          <h1
            className="fw-bold text-hr mb-0 px-3"
            style={{ borderRight: '1px solid var(--color-hr)' }}
          >
            404{' '}
            <span className="mb-0 fw-light web-title d-block text-capitalize">
              not found
            </span>
          </h1>
          <Link
            href="/"
            className="anchor-underline color-tertary d-flex align-items-center"
          >
            Back to Home <BiChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
