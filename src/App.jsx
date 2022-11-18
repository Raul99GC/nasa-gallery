import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { UseFetchImages } from './hooks'
import Gallery from './pages/Gallery/Gallery'

const App = () => {
  const [images, setImages] = useState([])
  const { data } = UseFetchImages('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cwBn1QPdGz2gf2Bq0BbTsBmWjwbERoFWfkk7m1hj')

  const handleScroll = () => {
    const Heigth = document.documentElement.scrollHeight
    const top = document.documentElement.scrollTop
    const yourWindo = window.innerHeight
    if (yourWindo + top + 1 >= Heigth) {
      console.log('nueva perras')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Header />
      <Gallery images={[]} />
    </>
  )
}

export default App
