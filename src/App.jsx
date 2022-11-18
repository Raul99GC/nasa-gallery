import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { useFetchImages } from './hooks'
import Gallery from './pages/Gallery/Gallery'

const App = () => {
  const [filter, setFilter] = useState({})
  const { data, newPage, newFilter } = useFetchImages('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000', 'cwBn1QPdGz2gf2Bq0BbTsBmWjwbERoFWfkk7m1hj')

  const handleNewFilter = (filters = {}) => {
    setFilter(filters)
  }

  const handleScroll = () => {
    const Heigth = document.documentElement.scrollHeight
    const top = document.documentElement.scrollTop
    const yourWindow = window.innerHeight

    if (yourWindow + top >= Heigth) {
      newPage()
    }
  }

  useEffect(() => {
    newFilter(filter)
  }, [filter])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header handleNewFilter={handleNewFilter} />
      <Gallery images={data} />
    </>
  )
}

export default App
