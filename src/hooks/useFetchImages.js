import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchImages = (url = '', key = '', filters = {}) => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState(filters)
  const [state, setState] = useState({
    data: [],
    imagesFilters: [],
    isLoading: true,
    hasError: null
  })

  const getFetchDefault = async () => {
    const { data } = await axios.get(`${url}&api_key=${key}&page=${page}`)
    const { photos } = data
    setState({
      ...state,
      data: [...state.data, ...photos],
      isLoading: false
    })
  }

  const getFetchFilter = async (fil = {}) => {
    console.log(fil)
    const rover = fil.rover.toLowerCase()
    const date = fil.date ? `&earth_date=${fil.date}` : ""
    const sol = fil.sol ? `&sol=${fil.sol}` : ""
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${key}&page=${page}${date}${sol}`
    const { data } = await axios.get(URL)
    const { photos } = data
    setState({
      ...state,
      isLoading: true,
      imagesFilters: [...state.imagesFilters, ...photos]
    })
  }

  const newPage = () => {
    setPage(prev => prev + 1)
  }

  const newFilter = (fil = {}) => {
    setFilter(fil)
  }

  useEffect(() => {
    getFetchDefault()
  }, [])

  useEffect(() => {
    if (Object.keys(filter).length > 0) {
      setState({
        ...state,
        isLoading: false
      })
      getFetchFilter(filter)
    } else {
      getFetchDefault()
    }
  }, [page])

  useEffect(() => {
    if (Object.keys(filter).length > 0) {
      setState({
        data: [],
        imagesFilters: [],
        isLoading: true,
        hasError: null
      })
      getFetchFilter(filter)
    }
  }, [filter])

  return {
    data: state.imagesFilters.length > 0 ? state.imagesFilters : state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    newPage,
    newFilter

  }
}

export default useFetchImages
