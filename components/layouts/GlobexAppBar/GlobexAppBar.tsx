import React from 'react'
import logoBlue from '/public/images/logoBlue.png'
import imageOne from '/public/images/image-one.png'
import styles from './GlobexAppBar.module.scss'
import Image from 'next/image'
import GlobexSearch from '../../elements/GlobexSearch/GlobexSearch'
import { IoMdCart, IoMdHeartEmpty } from 'react-icons/io'
import GlobexUser from '../../elements/GlobexUser/GlobexUser'

const GlobexAppBar = () => {
  return (
    <div className={styles.container}>
       <Image src={logoBlue} alt='logo' width={57} height={48}/>
        <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Shop</li>
            <li>Contact Us</li>
        </ul>
        <GlobexSearch/>
        <div>
            <IoMdHeartEmpty/>
            <IoMdCart/>
            <GlobexUser userName='Anne Doe' src={imageOne}/>
        </div>
    </div>
  )
}

export default GlobexAppBar