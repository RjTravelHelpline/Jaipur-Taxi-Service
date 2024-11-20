"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect } from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

const SlickSlider = ({ settings, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    ...settings,
  };


  if (settings && settings.dots !== undefined) {
    defaultSettings.responsive[1].settings.dots = settings.dots;
  }

  useEffect(() => {
    const clonedSlides = document.querySelectorAll('.slick-slide.slick-cloned');
    clonedSlides.forEach((slide) => {
      slide.setAttribute('aria-hidden', 'false');
    });
  }, []);

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default SlickSlider;