import React from 'react'
import PropTypes from 'prop-types'
import { GiHamburgerMenu } from 'react-icons/gi'

const ButtonMenu = ({ setButton, button }) => {
  const onclick = () => {
    setButton(!button)
  }

  return (
    <>
      <GiHamburgerMenu
        color='#fff'
        size={'3rem'}
        onClick={onclick}
      />
    </>
  )
}

ButtonMenu.propTypes = {
  setButton: PropTypes.func,
  button: PropTypes.bool
}

ButtonMenu.defaultProps = {
  setButton: PropTypes.func,
  button: false
}

export default ButtonMenu
