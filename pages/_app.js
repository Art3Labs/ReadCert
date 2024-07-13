import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';



function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <title>ReadCert</title>
        <meta name='description' content='Certify your completed books' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />       
      </Head>
      <Script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/e361e85ecf130cbbf91183a7068886fb.js"></Script>
      <Component {...pageProps} />
      <Analytics />
    
    </>
  );
}

export default MyApp;
