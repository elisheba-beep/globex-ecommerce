import React, { useState } from 'react'
import styles from './GlobexCheckbox.module.scss';

interface CheckboxProps{
    tag: string,
    number: number,
    onClick: VoidFunction,
    checked?: boolean,
}

const GlobexCheckbox = ({tag, number, onClick, checked}: CheckboxProps) => {
  const [ticked, setTicked] = useState(true);
  const handleCheck = () => {
    setTicked(!ticked);
  }
  return (
    <div className={styles.container}>
        <input type="checkbox" name="" id="" defaultChecked={true} checked={ticked} className={styles.checkbox} onClick={()=>{
          handleCheck();
          !ticked && onClick()
        }}/>
        <p className={styles.tag}>{tag}  <span className={styles.number}>({number})</span></p>
    </div>
  )
}

export default GlobexCheckbox