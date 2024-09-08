import type {AppProps} from "next/app";
import Head from 'next/head';
import Layout from "@/components/layout";
import '@/styles/globals.css';
import {ConfigStoreProvider} from "@/providers/quiz-config-store-provider";

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <link rel='icon' href='/favicon.png'/>
    </Head>
    <ConfigStoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigStoreProvider>
  </>;
}
