import Hero from "../components/Hero.module";
import FullStack from "../components/FullStack.module";
import MHero from '../components/mobile/hero.mobile.module';
import { NextSeo } from 'next-seo';
import FaqSection from "../components/FaqSection.module";
import { useRouter } from 'next/router';

function Services() {
  const router = useRouter();
  const canonicalUrl = `https://devx.digital${router.asPath}/`;
 
  return (
  <>
    <NextSeo
      title="Our Services - DevX Digital: Tailored Solutions for Your Success"
      description="Explore the breadth of services offered by DevX Digital to help businesses succeed. From strategic planning to implementation, discover a wide range of solutions tailored to meet the unique needs of your business."
      canonical={canonicalUrl}
      openGraph={{
        url: canonicalUrl,
        title: "Our Services - DevX Digital: Tailored Solutions for Your Success",
        description: "Explore the breadth of services offered by DevX Digital to help businesses succeed. From strategic planning to implementation, discover a wide range of solutions tailored to meet the unique needs of your business.",
        images: [
          {
            url: 'https://devx.digital/images/heros/our_services.svg',
            width: 1200,
            height: 630,
            alt: 'Our Services - DevX Digital: Tailored Solutions for Your Success',
          },
        ],
        site_name: 'DevX Digital',
      }}
    />

    <Hero page="OurServices" />
    <FullStack />
    <FaqSection titleTag="h2" limitItems={true} />
  </>
  )
}
  
export default Services;
