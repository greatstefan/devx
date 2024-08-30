import { Container, Flex } from './styles/Container.styled';
import { Hero, LeftContent, RightContent} from './styles/Hero.styled';
import HomeHeroBanner from '../public/images/heros/homepage_hero_banner.svg';
import Wedoit from '../public/images/heros/howedoit_herobanner.svg';
import Ourservices from '../public/images/heros/our_services.svg';
import Casestudies from '../public/images/heros/case_studies_hero_banner.svg';
import ECommerce from '../public/images/heros/ecommerce-illustration.svg';
import HeroData from './data/HeroData';
import MHero from './mobile/hero.mobile.module';

const HeroBanner = ({page}) => {
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
          {DesktopData.image == "home" && <HomeHeroBanner role="img" alt="Let’s create something special together" />}
          {DesktopData.image == "ourservices" && <Ourservices role="img" alt="Creation of scalable and adaptable apps" />}
          {DesktopData.image == "wedoit" && <Wedoit role="img" alt="Individualization for every project" />}
          {DesktopData.image == "casestudies" && <Casestudies role="img" alt="Be Part of Our Partners’ Success" />}
          {DesktopData.image == "ecommerce" && <ECommerce role="img" alt="eCommerce Services DevX Digital" />}
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

export default HeroBanner