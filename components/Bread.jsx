'use client'
// BreadcrumbComponent.jsx
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

const Bread = ({ items, style }) => {
  return (
    <div className={`container-fluid bg-black ${style} bread-container-fluid`}>
      <div className="container bread-container">
        <div className="row px-lg-2 px-sm-0 bread-row">
          <Breadcrumb>
            {items.map((item, index) => (
              <BreadcrumbItem
                key={index}
                href={item.link}
                active={item.active}>
                {item.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default Bread;
