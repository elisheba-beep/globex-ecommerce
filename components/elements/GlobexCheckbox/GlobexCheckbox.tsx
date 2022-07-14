import React from 'react'
import styles from './GlobexCheckbox.module.scss';

interface CheckboxProps{
    tag: string,
    number: number
}

const GlobexCheckbox = ({tag, number}: CheckboxProps) => {
  return (
    <div className={styles.container}>
        <input type="checkbox" name="" id="" className={styles.checkbox}/>
        <p className={styles.tag}>{tag}  <span className={styles.number}>({number})</span></p>
    </div>
  )
}

export default GlobexCheckbox