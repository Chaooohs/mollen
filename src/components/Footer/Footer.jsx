import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { setCategory } from "../../redux";
import { categories, categoryUkr } from "../../utils";
import { Social } from "../Social/Social";
import Logo from "/public/images/svg/logo.svg?react";
import styles from './Footer.module.scss'

export const Footer = () => {
  const isLaptop = useMediaQuery({ maxWidth: 992 })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickToHome = () => {
    navigate('/')
    window.scrollTo(0, 0)
  }

  const handleClick = (el) => {
    dispatch(setCategory(el))
    window.scrollTo(0, 0)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.logo} onClick={handleClickToHome}>
        <Logo
          width={'103px'}
          fill={'#1E1E1E'}
          opacity={'0.2'}
        />
      </div>
      <div className={styles.copy}>
        <span>2021 © Mollen.</span>
        <span style={{ lineHeight: '18px' }}>Все права защищены</span>
      </div>
      {
        !isLaptop &&
        <>
          <nav className={styles.one}>
            {
              categories?.map((el, index) => {
                return (
                  <Link
                    to={`/catalog?category=${el}`}
                    key={index}
                    onClick={() => handleClick(el)}
                  >
                    {categoryUkr(el)}
                  </Link>
                )
              })
            }
          </nav>
          <nav className={styles.two}>
            <Link to="/return">Повернення та обмін</Link>
            <Link to="/payment">Доставка та оплата</Link>
            <Link to="/guarantee">Гарантії</Link>
            <Link to="/contacts">Контакти</Link>
          </nav>
        </>
      }
      <a href="tel:88002222222" className={styles.phone}>8 800 222 22 22</a>
      <div className={styles.icons}>
        <Social />
      </div>
    </footer>
  )
}
