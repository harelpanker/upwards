import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://api.fontshare.com/v2/css?f[]=switzer@600,700,400,300,500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-slate-50 text-slate-900 antialiased font-switzer'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
