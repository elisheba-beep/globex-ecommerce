import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
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

import dealsLogo from "/public/images/deals-logo.png";
import Image from "next/image";
import GlobexScrollable from "../../sectionComponents/GlobexScrollable/GlobexScrollable";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexTestimonials from "../../sectionComponents/GlobexTestimonials/GlobexTestimonials";

import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexServices from "../../elements/GlobexServices/GlobexServices";
import { GlobexAbout } from "../../sectionComponents/GlobexAbout";
import GlobexBlogs from "../../sectionComponents/GlobexBlogs/GlobexBlogs";

const images = [
  {
    left: "images/woman.png",
    right: "images/brownImg.png",
    id: 0,
  },
  {
    left: "images/gridThree.png",
    right: "images/brownImg.png",
    id: 1,
  },
  {
    left: "images/image-five.png",
    right: "images/brownImg.png",
    id: 2,
  },
  {
    left: "images/image-six.png",
    right: "images/brownImg.png",
    id: 3,
  },
];

interface SpotlightProps{
  type: 'half' | 'full',
  right: string,
  color: string,
  variant: string,
  heading: string,
  left?: string
}
interface Spotlight extends Array<SpotlightProps>{}

const spotlight:Spotlight = [
  {
    right: "images/full-screen.png",
    color: "#FFFFFF",
    variant: "white",
    heading: "FOREVER 21",
    type: 'full'
  },
  {
    type: 'half',
    left: "images/gridThree.png",
    right: "images/greenImg.png",
    color: "#FFFFFF",
    variant: "white",
    heading: "FOREVER 21",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function interval() {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }

      return currentIndex;
    }
    function spotlight() {
      if (currentIndex === 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(1);
      }
    }

    const intervalId = setInterval(interval, 5000);
    const spotlightId = setInterval(spotlight, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(spotlightId);
    };
  }, [currentIndex]);

  return (
    <GlobexPage>
      <GlobexDiscount />
      <GlobexCTA
        heading="PRADA"
        left={images[currentIndex].left}
        right={images[currentIndex].right}
        variant="black"
        type="half"
      />
      <div className={styles.bottomDots}>
        {images.map((image) => {
          return (
            <button
              key={image.id}
              style={{
                backgroundColor: `${
                  image.id == currentIndex ? "#002482" : "#c4c4c4"
                }`,
              }}
            />
          );
        })}
      </div>
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
            <h3>Men&apos;s Biker Jacket</h3>
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
            <h3>Baggy Shirt</h3>
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
            <h3>Dinner Dress</h3>
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
        type={spotlight[currentIndex].type}
        right={spotlight[currentIndex].right}
        color={spotlight[currentIndex].color}
        variant={spotlight[currentIndex].variant}
        heading={spotlight[currentIndex].heading}
        left={spotlight[currentIndex].left}
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

      <GlobexTestimonials />
      <div className={styles.container}>
        <GlobexSubHeading subHeading="Featured Blogs" />
        <GlobexBlogs />
        <div className={styles.center}>
          <GlobexButton variant="black">View all</GlobexButton>
        </div>
      </div>
      <div className={styles.services}>
        <GlobexServices />
        <GlobexAbout />
      </div>
    </GlobexPage>
  );
};

export default HomePage;
