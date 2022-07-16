import React from 'react'
import styles from './GlobexScrollButtons.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
interface ScrollButtonProps{
  onClickRight?: VoidFunction 
  onClickLeft?: VoidFunction 
}


const GlobexScrollButtons = ({onClickRight, onClickLeft}:ScrollButtonProps) => {
  return (
    <div className={styles.container}>
        <button onClick={onClickLeft}>
            <FaAngleLeft/>
        </button>
        <button onClick={onClickRight}>
            <FaAngleRight/>
        </button>
    </div>
  )
}

export default GlobexScrollButtons