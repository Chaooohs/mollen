import { useState } from 'react'
import styles from './SortPrice.module.scss'

import Slider from '@mui/material/Slider';


export const SortPrice = () => {
  const [price, setPrice] = useState()


  const handleChange = (e, v) => {

    setTimeout(() => {
      // console.log(e.target.value)
      setPrice(e.target.value)
    }, 3000)

  }


  return (
    <div className={styles.box}>
      <span className={styles.title}>цiна, ₴</span>

      <Slider
        min={0}
        max={5000}
        step={500}
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        className={styles.slider}
        onChange={handleChange}
      />

    </div>
  )
}