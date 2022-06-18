import type { NextPage } from "next";
import Head from "next/head";
import LondonTowers from "../src/components/LondonTowers";

const Home: NextPage = () => {
  return (
    <main className="relative min-h-screen bg-sky-100 dark:bg-sky-800">
      <Head>
        <title>London Towers</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LondonTowers />
    </main>
  );
};

export default Home;
