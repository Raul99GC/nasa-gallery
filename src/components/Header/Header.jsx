import React from 'react'
import styles from './styles/Header.module.css'
import heroImage from './images/mars-rover-hero.jpg'
import NavMenu from './NavMenu'

const Header = () => {
  console.log(heroImage)
  return <header className={styles.header} style={{ backgroundImage: `url(${heroImage})` }}>
    <NavMenu />
  </header>
}

export default Header
