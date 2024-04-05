import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setIncrement, setDecrement, setCartItemModalOpen, setCartCount, setLimitGoodsModalOpen } from "../../redux";
import ClearIcon from "/public/images/svg/delete.svg?react";
import styles from "./CartItem.module.scss";
import { useRef } from "react";

export const CartItem = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.items)
  const countRef = useRef()
  const plusRef = useRef()

  const increment = (id, count, stock) => {

    if (count < stock) {
      dispatch(setIncrement(id))
      countRef.current.focus()
    } else {
      dispatch(setLimitGoodsModalOpen({ stock, open: true }))
      countRef.current.blur()
      plusRef.current.blur()
    }
  }

  const handleChange = (value, stock, id) => {

    if (value <= stock) {
      dispatch(setCartCount({ value, id }))
    } else {
      dispatch(setLimitGoodsModalOpen({ stock, open: true }))
      dispatch(setCartCount({ value: stock, id }))
      document.body.classList.add('no-scroll')
      countRef.current.blur()
    }
  }

  const handleRemoveCartItem = (id, title) => {
    const remove = {
      open: true,
      id,
      title,
    }
    dispatch(setCartItemModalOpen(remove))
    document.body.classList.add('no-scroll')
  }

  return (
    <div>
      {cartItem?.map((el) => {
        return (
          <div className={styles.card} key={el.id}>
            <div className={styles.img}>
              <Link to={`/${el.id}`}>
                <img src={el.thumbnail} alt={el.title} />
              </Link>
            </div>
            <h3 className={styles.title}>{el.title}</h3>
            <div className={styles.counter}>
              <button className={styles.minus} onClick={() => dispatch(setDecrement(el.id))}>
                -
              </button>

              <input
                ref={countRef}
                className={styles.number}
                value={el.count}
                onChange={(e) => handleChange(parseInt(e.target.value), el.stock, el.id)}
              />

              <button ref={plusRef} className={styles.plus} onClick={() => increment(el.id, el.count, el.stock)}>
                +
              </button>
            </div>

            <span
              className={styles.discount}
              style={el.discountPrice !== el.price ? { color: '#4E76C6' } : { color: '#1E1E1E' }}
            >
              {`${(el.discountPrice * el.count).toLocaleString("ru")}`}
            </span>

            {
              el.discountPrice !== el.price &&
              <span className={styles.price}>
                {`${(el.price * el.count).toLocaleString("ru")}`}
              </span>
            }

            <ClearIcon className={styles.icon} onClick={() => handleRemoveCartItem(el.id, el.title)} />
          </div>
        );
      })}
    </div >
  );
};
