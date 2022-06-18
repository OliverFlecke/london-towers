import type { NextPage } from "next";
import Head from "next/head";
import LondonTowers from "../src/components/LondonTowers";
import { Tower } from "../src/components/Tower";

interface HomeProps {
  towers: Tower[];
}

const Home: NextPage<HomeProps> = ({ towers }) => {
  return (
    <main className="relative min-h-screen bg-sky-100 dark:bg-sky-800">
      <Head>
        <title>London Towers</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LondonTowers towers={towers} />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const towers = await (await fetch("http://localhost:3000/api/tower")).json();

  return {
    props: {
      towers,
    },
  };
}
