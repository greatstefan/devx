import { Container, Flex } from './styles/Container.styled';
import { WhatMakesUsUnique, UniqueBox, UniqueImg, UniqueThumb } from './styles/MakeUsUnique.styled';

const MakesUsUnique = () => {
  return (
    <WhatMakesUsUnique>
      <Container>
        <h2>What Makes Us Unique</h2>
        
        <Flex className="space-between">
            <UniqueBox>
                <UniqueThumb>
                    <UniqueImg src="./images/makesusunique/our_mission.svg" alt="Our Mission" />
                </UniqueThumb>
                <h4>Our Mission</h4>
                <span>Big Tech. Huge Mission.</span>
                <i>We desire to reach our finest job with the utmost correctness and precision. Because we believe that our customers&apos; success is 90% integral to our own, we make it a priority to work and help them achieve the business objectives at their best.</i>
            </UniqueBox>
            <UniqueBox>
                <UniqueThumb>
                    <UniqueImg src="./images/makesusunique/our_vision.svg" alt="Our Vision" />
                </UniqueThumb>
                <h4>Our Vision</h4>
                <span>We operate. We grow. We succeed.</span>
                <i>Our vision is to become the IT industry&apos;s go-to developer of trustworthy, high-quality, and user-friendly software. The goal is to grow into a full-service IT solutions supplier and provide the premier IT-enabled services for businesses.</i>
            </UniqueBox>
            <UniqueBox>
                <UniqueThumb>
                    <UniqueImg src="./images/makesusunique/our_values.svg" alt="Our Values" />
                </UniqueThumb>
                <h4>Our Values</h4>
                <span>Cooperation and Collaboration.</span>
                <i>We demand the best from ourselves and work hard to provide results that are good enough to compete with the highest standards on the market. We give our all, bringing the A-game and doing the best with real joy for our job with talents, skills, and high energy.</i>
            </UniqueBox>
        </Flex>
      </Container>
    </WhatMakesUsUnique>
  )
}

export default MakesUsUnique