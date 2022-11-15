import React, { } from 'react'
import styles from './styles/NavMenu.module.css'

import { useButton } from '../../hooks/'

import logoNasa from './images/pngwing.com.png'
// import ButtonMenu from './ButtonMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import Menu from './Menu'

const NavMenu = () => {
  const { statusButton, onchange } = useButton(false)

  return (
    <nav className={styles.navMenu}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logoNasa} alt="logo nasa" />
      </div>

      <GiHamburgerMenu
        color='#fff'
        size={'3rem'}
        onClick={onchange}
      />

      {
        statusButton && <Menu setButton={onchange} button={statusButton} />
      }

    </nav>
  )
}

export default NavMenu
