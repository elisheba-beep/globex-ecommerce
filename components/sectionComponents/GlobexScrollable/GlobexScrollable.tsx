import React from "react";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import styles from "./GlobexScrollable.module.scss";
import guy from "/public/images/guy.png";
import dealsLogo from "/public/images/deals-logo.png";
import Image from "next/image";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexScrollButtons from "./GlobexScrollButtons/GlobexScrollButtons";

const GlobexScrollable = () => {
  return (
    <div>
      <div className={styles.buttons}>
        <GlobexScrollButtons />
      </div>
      <div  className={styles.container}>

      <GlobexCard src={guy} alt="trending-deal" display="reverse">
        <div className={styles.box}>
          <Image src={dealsLogo} alt="logo" />
          <h3>Min 60% off</h3>
          <GlobexButton variant="black">Explore</GlobexButton>
        </div>
      </GlobexCard>
      <GlobexCard src={guy} alt="trending-deal" display="reverse">
        <div className={styles.box}>
          <Image src={dealsLogo} alt="logo" />
          <h3>Min 60% off</h3>
          <GlobexButton variant="black">Explore</GlobexButton>
        </div>
      </GlobexCard>
      <GlobexCard src={guy} alt="trending-deal" display="reverse">
        <div className={styles.box}>
          <Image src={dealsLogo} alt="logo" />
          <h3>Min 60% off</h3>
          <GlobexButton variant="black">Explore</GlobexButton>
        </div>
      </GlobexCard>
      </div>
    </div>
  );
};

export default GlobexScrollable;
