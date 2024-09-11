import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import { ConfigStoreProvider } from '@/state/providers/quiz-config-store-provider';
import { quizConfig } from '@/mock/quizConfig';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ConfigStoreProvider quizConfig={quizConfig}>
        <Component {...pageProps} />
      </ConfigStoreProvider>
    </>
  );
}
