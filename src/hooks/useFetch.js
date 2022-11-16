import { useEffect, useState } from 'react'
import axios from 'axios'

const UseFetch = (url = '') => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const { data } = await axios.get(url)
    setState({
      data,
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

export default UseFetch
