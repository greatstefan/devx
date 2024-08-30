import React from 'react';
import { Container } from './styles/Container.styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Studies, Slide, SThumb, SDesc } from './styles/Studies.styled';
import { CSData } from './data/CaseStudiesData';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SliderNavigation } from './styles/Testimonials.styled';

const CaseStudies = () => {
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
    <Studies bg="#FAFAFA">
      <Container>
        <h2>Case Studies</h2>
        <p>Our team at DevX Digital emphasizes true partnership, delivering successful digital solutions across various industries. Our case studies demonstrate our expertise in developing bespoke solutions using advanced technologies, thereby translating into success for our partners.</p>

        <Slider {...settings} ref={slider}>
            {CSData.map((item, index) => {
                return (

                  <Slide key={index} onClick={() => window.location.href = `/case-studies#scroll=${item.id}`}>
                    <SThumb src={item.ProjectThumbnail} alt={item.ProjectName} />
                    <SDesc>
                        <h5>{item.ProjectName}</h5>
                        <i>{item.ProjectTags}</i>
                    </SDesc>
                  </Slide>

                ) 
            })}           
        </Slider>

        <SliderNavigation>
          <FiChevronLeft onClick={moveLeft} />
          <FiChevronRight onClick={moveRight} />
        </SliderNavigation>

      </Container>
    </Studies>
  )
}

export default CaseStudies