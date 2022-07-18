import React, { useState } from "react";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import GlobexFilter from "../../elements/GlobexFilter/GlobexFilter";
import styles from "./GlobexProductFilters.module.scss";
import { IoIosSearch } from "react-icons/io";
import GlobexCheckbox from "../../elements/GlobexCheckbox/GlobexCheckbox";
import GlobexHeading3 from "../../elements/GlobexText/GlobexHeading3/GlobexHeading3";
import { images } from "../../pageComponents/ProductPage";
import { Value } from "sass";

export const brands = [
  {
    name: "Tokyo Talkies",
    number: 206,
    id: 0,
  },
  {
    name: "Roadster",
    number: 26,
    id: 1,
  },
  {
    name: "Here&Now",
    number: 706,
    id: 2,
  },
  {
    name: "Levis",
    number: 64,
    id: 3,
  },
  {
    name: "Forever 21",
    number: 16,
    id: 4,
  },
];
export const prices = [
  {
    range: "Rs 350 to Rs 500",
    number: 206,
    id: 0,
  },
  {
    range: "Rs 500 to Rs 700",
    number: 26,
    id: 1,
  },
  {
    range: "Rs 700 to Rs 1000",
    number: 706,
    id: 2,
  },
  {
    range: "Rs 1000 to Rs 1400",
    number: 64,
    id: 3,
  },
  {
    range: "Rs 1400 to Rs 2000",
    number: 16,
    id: 4,
  },
];
const discount = [
  {
    range: "10% and above",
    number: 206,
    id: 0,
  },
  {
    range: "20% and above",
    number: 26,
    id: 1,
  },
  {
    range: "30% and above",
    number: 706,
    id: 2,
  },
  {
    range: "40% and above",
    number: 64,
    id: 3,
  },
  {
    range: "50% and above",
    number: 16,
    id: 4,
  },
];

interface ProductFilterProps {
  onClick: VoidFunction;
  checked?: boolean;
  value?: any;
  setValue?: any;
}

const GlobexProductFilters = ({
  onClick,
  checked,
  setValue,
}: ProductFilterProps) => {
  const filterBrandProducts = (item: string) => {
    const filteredItem = images.filter((product) => {
      return product.brand === item;
    });
    setValue(filteredItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.heading}>
          <GlobexSubHeading subHeading="Filters" />
          <span>Clear All</span>
        </div>
        <div className={styles.tags}>
          <GlobexFilter tag="Brand" />
          <GlobexFilter tag="Price" />

          <GlobexFilter tag="Discounts" />
        </div>
      </div>
      <hr />

      <div className={styles.section}>
        <div className={styles.heading}>
          <GlobexHeading3 heading3="Brand" />
          <span>
            <IoIosSearch />
          </span>
        </div>
        <div className={styles.checkboxes}>
          {brands.map((brand) => {
            return (
              <GlobexCheckbox
                key={brand.id}
                tag={brand.name}
                number={brand.number}
                onClick={() => {
                  filterBrandProducts(brand.name);
                }}
              />
            );
          })}
          <p className={styles.blueText}>+40 more</p>
        </div>
      </div>

      <hr />

      <div className={styles.section}>
        <div className={styles.heading}>
          <GlobexHeading3 heading3="Price" />
        </div>
        <div className={styles.checkboxes}>
          {prices.map((price) => {
            return (
              <GlobexCheckbox
                key={price.id}
                tag={price.range}
                number={price.number}
                onClick={onClick}
                checked={checked}
              />
            );
          })}
        </div>
      </div>

      <hr />

      <div className={styles.section}>
        <div className={styles.heading}>
          <GlobexHeading3 heading3="Discount Range" />
        </div>
        <div className={styles.checkboxes}>
          {discount.map((discount) => {
            return (
              <GlobexCheckbox
                key={discount.id}
                tag={discount.range}
                number={discount.number}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GlobexProductFilters;
