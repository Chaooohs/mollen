import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setOrder, setSortBy, } from '../../redux'
import { sort } from '../../utils'
import styles from './SortBy.module.scss'


export const SortBy = () => {
  const dispatch = useDispatch()
  const sortby = useSelector(state => state.filters.sortby)
  const [isOpen, setIsOpen] = useState(false)
  const [isName, setIsName] = useState("за замовчуванням")

  useEffect(() => {
    sort.forEach(el => {
      if(el.property === sortby) setIsName(el.name)
    })
  }, [sortby])

  const handleClick = (el) => {
    dispatch(setSortBy(el.property))
    dispatch(setOrder(el.order))
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