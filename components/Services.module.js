import { Container } from './styles/Container.styled';
import { Services, ServicesBlock, Flex, SbThumb, SbDescription, SbLine, SbIcon } from './styles/Services.styled';

import { useEffect, useState } from 'react';

const OurServices = () => {

    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
        if(isClient) {
            setIsMobile(window.matchMedia("only screen and (max-width: 760px)").matches)
        }
    }, [isClient]);
    
  return (
    <Services>
        <Container>
            <h2>Our Services</h2>
            <p>
                In today&apos;s market, competition is fierce. To get noticed, your app must be visually appealing and functionally perfect. <br />
                That&apos;s why you need us. We're touching all the seven qualities of <i>extraordinary</i> software, with emphasys of user experience.
            </p>

            <Flex>
                <ServicesBlock onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "full-stack-dev" : "full-stack"}`}>
                    <SbThumb bg="#3976EE">
                        <SbIcon><img src="./images/fullstack-icon.svg" alt="Full Stack Development" /></SbIcon>
                        <SbLine><img src="./images/thumb-line.svg" alt="separator" /></SbLine>
                    </SbThumb>
                    <SbDescription>
                        <h4>Full Stack <br />Development</h4>
                    </SbDescription>
                </ServicesBlock>
                <ServicesBlock onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "mobile-dev" : "mobile-development"}`}>
                    <SbThumb bg="#FF5970">
                        <SbIcon><img src="./images/mobile-icon.svg" alt="Mobile Development" /></SbIcon>
                        <SbLine><img src="./images/thumb-line.svg" alt="separator" /></SbLine>
                    </SbThumb>
                    <SbDescription>
                        <h4>Mobile <br />Development</h4>
                    </SbDescription>
                </ServicesBlock>
                <ServicesBlock onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "web3-dev" : "web3-development"}`}>
                    <SbThumb bg="#FFD966">
                        <SbIcon><img src="./images/web3-icon.svg" alt="Web3 Development" /></SbIcon>
                        <SbLine><img src="./images/thumb-line.svg" alt="separator" /></SbLine>
                    </SbThumb>
                    <SbDescription>
                        <h4>Web3 <br />Development</h4>
                    </SbDescription>
                </ServicesBlock>
                <ServicesBlock onClick={() => window.location.href = `/our-services#scroll=${isMobile ? "qa-app" : "qa-app-testing"}`}>
                    <SbThumb bg="#001B4F">
                        <SbIcon><img src="./images/qa-icon.svg" alt="QA and App Testing" /></SbIcon>
                        <SbLine><img src="./images/thumb-line.svg" alt="separator" /></SbLine>
                    </SbThumb>
                    <SbDescription>
                        <h4>QA and <br />App Testing</h4>
                    </SbDescription>
                </ServicesBlock>
            </Flex>
        </Container>
    </Services>
  )
}

export default OurServices