import data from '@/data';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NextSeo
        canonical={data.website}
        defaultTitle={data.name}
        description={data.about}
        title={data.name}
        titleTemplate={data.name}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
