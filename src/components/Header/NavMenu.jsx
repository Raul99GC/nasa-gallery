import React from 'react'
import styles from './styles/NavMenu.module.css'

import logoNasa from './images/pngwing.com.png'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <img className={styles.logo} src={logoNasa} alt="logo nasa" />
      <ul className={styles.menu}>
        <li>Home</li>
        <li><BsFillBookmarkHeartFill /></li>
      </ul>
    </nav>
  )
}

export default NavMenu
