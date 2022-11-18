import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchFilters = (url = '', key = '') => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const { data } = await axios.get(`${url}?api_key=${key}`)
    const { rovers } = data
    setState({
      data: rovers,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetchFilters
