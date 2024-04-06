import { useDispatch, useSelector } from 'react-redux';
import { setColor, setPage } from '../../redux';

import { colors } from '../../utils';
import styles from './FilterByColor.module.scss'

export const FilterByColor = () => {
  const { color } = useSelector((state) => state.filters);
  const dispatch = useDispatch()

  const handleChecked = (e) => {
    const colorValue = e.target.value
    const colorChecked = e.target.checked
    if (colorChecked) {
      dispatch(setColor(colorValue))
    } else {
      dispatch(setColor(""))
    }
    dispatch(setPage('1'))
  }

  return (
    <div className={styles.box}>
      <span className='txt-md'>кольори</span>
      <div className={styles.checkbox}>
        {colors.map((el, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="color"
                value={el}
                id={`color${index}`}
                className={styles.input}
                onChange={handleChecked}
                checked={el === color}
              />
              <label
                htmlFor={`color${index}`}
                className={styles.label}
                style={!el
                  ? { border: '1px solid #4E76C6' }
                  :
                  {
                    backgroundColor: `${el === "white" ? '#ECEAE7' : el}`, 
                    border: `${el === "white" ? '#ECEAE7' : el}`
                  }}
              >
              </label>
            </div>
          );
        })}
      </div>
    </div>
  )
}