import React, { useEffect, useState } from "react";
import logoBlue from "/public/images/logoBlue.png";
import imageOne from "/public/images/image-one.png";
import styles from "./GlobexAppBar.module.scss";
import Image from "next/image";
import GlobexSearch from "../../elements/GlobexSearch/GlobexSearch";
import { IoMdCart, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import GlobexUser from "../../elements/GlobexUser/GlobexUser";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";

const GlobexAppBar = () => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  const handleClick = () => {
    router.push(Routes.home);
  };
  useEffect(() => {
    router.pathname == "/" ?? handleClick;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick]);

  return (
    <div className={styles.container}>
      <Image
        src={logoBlue}
        alt="logo"
        width={57}
        height={48}
        onClick={handleClick}
        className={styles.image}
      />
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li style={{textDecoration: `${router.asPath == '/products' ? 'underline' : ''}`}} onClick={()=>{
          router.push(Routes.products)
        }}>Products</li>
        <li>Contact Us</li>
      </ul>
      <GlobexSearch />
      <div>
        {favorite ? (
          <IoMdHeart className={styles.icon} onClick={handleFavorite} />
        ) : (
          <IoMdHeartEmpty className={styles.icon} onClick={handleFavorite} />
        )}

        <IoMdCart className={styles.icon} />
        <GlobexUser userName="Anne Doe" src={imageOne} />
      </div>
    </div>
  );
};

export default GlobexAppBar;
