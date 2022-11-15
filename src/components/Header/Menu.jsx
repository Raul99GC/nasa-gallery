import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/Menu.module.css'

import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import wallpaper from './images/stars-wallpaper.jpg'

import { AiOutlineClose } from 'react-icons/ai'

const Menu = ({ setButton, button }) => {
  return (
    <ul className={styles.menu} style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className={styles.container}>

        <AiOutlineClose
          color='#fff'
          size={'3rem'}
          onClick={setButton}
          className={styles.icon}
        />

        <li className={styles.item}>
          <a className={styles.link} href="#">Home</a>
        </li>

        <li className={styles.item}>
          <a href="#" className={styles.link}>
            <BsFillBookmarkHeartFill /> favorites
          </a>
        </li>

      </div>
    </ul>
  )
}

Menu.propTypes = {
  setButton: PropTypes.func,
  button: PropTypes.bool
}

export default Menu
