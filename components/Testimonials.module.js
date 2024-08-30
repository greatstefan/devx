import React from 'react';
import { useState } from 'react';
import { Container } from './styles/Container.styled';

import Slider from "react-slick";
import { Testimonials, Slide, SDetails, SDescription, SQuote, SliderNavigation } from './styles/Testimonials.styled';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TestimonialsData } from './data/TestimonialsData';

import ModalDefault from "./ts.modal.module";

const WhatClientSay = () => {
  // modal settings
  const [openedPopup, setOpenedPopup] = useState(0);
  const [popupData, setPopupData] = useState(0);
  const openPopup = (popupID, item) => {
    setOpenedPopup(popupID);
    setPopupData(item);
  }
  const closePopup = (e) => {
    setOpenedPopup(0);
    e.preventDefault();
  };

  // slider settings 
  const slider = React.useRef();

  function moveLeft () {
    slider.current.slickPrev();

  }
  function moveRight () {
    slider.current.slickNext();
  }

  var settings = {
    className: "center",
    dots: false,
    centerMode: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    adaptiveHeight: true,

    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
  <Testimonials>
    <Container>
      <h2>What our clients say</h2>
      <p>It is a privilege to play a part in our partners' success. <br />
      What they think about our hard work inspires us to keep pushing ourselves to the limit and to reinvent ourselves.</p>

      <Slider {...settings} ref={slider} className="testimonialSlider">

      {TestimonialsData.map((item, index) => {
        return (

        <Slide key={index}>
          <SQuote src="./images/quote.svg" alt="quote" />
          
          <SDetails>
            <div>{item.client}</div>
            <span>{item.location}</span>
            <i>Skills: {item.skills}</i>
          </SDetails>

          <SDescription>{item.description.shortdesc}</SDescription>
          <a href="#" onClick={(e) => {
              e.preventDefault(); 
              openPopup(index + 1, item)
            }}>
            <img src="./images/link.svg" alt="view more" />
          </a>
        </Slide>

        )
      })}

      </Slider>
      {openedPopup != 0 && <ModalDefault handleClose={closePopup} data={popupData} />}

      <SliderNavigation>
        <FiChevronLeft onClick={moveLeft} />
        <FiChevronRight onClick={moveRight} />
      </SliderNavigation>

    </Container>
  </Testimonials>
  )
}

export default WhatClientSay