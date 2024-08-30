import { Container } from "./styles/Container.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TheTeam, Slide, Image } from "./styles/TheTeam.styled";
import { OurTeamData } from "./data/OurTeamData";

const OurTeam = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: true, 
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true 
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true 
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
    };
    return (
        <TheTeam>
            <Container>
                <h2>Unconventional. Self-motivated. Committed</h2>
                <p>We’re more than a service provider. Technology is a manner of life and the web is our playing field!</p>

                <Slider {...settings}>
                {OurTeamData.sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                  }).map((item, index) => {
                    return (
                      <Slide key={index}>
                        <div className="innerSlider">
                          <Image src={item.image} alt={item.name} />
                          <div>
                            <p>{item.name}</p>
                            <span>{item.function}</span>
                            <i>{item.skills}</i>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </Slider>
            </Container>
        </TheTeam>
    )
}

export default OurTeam