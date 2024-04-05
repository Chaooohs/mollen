import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { setBurgerOpen } from "../../redux";
import Logo from "/public/images/svg/logo.svg?react";
import Dots from "/public/images/svg/three-dots.svg?react";
import Search from "/public/images/svg/search_mobile.svg?react";
import Cart from "/public/images/svg/bin.svg?react";
import styles from "./Header.module.scss";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const location = useLocation()
  const styleOne = location.pathname === '/' ? '#FFF' : '#1E1E1E'

  const quentityGoods = items.reduce((sum, el) => el.count + sum, 0);

  const handleClick = () => {
    dispatch(setBurgerOpen(true))
    document.body.classList.add('no-scroll')
  }

  return (
    <header
      className={styles.header}
      style={location.pathname === '/' ? { borderBottom: 'none' } : { borderBottom: '1px solid #ECEAE7' }}
    >
      <button onClick={handleClick}>
        <Dots
          className={styles.dots}
          fill={styleOne}
        />
      </button>
      <Link to="/">
        <Logo
          className={styles.logo}
          fill={styleOne}
        />
      </Link>
      {/* <nav>
        <Link to="/catalog" className={`txt_md ${styles.link} ${styles.gray}`}>
          catalog
        </Link>
      </nav> */}
      <Link to="products" className={styles.search}>
        {
          !isMobile
            ?
            <span
              className={`txt-md ${styles.link} ${location.pathname === '/' ? styles.white : styles.gray}`}
            >
              пошук
            </span>
            :
            <Search />
        }
      </Link>
      <Link to="/cart">
        <div className={styles.bin}>
          <Cart className={styles.icon}></Cart>
          {
            quentityGoods > 0 &&
            <span className={styles.count}>{quentityGoods}</span>
          }
        </div>
      </Link>
    </header>
  );
};
