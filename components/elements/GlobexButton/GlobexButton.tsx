import React from 'react'
import styles from './GlobexButton.module.scss';

interface ButtonProps{
    children: React.ReactNode
    variant: 'round' | 'white' | 'black' |'filled'
}

const GlobexButton = ({children, variant}:ButtonProps) => {
  return (
    <button className={variant == 'filled' ? styles.filled : (variant == 'round' ? styles.round : (variant === 'white' ? styles.white : styles.black))}>{children}</button>
  )
}

export default GlobexButton