import React from 'react';
import { Container } from "./styles/Container.styled";
import { Stories, StorieCard, StorieImage, StorieTag, StorieTitle } from "./styles/OurStories.styled";
import { OurStoriesData } from "./data/OurStoriesData";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SliderNavigation } from './styles/Testimonials.styled';

const OurStories = () => {
    const slider = React.useRef();

    function moveLeft () {
      slider.current.slickPrev();

    }
    function moveRight () {
      slider.current.slickNext();
    }

    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    <Stories>
      <Container>
        <h2>Our stories</h2>

        <Slider {...settings} ref={slider}>
        {OurStoriesData.map((item) => {
            return (
            <StorieCard key={Math.random()}>
                <a href={item.StorieHref}><StorieImage src={item.StorieImg} alt={item.StorieTitle} /></a>
                <StorieTag>{item.StorieTag}</StorieTag>
                <StorieTitle>{item.StorieTitle}</StorieTitle>
            </StorieCard>
            )
        })}
        </Slider>

        <SliderNavigation>
          <FiChevronLeft onClick={moveLeft} />
          <FiChevronRight onClick={moveRight} />
        </SliderNavigation>
          
      </Container>
    </Stories>
    )
}

export default OurStories