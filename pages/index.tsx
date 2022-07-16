import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../components/pageComponents/HomePage/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Globex</title>
        <meta name="description" content="Globex e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
