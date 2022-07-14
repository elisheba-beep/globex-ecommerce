import React from 'react'
import { IoIosClose } from 'react-icons/io';
import styles from './GlobexDiscount.module.scss';

const GlobexDiscount = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>Invite Friends and get 50% off on your next purchase</p>
        <p className={styles.blueText}>Invite Now</p>
        <IoIosClose className={styles.close}/>
    </div>
  )
}

export default GlobexDiscount