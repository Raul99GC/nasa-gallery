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

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
          <span>
            <GrRobot
            size={'2rem'}
             />
          </span>
          <input
            type="text"
            placeholder='rover?'
            name='rover'
            value={rover}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.inputContainer} >
          <span>
            <AiFillCamera />
          </span>
          <input
            type="text"
            placeholder='camera?'
            name='camera'
            value={camera}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.inputContainer} >
          <span>
            <MdDateRange />
          </span>
          <input
            type="date"
            placeholder='YYY-MMM-DD'
            name='date'
            value={date}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.inputContainer} >
          <span>
            <BsSunFill />
          </span>
          <input
            type="number"
            placeholder='2890'
            name='sun'
            value={sun}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.inputs}>
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default FilterForm
