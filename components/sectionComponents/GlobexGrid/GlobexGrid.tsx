import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import styles from "./GlobexGrid.module.scss";

interface GridProps {
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  imageFour?: string;
  imageFive?: string;
  imageSix?: string;
  gap?: string;
  grid: "random" | "3col" | "4col";
  children?: React.ReactNode;
}

const GlobexGrid = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  grid,
  children,
  gap,
}: GridProps) => {
  const router = useRouter();
  return grid == "random" ? (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${imageOne})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
      <div
        style={{ backgroundImage: `url(${imageTwo})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
      <div
        style={{ backgroundImage: `url(${imageThree})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
      <div
        style={{ backgroundImage: `url(${imageFour})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
      <div
        style={{ backgroundImage: `url(${imageFive})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
      <div
        style={{ backgroundImage: `url(${imageSix})` }}
        onClick={() => {
          router.push(Routes.products);
        }}
      />
    </div>
  ) : grid == "3col" ? (
    <div className={styles.threeCol} style={{ gap: `${gap}` }}>
      {children}
    </div>
  ) : (
    <div className={styles.fourCol} style={{ gap: `${gap}` }}>
      {children}
    </div>
  );
};

export default GlobexGrid;
