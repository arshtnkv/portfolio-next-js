import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta content="#fff" name="theme-color" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
