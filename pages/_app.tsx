import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from 'next/head';
import Layout from "@/components/layout";

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <link rel='icon' href='/favicon.png'/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>;
}
