import Head from "next/head";
import React from "react";
import GlobexAppBar from "../GlobexAppBar/GlobexAppBar";
import GlobexFooter from "../GlobexFooter/GlobexFooter";
import styles from "./GlobexPage.module.scss";

interface PageProps {
  children: React.ReactNode;
}

const GlobexPage = ({ children }: PageProps) => {
  return (
    <div>
      <Head>
        <title>Globex</title>
        <meta name="description" content="Globex e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GlobexAppBar />
        {children}
        <GlobexFooter />
      </div>
    </div>
  );
};

export default GlobexPage;
