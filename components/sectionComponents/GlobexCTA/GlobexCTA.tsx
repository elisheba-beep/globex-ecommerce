import Image from "next/image";
import React from "react";
import styles from "./GlobexCTA.module.scss";
import GlobexHeading from "../../elements/GlobexText/GlobexHeading/GlobexHeading";
import GlobexSubText from "../../elements/GlobexText/GlobexSubText/GlobexSubText";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";

interface CTAProps {
  left?: string | any;
  right?: string | any;
  heading: string;
  variant: any;
  type: 'full' | 'half';
  color?: string
}

const GlobexCTA = ({ left, right, variant, heading, type, color }: CTAProps) =>{
  return (
   
type == 'half' ? 
   ( <div className={styles.container}>
      <div className={styles.image} style={{backgroundImage: `url(${left})`}}/>
      <div className={styles.content} style={{backgroundImage: `url(${right})`}}>
        <GlobexHeading heading={heading} colour={color}/>
        <GlobexSubText subText="Big Fashion Festival" color={color}/>
        <GlobexSubText subText="50% - 80% off" color={color}/>
        <GlobexButton variant={variant}>Explore</GlobexButton>
      </div>
    </div> ): ( <div className={styles.container}>
    <div className={styles.content} style={{backgroundImage: `url(${right})`}}>
      <GlobexHeading heading={heading} colour={color}/>
      <br />
      <GlobexSubText subText="Big Fashion Festival" color={color}/>
      <GlobexSubText subText="50% - 80% off" color={color}/>
      <br />
      <GlobexButton variant={variant}>Explore</GlobexButton>
    </div>
  </div> )
  )
};

export default GlobexCTA;
