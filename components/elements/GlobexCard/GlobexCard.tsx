import React from "react";
import Image from "next/image";

import styles from "./GlobexCard.module.scss";

interface CardProps {
  src: string | any;
  alt?: string;
  width?: number;
  height?: number;
  display?: "flex" | "block" | "reverse";
  children: React.ReactNode;
}

const GlobexCard = ({
  src,
  alt,
  children,
  width,
  height,
  display,
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        display: `${
          display == "block" ? "block" : display == "flex" ? "flex" : "flex"
        }`,
        flexDirection: `${
          display == "block"
            ? "column"
            : display == "flex"
            ? "row"
            : "row-reverse"
        }`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
        style={{
          borderRadius: `${
            display == "block"
              ? "10px 10px 0 0"
              : display == "flex"
              ? "10px 0 0 10px "
              : "0 10px 10px 0"
          }`,
        }}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default GlobexCard;
