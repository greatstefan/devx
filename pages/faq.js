import { NextSeo } from "next-seo";
import FaqSection from "../components/FaqSection.module";
import { useRouter } from 'next/router';
 
export default function FAQ() {
    const router = useRouter();
    const canonicalUrl = `https://devx.digital${router.asPath}/`;

    return (
      <>
        <NextSeo
          title="Frequently Asked Questions - DevX Digital"
          description="Explore the frequently asked questions about DevX Digital's services, capabilities, and processes. Get answers to common inquiries and learn more about how we can help your business succeed in the digital landscape."
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            title: "Frequently Asked Questions - DevX Digital",
            description: "Explore the frequently asked questions about DevX Digital's services, capabilities, and processes. Get answers to common inquiries and learn more about how we can help your business succeed in the digital landscape.",
            images: [
              {
                url: 'https://devx.digital/images/lets_connect.svg',
                width: 1200,
                height: 630,
                alt: 'Frequently Asked Questions - DevX Digital', 
              },
            ],
            site_name: 'DevX Digital',
          }}
        />

        <FaqSection titleTag="h2" limitItems={false} />
      </>
    )
}
