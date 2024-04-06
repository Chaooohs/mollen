import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSort } from '../../redux'
import { sort } from '../../utils'
import styles from './SortBy.module.scss'


export const SortBy = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [isName, setIsName] = useState("за замовчуванням")

const handleClick = (el) => { 
  dispatch(setSort(el))
  setIsName(el.name)
}

  return (
    <div className={styles.box} onMouseLeave={() => setIsOpen(false)}>
      <div onMouseEnter={() => setIsOpen(true)}>
        <span >Сортувати</span>
        <span className={styles.value}>{isName}</span>
      </div>

      <ul className={styles.list}>
        {
          isOpen &&
          sort?.map(el => {
            return (
              <li
                key={el.name}
                className={styles.item}
                onClick={() => handleClick(el)}
              >
                {el.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}