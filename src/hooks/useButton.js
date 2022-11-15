import { useState } from 'react'

const useButton = ({ value }) => {
  const [statusButton, setStatusButton] = useState(value)

  const onchange = () => {
    setStatusButton(!statusButton)
  }

  return {
    statusButton,
    onchange
  }
}

export default useButton
