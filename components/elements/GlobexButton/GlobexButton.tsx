import React from 'react'
import styles from './GlobexButton.module.scss';

interface ButtonProps{
    children: React.ReactNode
    variant: 'round' | 'white' | 'black' |'filled',
    onClick?: VoidFunction
}

const GlobexButton = ({children, variant, onClick}:ButtonProps) => {
  return (
    <button className={variant == 'filled' ? styles.filled : (variant == 'round' ? styles.round : (variant === 'white' ? styles.white : styles.black))} onClick={onClick}>{children}</button>
  )
}

export default GlobexButton