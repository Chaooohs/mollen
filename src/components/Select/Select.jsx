import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSizeSinglePage } from '../../redux'
import bird from '/public/images/svg/bird.svg'
import styles from './Select.module.scss'


export const Select = ({ data }) => {
  const dispatch = useDispatch()
  const { size } = useSelector(state => state.sizeSinglePage)
  const [isOpen, setIsOpen] = useState(false)
  const [isLength, setIsLength] = useState(true)

  useEffect(() => {
    dispatch(setSizeSinglePage(""))
  }, [])

  useEffect(() => {
    if (Array.isArray(data) && data.length === 1) {
      data.map(el => dispatch(setSizeSinglePage(el)))
      setIsLength(false)
    }
  }, [data])


  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`txt-circe-md ${styles.box} ${Array.isArray(data) && isLength ? styles.border : ""}`}
    >
      <div className={styles.label}>
        <div >{Array.isArray(data) && isLength ? "Оберiть ромiр" : "Розмiр"}</div>
        <div className={styles.value}>{size}</div>
        {
          Array.isArray(data) && isLength &&
          <div
            className={styles.icon}
            style={isOpen ? { transform: 'rotate(180deg)' } : null}>
            <img src={bird} alt='arrow' />
          </div>
        }
      </div>

      {
        isOpen && isLength &&
        <div className={styles.popup}>
          <ul className={styles.list}>
            {
              Array.isArray(data) && isOpen &&
              data.map(el => {
                return (
                  <li
                    key={el}
                    className={styles.item}
                    onClick={() => dispatch(setSizeSinglePage(el))}
                  >
                    {el}
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </div >
  )
}