import FaqSection from '../components/FaqSection.module';
import ContactUs from '../components/LetsConnect.module';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
 
export default function Contact() {
    const router = useRouter();
    const canonicalUrl = `https://devx.digital${router.asPath}/`;

    return (
      <>
        <NextSeo
          title="Contact DevX Digital - Start Transforming Your Business Today"
          description="Embark on a journey of digital transformation with DevX Digital. Reach out to us for a tailored consultation on how our innovative solutions can propel your business forward. Whether you're looking to enhance your digital presence, streamline operations, or unlock new growth opportunities, our team is ready to dive deep into your challenges and craft strategic solutions. Contact us today to learn more about our services and how we can create lasting value together."
          
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            title: "Contact DevX Digital - Start Transforming Your Business Today",
            description: "Embark on a journey of digital transformation with DevX Digital. Reach out to us for a tailored consultation on how our innovative solutions can propel your business forward. Whether you're looking to enhance your digital presence, streamline operations, or unlock new growth opportunities, our team is ready to dive deep into your challenges and craft strategic solutions. Contact us today to learn more about our services and how we can create lasting value together.",
            images: [
              {
                url: 'https://devx.digital/images/lets_connect.svg', 
                width: 1200,
                height: 630,
                alt: 'Contact DevX Digital - Start Transforming Your Business Today',
              },
            ],
            site_name: 'DevX Digital',
          }}
        />

        <ContactUs titleTag="h1" />
        <FaqSection titleTag="h2" limitItems={true} />
      </>
    )
  }
