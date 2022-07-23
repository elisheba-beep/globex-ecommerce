import React, { useState } from "react";
import { IoIosStar, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiFilter3Fill } from "react-icons/ri";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexProductFilters from "../../sectionComponents/GlobexProductFilters/GlobexProductFilters";
import styles from "./WishlistPage.module.scss";
import GlobexSort from "../../elements/GlobexSort/GlobexSort";
import useProduct from "../../../context/productContext";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { wishlist } from "../ProductOpenPage";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";

const WishlistPage = () => {
  const router = useRouter();
  const products = useProduct();
  const [value, setValue] = useState(products);

  return (
    <GlobexPage>
      <div className={styles.container}>
        <GlobexSubHeading subHeading="My Wishlist"/>
        <GlobexGrid grid="4col" gap="20px">
          {wishlist.map((image) => {
            return (
              <GlobexCard
                key={image.id}
                src={image.url}
                width={410}
                height={301}
                objectFit="cover"
                display="block"
                layout="responsive"
                onClick={() => {
                  router.push(Routes.products + [image.id]);
                }}
              >
                <div className={styles.box}>
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
                </div>
              </GlobexCard>
            );
          })}
        </GlobexGrid>
      </div>
    </GlobexPage>
  );
};

export default WishlistPage;
