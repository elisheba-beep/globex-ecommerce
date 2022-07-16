import Image from "next/image";
import React from "react";
import logoWhite from "/public/images/logoWhite.png";
import styles from "./GlobexFooter.module.scss";
import GlobexHeading from "../../elements/GlobexText/GlobexHeading/GlobexHeading";
import GlobexEmail from "../../elements/GlobexEmail/GlobexEmail";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";

const GlobexFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logoWhite} alt="logo" width={100} height={80} />
          <GlobexHeading colour="#FFFFFF" heading="Globex" />
        </div>
        <div className={styles.lists}>
          <ul>
            <p>Women</p>
            <li>All women</li>
            <li>Skirts</li>
            <li>T-Shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <p>Men</p>
            <li>All men</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <p>Kids</p>
            <li>All kids</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <p>Shopping</p>
            <li>Your cart</li>
            <li>Your orders</li>
            <li>Compared items</li>
            <li>Wishlist</li>
            <li>Shipping details</li>
          </ul>

          <ul>
            <p>More Links</p>
            <li>Blogs</li>
            <li>Gift center</li>
            <li>Buying guides</li>
            <li>New arrivals</li>
            <li>Clearance</li>
          </ul>

          <ul>
            <p>Stay in Touch</p>
            <li>Stay in touch to get special offers, free giveaways</li>
            <li>and once in a lifetime deals</li>
            <GlobexEmail />
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <div className={styles.socials}>
          <IoLogoFacebook className={styles.social}/>
          <IoLogoInstagram className={styles.social}/>
          <IoLogoWhatsapp className={styles.social}/>
          <IoLogoTwitter className={styles.social}/>
        </div>
      </div>
    </div>
  );
};

export default GlobexFooter;