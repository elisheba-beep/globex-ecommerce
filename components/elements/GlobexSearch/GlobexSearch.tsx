import React from 'react'
import { IoIosSearch } from 'react-icons/io'

import styles from './GlobexSearch.module.scss';

const GlobexSearch = () => {
  return (
    <div className={styles.container}>
        <input className={styles.searchBox} placeholder='search here'/>
        <IoIosSearch className={styles.search}/>
    </div>
  )
}

export default GlobexSearch