import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import useProduct from "../../../context/productContext";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import styles from "./ProductOpenPage.module.scss";
import { NextPage } from "next";
import GlobexHeading3 from "../../elements/GlobexText/GlobexHeading3/GlobexHeading3";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdStar,
  MdStarBorder,
} from "react-icons/md";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import ProductReview from "./ProductReview";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import { Routes } from "../../../constants/navigation";
import { IoIosStar } from "react-icons/io";

const steps = ["Product Details", "Specifications", "Ratings & Reviews"];

const specsOne = [
  {
    name: "Sleeve Length",
    sub: "Long Sleeves",
  },
  {
    name: "Print or Pattern Type",
    sub: "Washed",
  },
  {
    name: "Length",
    sub: "Regular",
  },
  {
    name: "Lining Fabric",
    sub: "Unlined",
  },
  {
    name: "Hemline",
    sub: "Straight",
  },
];
const specsTwo = [
  {
    name: "Type",
    sub: "Denim Jacket",
  },
  {
    name: "Collar",
    sub: "Spread Collar",
  },
  {
    name: "Closure",
    sub: "Button",
  },
  {
    name: "Number of Pockets",
    sub: "4",
  },
  {
    name: "Occasion",
    sub: "Casual",
  },
];

const ProductOpenPage: NextPage = () => {
  const products = useProduct();
  const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  const router = useRouter();
  const route = router.asPath;
  const lastItem = parseInt(route.substring(route.lastIndexOf("/") + 1));

  return (
    <GlobexPage>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          <div className={styles.imagesContainer}>
            {products.map((product) => {
              if (product.id == lastItem) {
                return (
                  <div className={styles.productImages}>
                    <Image
                      src={product.url}
                      alt="image"
                      width={150}
                      height={150}
                      className={styles.smallImage}
                    />
                    <Image
                      src={product.url}
                      alt="image"
                      width={150}
                      height={150}
                      className={styles.smallImage}
                    />
                    <Image
                      src={product.url}
                      alt="image"
                      width={150}
                      height={150}
                      className={styles.smallImage}
                    />
                    <Image
                      src={product.url}
                      alt="image"
                      width={150}
                      height={150}
                      className={styles.smallImage}
                    />
                  </div>
                );
              }
            })}
            {products.map((product) => {
              if (product.id == lastItem) {
                return (
                  <div className={styles.mainImage}>
                    <Image
                      src={product.url}
                      alt="image"
                      height={645}
                      width={445}
                      objectFit="cover"
                      className={styles.bigImage}
                    />{" "}
                  </div>
                );
              }
            })}
          </div>
          {products.map((product) => {
            if (product.id == lastItem) {
              return (
                <div className={styles.description}>
                  <GlobexHeading3 heading3={product.product} />
                  <h3>{product.brand}</h3>
                  <p>Sold By : Sellers Name</p>
                  <p>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarBorder /> <span> 4.4 36 Reviews</span>
                  </p>
                  <GlobexPrice
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                  />
                  <h3>Select Size</h3>
                  <p className={styles.sizeChart}>Size chart {">"}</p>
                  <div className={styles.sizes}>
                    <GlobexButton variant="round">XS</GlobexButton>
                    <GlobexButton variant="round">S</GlobexButton>
                    <GlobexButton variant="round">M</GlobexButton>
                    <GlobexButton variant="round">L</GlobexButton>
                    <GlobexButton variant="round">XL</GlobexButton>
                  </div>
                  <h3>Select Color</h3>
                  <div className={styles.sizes}>
                    <Image
                      src={product.url}
                      alt="colors"
                      width={60}
                      height={30}
                      className={styles.colorImg}
                    />
                    <Image
                      src={product.url}
                      alt="colors"
                      width={60}
                      height={30}
                      className={styles.colorImg}
                    />
                    <Image
                      src={product.url}
                      alt="colors"
                      width={60}
                      height={30}
                      className={styles.colorImg}
                    />
                  </div>
                  <div className={styles.offers}>
                    <h3>Best Offers</h3>
                    <p>
                      Special offer <span>get 25% off</span>{" "}
                      <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Bank offer{" "}
                      <span>get 30% off on Axis Bank Credit Card</span>{" "}
                      <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Wallet offer{" "}
                      <span>
                        get 40% cashback via Paytm wallet on first transaction
                      </span>{" "}
                      <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Special offer <span>get 25% off</span>{" "}
                      <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                  </div>
                  <div className={styles.addToCart}>
                    <GlobexButton variant="filled">Add to cart</GlobexButton>
                    <div className={styles.favorite}>
                      {favorite ? (
                        <MdFavorite onClick={handleFavorite} />
                      ) : (
                        <MdFavoriteBorder onClick={handleFavorite} />
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.steps}>
            {steps.map((step, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    if (currentIndex === index) {
                      setSelected(!selected);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  style={{
                    textDecoration: `${
                      currentIndex === index ? "underline" : ""
                    }`,
                    color: `${currentIndex === index ? "#002482" : ""}`,
                  }}
                >
                  {step}
                </p>
              );
            })}
          </div>

          <hr />

          {currentIndex == 0 ? (
            <div className={styles.stepOne}>
              <div>
                <h3>Product Details</h3>
                <p>
                  Blue washed jacket, has a spread collar, 4 pockets, button
                  closure, long sleeves, straight hem
                </p>
              </div>
              <div>
                <h3>Size & Fit</h3>
                <p>The model (height 5&apos;8&quot;) is wearing a size S</p>
              </div>
              <div>
                <h3>Material & Care</h3>
                <p>100% cotton Machine Wash</p>
              </div>
            </div>
          ) : currentIndex == 1 ? (
            <div className={styles.stepTwo}>
              <h3>Specifications</h3>
              <div className={styles.specTable}>
                <div>
                  {specsOne.map((spec, index) => {
                    return (
                      <div className={styles.specItem} key={index}>
                        <p className={styles.specName}>{spec.name}</p>
                        <p className={styles.specSub}>{spec.sub}</p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {specsTwo.map((spec, index) => {
                    return (
                      <div className={styles.specItem} key={index}>
                        <p className={styles.specName}>{spec.name}</p>
                        <p className={styles.specSub}>{spec.sub}</p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.stepThree}>
              <h3>Ratings</h3>
              <h1>
                4.4
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarBorder />
              </h1>
              <p>40 Verified Buyers</p>
              <div>
                {steps.map((step, index) => {
                  return <ProductReview key={index} />;
                })}
              </div>
              <p style={{ color: "#00398F", cursor: "pointer" }}>
                View all Reviews
              </p>
            </div>
          )}
        </div>
        <div className={styles.similarProducts}>
          <GlobexHeading3 heading3="Similar Products" />
          <div className={styles.cards}>
            {products.map((product) => {
              return (
                <GlobexCard
                  key={product.id}
                  src={product.url}
                  width={410}
                  height={301}
                  objectFit="cover"
                  display="block"
                  layout="responsive"
                  onClick={() => {
                    router.push(Routes.products + [product.id]);
                  }}
                >
                  <div className={styles.box}>
                    <h3>{product.product}</h3>
                    <div className={styles.brand}>
                      <p>{product.brand}</p>
                      <div className={styles.rating}>
                        <p>4.4 </p>
                        <IoIosStar />
                      </div>
                    </div>
                    <GlobexPrice
                      newPrice={product.newPrice}
                      oldPrice={product.oldPrice}
                      discount={product.discount}
                    />
                  </div>
                </GlobexCard>
              );
            })}
          </div>
        </div>
        <div className={styles.similarProducts}>
          <GlobexHeading3 heading3="Customers Also Like" />
          <div className={styles.cards}>
            {products.map((product) => {
              return (
                <GlobexCard
                  key={product.id}
                  src={product.url}
                  width={410}
                  height={301}
                  objectFit="cover"
                  display="block"
                  layout="responsive"
                  onClick={() => {
                    router.push(Routes.products + [product.id]);
                  }}
                >
                  <div className={styles.box}>
                    <h3>{product.product}</h3>
                    <div className={styles.brand}>
                      <p>{product.brand}</p>
                      <div className={styles.rating}>
                        <p>4.4 </p>
                        <IoIosStar />
                      </div>
                    </div>
                    <GlobexPrice
                      newPrice={product.newPrice}
                      oldPrice={product.oldPrice}
                      discount={product.discount}
                    />
                  </div>
                </GlobexCard>
              );
            })}
          </div>
        </div>
      </div>
    </GlobexPage>
  );
};

export default ProductOpenPage;