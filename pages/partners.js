import FaqSection from '../components/FaqSection.module';
import { NextSeo } from 'next-seo';
import Partners from '../components/Partners.module';
import ContactUs from '../components/LetsConnect.module';
import { useRouter } from 'next/router';

export default function PartnersPage() {
  const router = useRouter();
  const canonicalUrl = `https://devx.digital${router.asPath}/`;

  return (
    <>
      <NextSeo
        title="DevX Digital: Partnerships for Success | Drive Results Together"
        description="Partner with DevX Digital for innovative solutions and proven results. Discover our collaborations and cutting-edge technologies that drive success."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "DevX Digital: Partnerships for Success | Drive Results Together",
          description: "Partner with DevX Digital for innovative solutions and proven results. Discover our collaborations and cutting-edge technologies that drive success.",
          images: [
            {
              url: 'https://devx.digital/images/lets_connect.svg', 
              width: 1200,
              height: 630,
              alt: 'DevX Digital: Partnerships for Success | Drive Results Together',
            },
          ],
          site_name: 'DevX Digital',
        }}
      />

      <Partners />
      <ContactUs titleTag="h2" /> 
      <FaqSection titleTag="h2" limitItems={true} />
    </>
  );
}
