import { Container, Flex } from './styles/Container.styled';
import { FooterSection, Col5, Socials, Col7, Col4, Col12, FooterLogo, LinkedIn } from './styles/Footer.styled';
import { FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from 'react';


const Footer = () => {
  const [text, setText] = useState("contact@devxdigital.com");
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
      setIsClient(true);
      if(isClient) {
          setIsMobile(window.matchMedia("only screen and (max-width: 760px)").matches)
      }
  }, [isClient]);

  return (
    <FooterSection>
      <Container> 
        <Flex>
          <Col5>
            <FooterLogo width="260" src="./images/devxdigital_white.svg" role="img" alt="DevX Digital" />

            <Socials>
              <a href="https://www.facebook.com/devxdigital/" target="_blank" rel="noopener noreferrer">
                <LinkedIn src="./images/socials/v1/facebook.png" alt="Devx Digital Facebook Profile" />
              </a>
              <a href="https://twitter.com/devxdigital/" target="_blank" rel="noopener noreferrer">
                <LinkedIn src="./images/socials/v1/twitter.png" alt="Devx Digital Twitter Profile" />
              </a>
              <a href="https://www.linkedin.com/company/devx-digital/" target="_blank" rel="noopener noreferrer">
                <LinkedIn src="./images/socials/v1/linkedin.png" alt="Devx Digital LinkedIn Profile" />
              </a>
              {/* <a href="https://www.youtube.com/channel/UCe4zPd1U-WyWDoNDg1qah-w" target="_blank" rel="noopener noreferrer">
                <LinkedIn src="./images/socials/v1/youtube.png" alt="Devx Digital Youtube Channel" />
              </a> */}
            </Socials>
            <p>© 2023 Devx Digital. All rights reserved.</p>
            <p>Leave us a <a href="https://clutch.co/profile/devx-digital#reviews/" target="_blank" rel="noopener noreferrer">review on Clutch</a>.</p>
          </Col5>
          <Col7>
            <Flex className="Zontainer">
              <Col4>
                <h4>Contact</h4>
                <ul>
                  <li><a href="/meet-us/">Meet Us</a></li>
                  <li><a href="/contact-us/">Contact Us</a></li>
                  <li><span>Bucharest, Romania</span></li>
                  <li><a href={`mailto:${text}`}>{text}</a></li>
                </ul>
              </Col4>
              <Col4>
                <h4>Services</h4>
                <ul>
                  <li><span onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "full-stack-dev" : "full-stack"}`}>Full-Stack Development</span></li>
                  <li><span onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "mobile-dev" : "mobile-development"}`}>Mobile Development</span></li>
                  <li><span onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "web3-dev" : "web3-development"}`}>Blockchain Development</span></li>
                  <li><span onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "qa-app" : "qa-app-testing"}`}>QA and App Testing</span></li>
                </ul>
              </Col4>
              <Col4>
                <h4>Utils</h4>
                <ul>
                  <li><a href="https://devxdigital.com/">Blog</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/terms-and-conditions/">Terms & Conditions</a></li>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="/cookie-policy/">Cookie Policy</a></li>
                </ul>
              </Col4>
            </Flex>
          </Col7>
        </Flex>
      </Container>

      <a href="#" className="totop" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        ><span><FiChevronUp /></span></a>

    </FooterSection> 
  )
}

export default Footer