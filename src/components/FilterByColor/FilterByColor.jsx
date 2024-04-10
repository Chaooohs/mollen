import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setPage } from '../../redux';

import { colors } from '../../utils';
import styles from './FilterByColor.module.scss'

export const FilterByColor = () => {
  const { color, category } = useSelector((state) => state.filters);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setColor(""))
  }, [category])

  const handleChecked = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      dispatch(setColor(value))
    } else {
      dispatch(setColor(""))
    }
    dispatch(setPage('1'))
  }

  return (
    <div className={styles.box}>
      <span className='txt-md'>кольори</span>
      <form className={styles.form}>
        {colors.map((el, index) => {
          return (
            <div key={index} className={styles.checkbox}>
              <input
                type="checkbox"
                name="color"
                value={el}
                id={`color${index}`}
                onChange={handleChecked}
                checked={el === color}
              />
              <label
                htmlFor={`color${index}`}
              >
                <span style={{ backgroundColor: `${el === "white" ? '#ECEAE7' : el}` }}></span>
              </label>
            </div>
          );
        })}
      </form>
    </div>
  )
}