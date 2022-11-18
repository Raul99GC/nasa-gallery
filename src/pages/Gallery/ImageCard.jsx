import React from 'react'
import styles from './styles/ImageCard.module.css'

import { MdZoomOutMap } from 'react-icons/md'

const ImageCard = () => {
  return (
    <li className={styles.item}>
      <div className={styles.boxImage}>
        <img className={styles.img} src="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/05/19/15267444150887.jpg" alt="" />
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayInf}>
          <span>click to zoom  <MdZoomOutMap /></span>
        </div>
      </div>
    </li>
  )
}

export default ImageCard
