import { useRouter } from 'next/router';
import Hero from "../components/Hero.module";
import LetsConnect from "../components/LetsConnect.module";
import FaqSection from "../components/FaqSection.module";
import DetailedCaseStudies from "../components/DetailedCaseStudies.module";
import { NextSeo } from "next-seo";

function Studies() {
  const router = useRouter();
  const canonicalUrl = `https://devx.digital${router.asPath}/`;

  return (
    <> 
      <NextSeo
        title="DevX - Success Stories & Expertise Illustrated"
        description="Dive deep into a series of compelling case studies by DevX Digital, where each story is a journey of innovation and digital transformation. Witness how we've partnered with businesses across sectors to tackle complex challenges, leveraging cutting-edge technology and strategic insight to drive growth, optimize operations, and create lasting impact. Explore our portfolio to see how we turn possibilities into realities, shaping the future of industries."
        
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "DevX - Success Stories & Expertise Illustrated",
          description: "Dive deep into a series of compelling case studies by DevX Digital, where each story is a journey of innovation and digital transformation. Witness how we've partnered with businesses across sectors to tackle complex challenges, leveraging cutting-edge technology and strategic insight to drive growth, optimize operations, and create lasting impact. Explore our portfolio to see how we turn possibilities into realities, shaping the future of industries.",
          images: [
            {
              url: 'https://devx.digital/images/heros/case_studies_hero_banner.svg',
              width: 1200,
              height: 630,
              alt: 'DevX - Success Stories & Expertise Illustrated',
            },
          ],
          site_name: 'DevX Digital',
        }}
      />

      <Hero page="CaseStudies" />
      <DetailedCaseStudies />
      <LetsConnect titleTag="h2" />
      <FaqSection titleTag="h2" limitItems={true} />
    </>
  )
}
  
export default Studies