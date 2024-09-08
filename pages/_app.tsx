import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import { ConfigStoreProvider } from '@/providers/quiz-config-store-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ConfigStoreProvider>
        <Component {...pageProps} />
      </ConfigStoreProvider>
    </>
  );
}
