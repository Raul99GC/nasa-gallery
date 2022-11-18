import { useEffect, useState } from 'react'
import axios from 'axios'

const UseFetchImages = (url = '', key = '') => {
  const [page, setPage] = useState(1)
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const { data } = await axios.get(`${url}&api_key=${key}&page=${page}`)
    const { photos } = data
    setState({
      data: [...state.data, ...photos],
      isLoading: false,
      hasError: null
    })
  }

  const newPage = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    getFetch()
  }, [page])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    newPage
  }
}

export default UseFetchImages
