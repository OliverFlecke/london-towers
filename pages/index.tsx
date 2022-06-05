import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import day from "../public/images/day.png";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>London Towers</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={day} alt="View of London central during daytime" />
    </main>
  );
};

export default Home;
