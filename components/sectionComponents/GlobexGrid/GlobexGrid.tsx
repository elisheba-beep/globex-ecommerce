import styles from './GlobexGrid.module.scss';

interface GridProps{
    imageOne? : string
    imageTwo? : string
    imageThree? : string
    imageFour? : string
    imageFive? : string
    imageSix? : string
    grid: 'random' | '3col' | '4col'
    children?: React.ReactNode
}

const GlobexGrid = ({imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, grid, children}:GridProps) => {
  return (
    grid == 'random' ? 
  (  <div className={styles.container}>
        <div style={{backgroundImage: `url(${imageOne})`}}/>
        <div style={{backgroundImage: `url(${imageTwo})`}}/>
        <div style={{backgroundImage: `url(${imageThree})`}}/>
        <div style={{backgroundImage: `url(${imageFour})`}}/>
        <div style={{backgroundImage: `url(${imageFive})`}}/>
        <div style={{backgroundImage: `url(${imageSix})`}}/>
       
    </div>) : grid == '3col' ?( <div className={styles.threeCol}>{children}</div>) : (<div className={styles.fourCol}>{children}</div>)
  )
}

export default GlobexGrid