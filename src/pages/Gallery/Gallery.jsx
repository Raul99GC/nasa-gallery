import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/Gallery.module.css'
import ImageCard from './ImageCard'

const Gallery = ({ images }) => {
  return (
    <>
      <main style={styles.main}>
        <div className={styles.container}>

          <ul className={styles.gallery}>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </ul>

        </div>
      </main>
    </>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default Gallery
