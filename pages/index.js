import Hero from '../components/Hero.module';
import OurServices from '../components/Services.module';
import WhatClientSay from '../components/Testimonials.module';
import CaseStudies from '../components/CaseStudies.module';
import MakesUsUnique from '../components/WhatMakesUsUnique.module';
import FaqSection from '../components/FaqSection.module';
import ContactUs from '../components/LetsConnect.module';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  // Corrected to use backticks for template literal
  const canonicalUrl = `https://devx.digital${router.asPath}`;

  return ( 
    <>
      <NextSeo
        title="DevX Digital: Accelerating Your Business Through Innovative Technology Solutions"
        description="At DevX Digital, we redefine digital strategy with our cutting-edge technology implementation and optimization services. Specializing in digital transformation, our expertise spans modernization, innovation, and engineering to propel businesses into the digital age. Discover how we can accelerate your digital journey, enabling progress and competitive advantage in a constantly evolving digital landscape."
        
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "DevX Digital: Accelerating Your Business Through Innovative Technology Solutions",
          description: "At DevX Digital, we redefine digital strategy with our cutting-edge technology implementation and optimization services. Specializing in digital transformation, our expertise spans modernization, innovation, and engineering to propel businesses into the digital age. Discover how we can accelerate your digital journey, enabling progress and competitive advantage in a constantly evolving digital landscape.",
          images: [
            {
              url: 'https://devx.digital/images/heros/homepage_hero_banner.svg',
              width: 1200,
              height: 630,
              alt: 'DevX Digital: Accelerating Your Business Through Innovative Technology Solutions',
            },
          ],
          site_name: 'DevX Digital',
        }}
      />
 
      <Hero page="Home" />
      <OurServices />
      <WhatClientSay />
      <CaseStudies />
      <MakesUsUnique />
      <FaqSection titleTag="h2" limitItems={true} />
      <ContactUs titleTag="h2" />
      {/* <OurStories /> */}
    </>
  )
}

export default Home
