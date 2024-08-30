// pages/_app.js
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import theme from '../components/data/settings';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { useRouter } from 'next/router';
import Hotjar from '@hotjar/browser';
import './../styles/globals.css';
import Script from 'next/script'; 
 
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://www.devx.digital${router.asPath}`;

  // Initialize Hotjar
  const siteId = 3527429; // Use your actual Hotjar site ID
  const hotjarVersion = 6;
  if (typeof window !== 'undefined') {
    Hotjar.init(siteId, hotjarVersion);
  }

  return (
    <ThemeProvider theme={theme}> 
      <>
        <Script
          src="https://cdn-cookieyes.com/client_data/e451b859d6613a6c05a71c9d/script.js"
          strategy="afterInteractive"
          id="cookieyes"
          type="text/javascript"
        />
        <GoogleAnalytics measurementId="G-3217M6MQY0" />
        {Component.hasCustomLayout ? ( 
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </>
    </ThemeProvider>
  );
}

export default MyApp;
