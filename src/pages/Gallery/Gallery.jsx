import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/Gallery.module.css'
import ImageCard from './ImageCard'

const Gallery = ({ images }) => {
  console.log(images)

  return (
    <>
      <main style={styles.main}>
        <div className={styles.container}>

          <ul className={styles.gallery}>
            {
              images.map(image => (
                <ImageCard
                  key={image.id}
                  // eslint-disable-next-line
                  url={image['img_src']}
                />
              ))
            }

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
