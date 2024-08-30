import TocHeroBanner from '../components/toc-hero.module';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
 
function ECommerce() {
  const router = useRouter();
  const canonicalUrl = `https://devx.digital${router.asPath}/`;

  return (
    <>
      <NextSeo
        title="ECommerce Services by DevX Digital - Transform Your Online Business"
        description="Explore DevX Digital's eCommerce services designed to transform your online business. From e-commerce platform development to conversion optimization, we offer comprehensive solutions to enhance your online presence and drive sales."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "ECommerce Services by DevX Digital - Transform Your Online Business",
          description: "Explore DevX Digital's eCommerce services designed to transform your online business. From e-commerce platform development to conversion optimization, we offer comprehensive solutions to enhance your online presence and drive sales.",
        }}
      />

      <TocHeroBanner page="ecommerce" />
    </>
  )
}

export default ECommerce
