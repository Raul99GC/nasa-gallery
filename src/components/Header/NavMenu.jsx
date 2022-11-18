import React, { } from 'react'
import styles from './styles/NavMenu.module.css'

import logoNasa from './images/pngwing.com.png'
// import Menu from './Menu'
// Solo porque no me dio tiempo de hacer con redux para imagenes favoritas
// import useFetch from '../../hooks/UseFetch'

const NavMenu = () => {
  // const { statusButton, onchange } = useButton(false)
  // const { data } = UseFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=cwBn1QPdGz2gf2Bq0BbTsBmWjwbERoFWfkk7m1hj')
  // console.dir(data?.photos[0])

  return (
    <nav className={styles.navMenu}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logoNasa} alt="logo nasa" />
      </div>
    </nav>
  )
}

export default NavMenu
