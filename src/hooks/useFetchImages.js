import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
const UseFetchImages = (key = '') => {
  const [filter, setFilter] = useState({})
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const { data } = await axios.get(`${URL}`)
    setState({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [])

  useEffect(() => {
    console.log('cambio')
  }, [filter])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError

  }
}

export default UseFetchImages
