import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaLine } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexDiscount from "../../elements/GlobexDiscount/GlobexDiscount";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexCTA from "../../sectionComponents/GlobexCTA/GlobexCTA";
import styles from "./HomePage.module.scss";
import imageOne from "/public/images/image-one.png";
import imageTwo from "/public/images/image-two.png";
import imageThree from "/public/images/image-three.png";
import imageFour from "/public/images/image-four.png";
import imageFive from "/public/images/image-five.png";
import imageSix from "/public/images/image-six.png";
import clothesOne from "/public/images/clothesOne.png";
import clothesTwo from "/public/images/clothesTwo.png";
import clothesThree from "/public/images/clothesThree.png";
import dealsLogo from "/public/images/deals-logo.png";
import Image from "next/image";
import GlobexScrollable from "../../sectionComponents/GlobexScrollable/GlobexScrollable";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexTestimonials from "../../sectionComponents/GlobexTestimonials/GlobexTestimonials";
import GlobexScrollButtons from "../../sectionComponents/GlobexScrollable/GlobexScrollButtons/GlobexScrollButtons";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexServices from "../../elements/GlobexServices/GlobexServices";
import { GlobexAbout } from "../../sectionComponents/GlobexAbout";

const HomePage = () => {
  return (
    <GlobexPage>
      <GlobexDiscount />
      <GlobexCTA
        heading="PRADA"
        left="images/woman.png"
        right="images/brownImg.png"
        variant="black"
        type="half"
      />
      <div className={styles.container}>
        <GlobexSubHeading subHeading="Trending Now" />
        <div className={styles.cards}>
          <GlobexCard src={imageOne} display="block">
            <h3>Women&apos;s Denim Jacket</h3>
            <div className={styles.brand}>
              <p>Brand Name </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard src={imageTwo} display="block">
            <h3>Women&apos;s Denim Jacket</h3>
            <div className={styles.brand}>
              <p>Brand Name </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard src={imageThree} display="block">
            <h3>Women&apos;s Denim Jacket</h3>
            <div className={styles.brand}>
              <p>Brand Name </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard src={imageFour} display="block">
            <h3>Women&apos;s Denim Jacket</h3>
            <div className={styles.brand}>
              <p>Brand Name </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>
        </div>
        <br />
        <br />

        <GlobexSubHeading subHeading="Deals of the Day" />
        <div className={styles.cards}>
          <GlobexCard src={imageOne} display="block">
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard src={imageFive} display="block">
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard src={imageSix} display="block">
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard src={imageTwo} display="block">
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>
        </div>

        <br />
        <br />
        <GlobexSubHeading subHeading="Trending Offers" />
        <GlobexScrollable />
        <br />
        <br />
      </div>
      <GlobexCTA
        type="full"
        right="images/full-screen.png"
        color="#FFFFFF"
        variant="white"
        heading="FOREVER 21"
      />
      <div className={styles.container}>
        <GlobexSubHeading subHeading="Shop by Categories" />
        <br />
        <GlobexGrid
          imageOne="images/gridOne.png"
          imageTwo="images/guy.png"
          imageThree="images/gridFour.png"
          imageFour="images/gridThree.png"
          imageFive="images/gridFive.png"
          imageSix="images/image-one.png"
          grid="random"
        />

        <br />
        <br />
        <GlobexSubHeading subHeading="What Our Customers Say" />
      </div>
      <div className={styles.buttons}>
        <GlobexScrollButtons />
      </div>
      <GlobexTestimonials />
      <div className={styles.container}>
        <GlobexSubHeading subHeading="Featured Blogs" />
        <div className={styles.blogs}>
          <GlobexCard src={clothesOne} alt="featured-blogs" display="flex">
            <div className={styles.box}>
              <p>Blog</p>
              <h3>Discover new ways to decorate your home</h3>
              <p>
                Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
                ...
              </p>
              <h3>By Souha. H</h3>
            </div>
          </GlobexCard>
          <GlobexCard src={clothesTwo} alt="featured-blogs" display="flex">
            <div className={styles.box}>
              <p>Blog</p>
              <h3>Discover new ways to decorate your home</h3>
              <p>
                Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
                ...
              </p>
              <h3>By Souha. H</h3>
            </div>
          </GlobexCard>
          <GlobexCard src={clothesThree} alt="featured-blogs" display="flex">
            <div className={styles.box}>
              <p>Blog</p>
              <h3>Discover new ways to decorate your home</h3>
              <p>
                Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
                ...
              </p>
              <h3>By Souha. H</h3>
            </div>
          </GlobexCard>
        </div>
        <div className={styles.center}>
          <GlobexButton variant="black">View all</GlobexButton>
        </div>
      </div>
      <div className={styles.services}>
        <GlobexServices />
        <GlobexAbout/>
      </div>
    </GlobexPage>
  );
};

export default HomePage;
