import { Container, Flex } from './styles/Container.styled';
import { Hero, LeftContent, RightContent} from './styles/Hero.styled';

import ECommerce from '../public/images/heros/ecommerce-illustration.svg';
import HeroData from './data/HeroData';
import MHero from './mobile/hero.mobile.module';

const TocHeroBanner = ({page}) => {
  const pageObject = HeroData[page];
  const DesktopData = pageObject.Desktop;
  const MobileData = pageObject.Mobile;
  
  return (
  <>
  <Hero>
    <Container>
      <Flex className="align-center space-between">
        <LeftContent>
          <h1>{DesktopData.title}</h1>
          <p>{DesktopData.desc}</p>
        </LeftContent>
        <RightContent>
          {DesktopData.image == "ECommerce" && <ECommerce role="img" alt="eCommerce Services DevX Digital" />}
        </RightContent>
      </Flex>
    </Container>
  </Hero>
  <MHero 
    title={MobileData.title}
    description={MobileData.desc}
    image={MobileData.image} />
  </>
  )
}

export default TocHeroBanner