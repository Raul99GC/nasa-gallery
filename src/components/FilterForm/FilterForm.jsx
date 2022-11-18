import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import styles from './styles/FilterFrom.module.css'

import { AiFillCamera } from 'react-icons/ai'
import { GrRobot } from 'react-icons/gr'
import { MdDateRange } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'
import PropTypes from 'prop-types'
import { useFetchFilters } from '../../hooks'

const FilterForm = ({ handleNewFilter }) => {
  const [cameras, setCameras] = useState([])
  const [maxSol, setMaxSol] = useState(0)
  const [maxDate, setMaxDate] = useState('')
  const { rover, camera, date, sol, onInputChange, onResetForm } = useForm({
    rover: '',
    camera: '',
    date: '',
    sol: ''
  })
  const { data: rovers } = useFetchFilters('https://api.nasa.gov/mars-photos/api/v1/rovers', 'cwBn1QPdGz2gf2Bq0BbTsBmWjwbERoFWfkk7m1hj')

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!date && !sol) {
      return null
    } else if (!camera || !rover) {
      return null
    } else {
      const newFilter = {
        rover,
        camera,
        date,
        sol
      }
      handleNewFilter(newFilter)
      onResetForm()
    }
  }

  useEffect(() => {
    const camerasRover = rovers.filter((prev) => prev.name === rover)
    if (camerasRover[0]) {
      setCameras(camerasRover[0]?.cameras)
      // eslint-disable-next-line
      setMaxSol(camerasRover[0]['max_sol'])
      // eslint-disable-next-line
      setMaxDate(camerasRover[0]['max_date'])
    } else {
      setCameras([])
    }
  }, [rover])

  return (
    <div className={styles.container}>

      <form action="" className={styles.form} onSubmit={onFormSubmit}>

        <div className={styles.formContainer}>

          <div className={styles.formContainerTop}>
            <div className={styles.inputContainer}>
              <span className={styles.icon}>
                <GrRobot
                  size={'2rem'}
                />
              </span>
              <input
                list="rovers"
                className={styles.input}
                placeholder='rover?'
                name='rover'
                value={rover}
                onChange={onInputChange}
                required={true}
              />
              <datalist id='rovers' >
                {
                  rovers?.map(rover => (
                    <option
                      key={rover.id}
                    >
                      {rover.name}
                    </option>
                  ))
                }
              </datalist>

            </div>
            <div className={styles.inputContainer} >
              <span className={styles.icon}>
                <AiFillCamera
                  size={'2rem'}
                />
              </span>
              <input
                list='cameras'
                className={styles.input}
                placeholder='camera?'
                name='camera'
                value={camera}
                onChange={onInputChange}
              />
              <datalist id='cameras' >
                {
                  cameras?.map(camera => (
                    <option
                      key={camera.id}
                    >
                      {camera.name}
                    </option>
                  ))
                }
              </datalist>
            </div>
          </div>

          {/* para esto se hubiera hecho mas facil con Grid :v  */}
          <div className={styles.formContainerBottom}>
            <div className={styles.inputContainer} >
              <span className={styles.icon}>
                <MdDateRange
                  size={'2rem'}
                />
              </span>
              <input
                type="date"
                className={styles.input}
                placeholder='YYY-MMM-DD'
                name='date'
                value={date}
                onChange={onInputChange}
                max={maxDate}
              />
            </div>

            <div className={styles.inputContainer} >
              <span className={styles.icon}>
                <BsSunFill
                  size={'2rem'}
                />
              </span>
              <input
                type="number"
                className={styles.input}
                placeholder='2890'
                name='sol'
                value={sol}
                onChange={onInputChange}
                max={maxSol}
              />
            </div>
          </div>

        </div>

        <div className={styles.inputs}>
          <button type='submit' className={styles.button}>Submit</button>
        </div>

      </form>
    </div>
  )
}

FilterForm.propTypes = {
  handleNewFilter: PropTypes.func
}

export default FilterForm
