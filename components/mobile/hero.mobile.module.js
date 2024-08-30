import styled from 'styled-components';
import HomeHeroBanner from '../../public/images/heros/homepage_hero_banner.svg';
import Wedoit from '../../public/images/heros/howedoit_herobanner.svg';
import Ourservices from '../../public/images/heros/our_services.svg';
import Casestudies from '../../public/images/heros/case_studies_hero_banner.svg';
import ECommerce from '../../public/images/heros/ecommerce-illustration.svg';

const MHero = ({title, description, image}) => {
    return (
        <MSection>
            <h1>{title}</h1>
            {image == "home" && <HomeHeroBanner role="img" alt="Let’s create something special together" />}
            {image == "ourservices" && <Ourservices role="img" alt="Creation of scalable and adaptable apps" />}
            {image == "wedoit" && <Wedoit role="img" alt="Individualization for every project" />}
            {image == "casestudies" && <Casestudies role="img" alt="Be Part of Our Partners’ Success" />}
            {image == "ecommerce" && <ECommerce role="img" alt="eCommerce Services DevX Digital" />}
            <p>{description}</p>
        </MSection> 
    )
}

export default MHero;

const MSection = styled.section`    
    text-align: center;
    background: ${({ theme }) => theme.colors.hero};
    padding: ${({ theme }) =>theme.sections.padding.mobile};

    @media (min-width: 769px) {
        display: none;
    }

    h1 {
        ${({ theme }) => theme.heading.mobile.h1};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 900;
        letter-spacing: -0.5px;
        margin-bottom: 24px;

        span {
            position: relative;
            display: inline-block;
            z-index: 1;
            color: ${({ theme }) => theme.colors.blue};

            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 23px;
                position: absolute;
                bottom: 4px;
                left: 0;
                z-index: -1;
                background: ${({ theme }) => theme.colors.cyan};
            }
        }
    }
    
    p {}
    
    svg {
        max-width: 221px;
        margin: 0 auto 24px;
    }
`