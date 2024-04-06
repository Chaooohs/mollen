import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { sizevar } from '../../utils'
import { setSize } from '../../redux'
import styles from './FilterBySize.module.scss'

export const FilterBySize = () => {
  const dispatch = useDispatch()
  const size = useSelector(state => state.filters.size)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickValue = (e) => {
    const value = e.target.dataset.type
    if (value === 'default') {
      dispatch(setSize(""))
    } else {
      dispatch(setSize(value))
    }
  }

  return (
    <div className={styles.box} >
      <span className='txt-md'>розміри</span>
      <div className={styles.selector} onMouseLeave={() => setIsOpen(false)}>

        <div
          className={styles.input}
          onMouseEnter={() => setIsOpen(true)}
        >
          {size}
        </div>

        <CSSTransition in={isOpen} timeout={200} classNames="selector" unmountOnExit>
          <ul className={styles.list}>
            <li
              data-type="default"
              className={`txt-md fs-10 ${styles.item}`}
              onClick={handleClickValue}
            >
              за замовчуванням
            </li>
            {
              sizevar?.map(el => {
                return (
                  <li
                    key={el}
                    className={`txt-md ${styles.item}`}
                    data-type={el}
                    onClick={handleClickValue}
                  >
                    {el}
                  </li>
                )
              })
            }
          </ul>
        </CSSTransition>
      </div>
    </div>
  )
}