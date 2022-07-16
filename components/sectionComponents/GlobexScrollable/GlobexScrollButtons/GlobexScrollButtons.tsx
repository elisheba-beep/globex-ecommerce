import React from 'react'
import styles from './GlobexScrollButtons.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const GlobexScrollButtons = () => {
  return (
    <div className={styles.container}>
        <button>
            <FaAngleLeft/>
        </button>
        <button>
            <FaAngleRight/>
        </button>
    </div>
  )
}

export default GlobexScrollButtons