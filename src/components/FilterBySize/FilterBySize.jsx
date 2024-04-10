import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sizeClothes, sizeHome } from '../../utils'
import { setPage, setSize } from '../../redux'
import styles from './FilterBySize.module.scss'

export const FilterBySize = () => {
  const dispatch = useDispatch()
  const { size, category } = useSelector(state => state.filters)
  const [isSize, setIsSize] = useState([])

  useEffect(() => {
    if (category === 'home') {
      setIsSize(sizeHome)
    } else {
      setIsSize(sizeClothes)
    }
    dispatch(setSize(""))
  }, [category])

  const handleChecked = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      dispatch(setSize(value.replace('*', '-')))
    } else {
      dispatch(setSize(""))
    }
    dispatch(setPage('1'))
  }

  return (
    <div className={styles.box} >
      <span className='txt-md'>розміри</span>
      <form className={styles.form}>
        {
          isSize?.map(el => {
            return (
              <label key={el} className={styles.checkbox} >
                <input
                  type='checkbox'
                  value={el}
                  onChange={handleChecked}
                  checked={el === size?.replace('-', '*')} />
                <span className='size-cell' >{el}</span>
              </label>
            )
          })
        }
      </form>
    </div>
  )
}