import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import { setPage, setSubCategory, setSubTabsQuentiry } from "../../redux";
import { categoryUkr, subcathome, subcatman, subcatwomen } from "../../utils";
import styles from "./SubCategoriesBtn.module.scss";

export const SubCategoriesBtn = ({ category }) => {
  const { subcategory } = useSelector(state => state.filters);
  const subquentity = useSelector(state => state.subQuentity.subTabsQuentity);
  const dispatch = useDispatch()
  const isLaptop = useMediaQuery({ maxWidth: 992 })

  let subcategories = [];
  switch (category) {
    case "man":
      subcategories = subcatman;
      break;
    case "women":
      subcategories = subcatwomen;
      break;
    case "kids":
      subcategories = subcatman;
      break;
    case "home":
      subcategories = subcathome;
      break;
    default:
      null;
  }

  useEffect(() => {
    dispatch(setSubTabsQuentiry(subcategories.length))
  }, [category])

  const handleChecked = (e) => {
    const subValue = e.target.value;
    const subChecked = e.target.checked
    if (subChecked) {
      dispatch(setSubCategory(subValue))
    } else {
      dispatch(setSubCategory(""))
    }
    dispatch(setPage('1'))
  };

  return (
    <div className={styles.box}>
      <Swiper
        slidesPerView={isLaptop ? 2.5 : subquentity}
        modules={[Mousewheel]}
        mousewheel={true}
        style={{ width: '100%' }}
      >
        {subcategories?.map((el, index) => {
          return (
            <SwiperSlide style={{ width: "160px" }} key={index}>
              <input
                className={styles.input}
                type="checkbox"
                id={`el ${index}`}
                value={el}
                name="subCategory"
                onChange={handleChecked}
                checked={el === subcategory}
              />
              <label className={`txt-md ${styles.label}`} htmlFor={`el ${index}`}>
                {categoryUkr(el)}
                {/* {el.includes("-") ? el.split("-")[1] : el} */}
              </label>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
