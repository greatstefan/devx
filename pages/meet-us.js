import MakesUsUnique from '../components/WhatMakesUsUnique.module';
import FaqSection from '../components/FaqSection.module';
import ContactUs from '../components/LetsConnect.module';
import FullBanner from '../components/FullBanner.module';
import OurTeam from '../components/OurTeam.module';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

function Meet() {
    const router = useRouter();
    const canonicalUrl = `https://devx.digital${router.asPath}/`;

    return (
      <>
        <NextSeo
          title="Our Team - DevX Digital: Discover the Talent Behind Our Success"
          description="Get to know the individuals who make up our team and drive our success. From our leadership to our dedicated staff, learn about the talented people behind our company and what sets us apart in the industry."
    
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            title: "Our Team - DevX Digital: Discover the Talent Behind Our Success",
            description: "Get to know the individuals who make up our team and drive our success. From our leadership to our dedicated staff, learn about the talented people behind our company and what sets us apart in the industry.",
            images: [
              {
                url: 'https://devx.digital/images/lets_connect.svg',
                width: 1200,
                height: 630,
                alt: 'Our Team - DevX Digital: Discover the Talent Behind Our Success',
              },
            ],
            site_name: 'DevX Digital',
          }}
        />

        <FullBanner
          title={["We are ", <span key={Math.random()}>devx.digital</span>]}
          image="meetus"
        />
        <OurTeam />
        <MakesUsUnique />
        <ContactUs titleTag="h2" />
      </>
    )
}

export default Meet;