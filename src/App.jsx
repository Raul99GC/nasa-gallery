import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import { UseFetchImages } from './hooks'
import Gallery from './pages/Gallery/Gallery'

const App = () => {
  const { data, newPage } = UseFetchImages('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000', 'cwBn1QPdGz2gf2Bq0BbTsBmWjwbERoFWfkk7m1hj')

  const handleScroll = () => {
    const Heigth = document.documentElement.scrollHeight
    const top = document.documentElement.scrollTop
    const yourWindow = window.innerHeight

    if (yourWindow + top >= Heigth) {
      console.log(yourWindow + top >= Heigth)
      newPage()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <Gallery images={data} />
    </>
  )
}

export default App
