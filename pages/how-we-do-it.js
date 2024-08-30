import Hero from "../components/Hero.module";
import Hwedoit from "../components/Hwedoit.module";
import Individualization from "../components/Individualization.module";
import FaqSection from "../components/FaqSection.module";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';

function Hwdi() {
  const router = useRouter();
  const canonicalUrl = `https://devx.digital${router.asPath}/`;
 
  return (
    <>
      <NextSeo
          title="Our Methodology - DevX Digital: Achieving Exceptional Results"
          description="Discover how we consistently deliver successful outcomes for our clients by following our established methodology. From comprehensive research to meticulous execution, learn about our process for delivering exceptional results in the digital landscape."
          
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            title: "Our Methodology - DevX Digital: Achieving Exceptional Results",
            description: "Discover how we consistently deliver successful outcomes for our clients by following our established methodology. From comprehensive research to meticulous execution, learn about our process for delivering exceptional results in the digital landscape.",
            images: [
              {
                url: 'https://devx.digital/images/heros/howedoit_herobanner.svg',
                width: 1200,
                height: 630,
                alt: 'Our Methodology - DevX Digital: Achieving Exceptional Results',
              },
            ],
            site_name: 'DevX Digital',
          }}
        />

      <Hero page="WeDoIt" />
      <Hwedoit />
      <Individualization />
      <FaqSection titleTag="h2" limitItems={true} />
    </>
  )
}

export default Hwdi;
