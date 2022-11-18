import React from 'react'
import styles from './styles/ImageCard.module.css'

import { MdZoomOutMap } from 'react-icons/md'
import PropTypes from 'prop-types'

const ImageCard = ({ url = '' }) => {
  return (
    <li className={styles.item}>
      <div className={styles.boxImage}>
        <img className={styles.img} src={url} alt="" />
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayInf}>
          <span>click to zoom  <MdZoomOutMap /></span>
        </div>
      </div>
    </li>
  )
}

ImageCard.propTypes = {
  url: PropTypes.string.isRequired
}

export default ImageCard
