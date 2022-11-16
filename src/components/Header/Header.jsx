import React from 'react'
import styles from './styles/Header.module.css'
import heroImage from './images/mars-rover-hero.jpg'
import NavMenu from './NavMenu'
import FilterForm from '../FilterForm/FilterForm'

const Header = () => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.container}>
        <NavMenu />
        <FilterForm />
      </div>
    </header>
  )
}

export default Header
