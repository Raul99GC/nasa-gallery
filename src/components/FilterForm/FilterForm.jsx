import React from 'react'
import useForm from '../../hooks/useForm'
import styles from './styles/FilterFrom.module.css'

import { AiFillCamera } from 'react-icons/ai'
import { GrRobot } from 'react-icons/gr'
import { MdDateRange } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'

const FilterForm = () => {
  const { rover, camera, date, sun, onInputChange } = useForm({
    rover: '',
    camera: '',
    date: '',
    sun: ''
  })

  const inFormSubmit = (e) => {
    e.preventDefault()
    console.log({ rover, camera, date, sun })
  }

  return (
    <div className={styles.container}>

      <form action="" className={styles.form} onSubmit={inFormSubmit}>

        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.icon}>
              <GrRobot
                size={'2rem'}
              />
            </span>
            <input
              type="text"
              className={styles.input}
              placeholder='rover?'
              name='rover'
              value={rover}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.inputContainer} >
            <span className={styles.icon}>
              <AiFillCamera
                size={'2rem'}
              />
            </span>
            <input
              type="text"
              className={styles.input}
              placeholder='camera?'
              name='camera'
              value={camera}
              onChange={onInputChange}
            />
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
                name='sun'
                value={sun}
                onChange={onInputChange}
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

export default FilterForm
