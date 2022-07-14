import React from 'react'
import { IoMdClose } from 'react-icons/io'
import styles from './GlobexFilter.module.scss';

interface FilterProps{
    tag: string
}

const GlobexFilter = ({tag}: FilterProps) => {
  return (
    <div className={styles.container}>
        <IoMdClose className={styles.close}/>
        <p className={styles.tag}>Tag for {tag}</p>
    </div>
  )
}

export default GlobexFilter