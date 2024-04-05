import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/goodsAPI";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumbs, Gallery, LastSeen, StarRating } from "../../components";
import { setCartItems, setLastSeen, setLimitGoodsModalOpen, } from "../../redux";
import { getDiscount, categoryUkr } from "../../utils";
import styles from "./SingleGoodPage.module.scss";

export const SingleGoodPage = () => {
  const {state} = useLocation();
  const countRef = useRef()
  const plusRef = useRef()
  const params = useParams();
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.items);

  const { data: singleGood } = useGetSingleProductQuery(`/catalog/${params.id}`);

  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    singleGood &&
      dispatch(setLastSeen(singleGood))
  }, [singleGood]);

  useEffect(() => {
    cartItem?.find((el) => {
      if (el.id === singleGood?.id) {
        setDisabled(true);
      }
    });
  }, [singleGood, cartItem]);

  useEffect(() => window.scrollTo(0, 0), [])

  const increment = () => {
    const stock = singleGood.stock

    if (count < stock) {
      setCount(count + 1)
      countRef.current.focus()
    } else {
      dispatch(setLimitGoodsModalOpen({ open: true, stock }))
      countRef.current.blur()
      plusRef.current.blur()
    }
  };

  const decrement = () => setCount(Math.max(1, count - 1))

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    const stock = singleGood.stock

    if (value <= stock) {
      setCount(value)
    } else {
      dispatch(setLimitGoodsModalOpen({ open: true, stock }))
      setCount(stock)
      document.body.classList.add('no-scroll')
      countRef.current.blur()
    }
  }

  const handleClickAddToCart = (id, thumbnail, title, price, discountPercentage, stock) => {
    const cartItem = {
      id,
      thumbnail,
      title,
      price,
      discountPrice: getDiscount(price, discountPercentage),
      count,
      stock,
    };
    dispatch(setCartItems(cartItem))
  };

  return (
    <main className={styles.main}>
      <div className={styles.layout}>

        <div className={styles.gallery}>
          <Gallery singleGood={singleGood} />
        </div>

        {singleGood && (
          <>
            <header className={styles.header}>
              <Breadcrumbs subfolder={categoryUkr(state?.subfolder)} current={singleGood.title}/>
              <h1 className={styles.heading}>{singleGood.title}</h1>
            </header>
            <div className={`txt-md ${styles.brand}`}>
              <div className={styles.wrap}>
                {singleGood.brand}
              </div>
            </div>
            <div className={styles.id}>
              <div className={styles.wrap}>
                {`id: ${singleGood.id}`}
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.wrap}>
                {singleGood.description}
              </div>
            </div>
            <div className={styles.rating}>
              <div className={styles.wrap}>
                <StarRating singleGood={singleGood} />
              </div>
            </div>
            <div className={styles.stock}>
              <div className={styles.wrap}>
                <span className={styles.stocktext}>в наявностi</span>
                <span className={styles.stocknum}>{singleGood.stock > 10 ? "(10+)" : singleGood.stock}</span>
              </div>
            </div>
            <div className={` txt-lg ${styles.price}`}>
              <div className={styles.wrap}>
                <div className={styles.price__box}>
                  <span>
                    {`${(getDiscount(singleGood.price, singleGood.discountPercentage) * count).toLocaleString("ru")} ₴`}
                  </span>
                  {
                    singleGood.discountPercentage > 0 &&
                    <span className={styles.through}>{(singleGood.price * count).toLocaleString("ru")}</span>
                  }
                </div>
              </div>
            </div>
            <div className={styles.box} style={!disabled ? { backgroundColor: '#4E76C6' } : { backgroundColor: '#ECEAE7' }}>
              <div className={styles.counter} >
                <button className={styles.minus} onClick={decrement} disabled={disabled}>
                  -
                </button>

                <input
                  ref={countRef}
                  className={styles.number}
                  value={count}
                  onChange={handleChange}
                />

                <button ref={plusRef} className={styles.plus} onClick={increment} disabled={disabled}>
                  +
                </button>
              </div>
              <button
                className={styles.button}
                onClick={() => handleClickAddToCart(singleGood.id, singleGood.thumbnail, singleGood.title, singleGood.price, singleGood.discountPercentage, singleGood.stock)}
                disabled={disabled}>
                <span className="txt-md">у кошик</span>
              </button>
            </div>
          </>
        )}
      </div>
      <LastSeen />
    </main >
  );
};
