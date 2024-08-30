import GlobalStyles from '../components/styles/Global'
import Head from 'next/head';
import Header from './Header.module';
import Footer from './Footer.module';

function Layout({ children, canonicalUrl, pageTitle, pageDescription }) { 
    return (
        <>      
        <GlobalStyles />
        <Head canonicalUrl={canonicalUrl}>
            <title>{pageTitle || "devx.digital"}</title>
            <meta name="description" content={pageDescription || "devx.digital by Stefan I."} />
            <link rel="icon" href="/favicon.ico" />  

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        </Head>             
        <Header></Header>
        {children}
        <Footer></Footer>
        </>
    )
}

export default Layout