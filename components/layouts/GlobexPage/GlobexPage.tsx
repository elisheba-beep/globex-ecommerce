import React from 'react'
import GlobexAppBar from '../GlobexAppBar/GlobexAppBar'
import GlobexFooter from '../GlobexFooter/GlobexFooter'
import styles from './GlobexPage.module.scss'

interface PageProps{
    children: React.ReactNode
}


const GlobexPage = ({children}:PageProps) => {
  return (
    <div className={styles.container}>
        <GlobexAppBar/>
        {children}
        <GlobexFooter/>
    </div>
  )
}

export default GlobexPage