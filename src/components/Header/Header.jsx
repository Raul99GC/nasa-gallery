import React from 'react'
import styles from './styles/Header.module.css'
import heroImage from './images/mars-rover-hero.jpg'
import NavMenu from './NavMenu'
import FilterForm from '../FilterForm/FilterForm'

const Header = () => {
  return (
    <header className={styles.header} >
      <div className={styles.container} style={{ backgroundImage: `url(${heroImage})` }}>
      </div>
        <NavMenu />
        <FilterForm />

    </header>
  )
}

export default Header
