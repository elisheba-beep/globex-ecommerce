import React, { useState } from "react";
import { IoIosStar, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiFilter3Fill } from "react-icons/ri";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexProductFilters from "../../sectionComponents/GlobexProductFilters/GlobexProductFilters";
import styles from "./ProductPage.module.scss";
import one from "/public/images/gridSix.png";
import two from "/public/images/gridSeven.png";
import three from "/public/images/gridEight.png";
import four from "/public/images/gridThree.png";
import five from "/public/images/guy.png";
import six from "/public/images/image-five.png";
import seven from "/public/images/image-four.png";
import eight from "/public/images/image-one.png";
import nine from "/public/images/image-six.png";
import ten from "/public/images/image-three.png";
import eleven from "/public/images/image-two.png";
import twelve from "/public/images/gridNine.png";

export const images = [
  {
    id: 0,
    url: one,
    brand: "Forever 21",
    newPrice: "Rs. 700",
    oldPrice: "Rs. 1000",
    discount: "30%",
    product: "Knit Tops",
  },
  {
    id: 1,
    url: two,
    brand: "Here&Now",
    newPrice: "Rs. 400",
    oldPrice: "Rs. 800",
    discount: "50%",
    product: "Tees",
  },
  {
    id: 2,
    url: three,
    brand: "Tokyo Talkies",
    newPrice: "Rs. 700",
    oldPrice: "Rs. 1000",
    discount: "30%",
    product: "Two Piece",
  },
  {
    id: 3,
    url: four,
    brand: "Levis",
    newPrice: "Rs. 1200",
    oldPrice: "Rs. 1500",
    discount: "20%",
    product: "Cargo Jacket",
  },
  {
    id: 4,
    url: five,
    brand: "Forever 21",
    newPrice: "Rs. 1250",
    oldPrice: "Rs. 1400",
    discount: "11%",
    product: "Mens Biker Jacket",
  },
  {
    id: 5,
    url: six,
    brand: "Here&Now",
    newPrice: "Rs. 370",
    oldPrice: "Rs. 640",
    discount: "42%",
    product: "Sweaters",
  },
  {
    id: 6,
    url: seven,
    brand: "Tokyo Talkies",
    newPrice: "Rs. 1800",
    oldPrice: "Rs. 3600",
    discount: "50%",
    product: "Womens Ball Gown",
  },
  {
    id: 7,
    url: eight,
    brand: "Roadster",
    newPrice: "Rs. 1200",
    oldPrice: "Rs. 1500",
    discount: "20%",
    product: "Womens Denim Jacket",
  },
  {
    id: 8,
    url: nine,
    brand: "Tokyo Talkies",
    newPrice: "Rs. 700",
    oldPrice: "Rs. 2100",
    discount: "66%",
    product: "International Wears",
  },
  {
    id: 9,
    url: ten,
    brand: "Levis",
    newPrice: "Rs. 700",
    oldPrice: "Rs. 1000",
    discount: "30%",
    product: "Shirts",
  },
  {
    id: 10,
    url: eleven,
    brand: "Forever 21",
    newPrice: "Rs. 1100",
    oldPrice: "Rs. 1300",
    discount: "15%",
    product: "Mens Biker Jacket",
  },
  {
    id: 11,
    url: twelve,
    brand: "Levis",
    newPrice: "Rs. 800",
    oldPrice: "Rs. 1000",
    discount: "20%",
    product: "Mens Shirts",
  },
];

const ProductPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const handleClick = () => {
    setShowFilters(prev=> !prev);
  }
  return (
    <GlobexPage>
      <div className={styles.container}>
        {showFilters && <GlobexProductFilters />}
        
        <div className={styles.products}>
          <div className={styles.sorting}>
            <h3>
              Filters{" "}
              <span>
                {" "}
                <RiFilter3Fill onClick={handleClick}/>
              </span>{" "}
            </h3>
            <h3>
              Sort by{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>{" "}
            </h3>
          </div>
          <GlobexGrid grid={showFilters ? '3col' : '4col'} gap="20px">
            {images.map((image) => {
              return (
                <GlobexCard key={image.id} src={image.url} display="block">
                  <h3>{image.product}</h3>
                  <div className={styles.brand}>
                    <p>{image.brand}</p>
                    <div className={styles.rating}>
                      <p>4.4 </p>
                      <IoIosStar />
                    </div>
                  </div>
                  <GlobexPrice
                    newPrice={image.newPrice}
                    oldPrice={image.oldPrice}
                    discount={image.discount}
                  />
                </GlobexCard>
              );
            })}
          </GlobexGrid>
        </div>
      </div>
    </GlobexPage>
  );
};

export default ProductPage;
