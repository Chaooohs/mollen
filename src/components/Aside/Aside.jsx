import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { setCategory, setSidebarOpen, setSubCategory } from "../../redux";
import { FilterByColor } from "../FilterByColor/FilterByColor";
import { FilterBySize } from "../FilterBySize/FilterBySize";
import { CloseBtn } from "../CloseBtn/CloseBtn";
import { categories, categoryUkr } from "../../utils";
import styles from "./Aside.module.scss";

export const Aside = () => {
  const { category } = useSelector((state) => state.filters);
  const dispatch = useDispatch()
  const isLaptop = useMediaQuery({ maxWidth: 992 })
  
  const handleChecked = (e) => {
    const value = e.target.value;
    dispatch(setCategory(value))
    dispatch(setSubCategory(undefined))
  };

  const handleClose = () => {
    dispatch(setSidebarOpen(false))
    document.body.classList.remove('no-scroll')
  }

  return (
    <aside className={styles.aside}>
      {
        isLaptop &&
        <div className={styles.header}>
          <span style={{ fontSize: '18px', textTransform: 'uppercase', letterSpacing: '4px' }}>фiльтри</span>
          <CloseBtn onClick={handleClose} />
        </div>
      }
      <div className={styles.checkbox}>
        <span className={`txt-md ${styles.title}`}>категорія</span>

        {categories?.map((el, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="category"
                value={el}
                id={`rad${index}`}
                className={styles.input}
                onChange={handleChecked}
                checked={el === category}
              />
              <label htmlFor={`rad${index}`} className={`txt-circe-md ${styles.label}`}>
                {categoryUkr(el)}
              </label>
            </div>
          );
        })}
      </div>
      <FilterBySize />
      <FilterByColor />
      {
        isLaptop &&
        <button
          className={`button txt-md ${styles.button}`}
          style={{ borderRadius: '0', width: '100%', marginTop: 'auto' }}
          onClick={handleClose}
        >
          показати</button>
      }
    </aside>
  );
};
