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
  gap
}: GridProps) => {
  return grid == "random" ? (
    <div className={styles.container}>
      <div style={{ backgroundImage: `url(${imageOne})` }} />
      <div style={{ backgroundImage: `url(${imageTwo})` }} />
      <div style={{ backgroundImage: `url(${imageThree})` }} />
      <div style={{ backgroundImage: `url(${imageFour})` }} />
      <div style={{ backgroundImage: `url(${imageFive})` }} />
      <div style={{ backgroundImage: `url(${imageSix})` }} />
    </div>
  ) : grid == "3col" ? (
    <div className={styles.threeCol} style={{gap: `${gap}`}}>{children}</div>
  ) : (
    <div className={styles.fourCol} style={{gap: `${gap}`}}>{children}</div>
  );
};

export default GlobexGrid;
