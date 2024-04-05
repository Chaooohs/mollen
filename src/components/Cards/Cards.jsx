import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CSSTransition } from "react-transition-group";
import Rating from '@mui/material/Rating';

import { getDiscount } from "../../utils";
import styles from "./Cards.module.scss";

export const Cards = ({ el }) => {
  const isLaptop = useMediaQuery({ maxWidth: 992 })
  let [inProp, setInProp] = useState(false)

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setInProp(true)}
      onMouseLeave={() => setInProp(false)}
    >
      {
        el.discountPercentage > 0 &&
        <div className={styles.percents}>{`-${el.discountPercentage}%`}</div>
      }
      <div className={styles.image}>
        <img
          src={el.thumbnail}
        />
      </div>
      <div className={styles.descr}>
        <h3 className={styles.title}>
          <strong className={`txt-md ${styles.name}`}>{el.title}</strong>
          <strong className={`txt-md ${styles.brand}`}>{el.brand}</strong>
        </h3>
        <Rating
          name="half-rating-read"
          defaultValue={el.rating}
          precision={0.1}
          size="smile"
          readOnly
          style={{ color: '#a1a09d', margin: '0 auto', fontSize: '18px' }}
        />
        {
          el.discountPercentage > 0
            ?
            <div className={styles.price}>
              <span className={styles.through}>{el.price.toLocaleString('ru')}</span>
              <span
                className={styles.discount}
                // style={{ color: '#d34546' }}
                style={{ color: '#4E76C6' }}
              >
                {`${getDiscount(el.price, el.discountPercentage)} ₴`}
              </span>
            </div>
            :
            <div className={styles.discount}>{`${el.price} ₴`}</div>
        }
      </div>
      {
        !isLaptop &&
        <CSSTransition
          in={inProp}
          timeout={0}
          classNames={'card-elem'}
          unmountOnExit
        >
          <div className={`${styles.elem}`} >
            <button className={`txt-md ${styles.button}`} >
              Детальніше
            </button>
          </div>
        </CSSTransition>
      }
    </div>
  );
};
