import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import useProduct from "../../../context/productContext";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import styles from "./ProductOpenPage.module.scss";
import { NextPage } from "next";
import GlobexHeading3 from "../../elements/GlobexText/GlobexHeading3/GlobexHeading3";
import { MdFavorite, MdFavoriteBorder, MdStar, MdStarBorder } from "react-icons/md";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";

const ProductOpenPage: NextPage = () => {
  const products = useProduct();

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
                      Special offer <span>get 25% off</span> <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Bank offer <span>get 30% off on Axis Bank Credit Card</span> <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Wallet offer <span>get 40% cashback via Paytm wallet on first transaction</span> <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                    <p>
                      Special offer <span>get 25% off</span> <span className={styles.t_c}>T&C</span>{" "}
                    </p>
                  </div>
                  <div className={styles.addToCart}>
                    <GlobexButton variant="filled">Add to cart</GlobexButton>
                    <div className={styles.favorite}>
                        {favorite ? <MdFavorite onClick={handleFavorite}/>: <MdFavoriteBorder onClick={handleFavorite}/>}
                       
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </GlobexPage>
  );
};

export default ProductOpenPage;
