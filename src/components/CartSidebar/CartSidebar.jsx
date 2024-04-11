import { useSelector } from 'react-redux'
import { getDiscount } from '../../utils'
import styles from './CartSidebar.module.scss'

export const CartSidebar = () => {
  const cartItem = useSelector(state => state.cart.items)

  let toralPriceWithDiscount = cartItem.map(el => el.count * el.discountPrice)
    .reduce((sum, el) => sum + el, 0)

  let totalPrice = cartItem.map(el => el.count * el.price)
    .reduce((sum, el) => sum + el, 0)


  return (
    <aside className={`txt-circe-sm ${styles.aside}`}>
      <div>
        <div>Разом</div>
        <div className={`txt-xl ${styles.totalprice}`}>
          {`${toralPriceWithDiscount.toLocaleString("ru")} ₴`}
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.price}>
        <span>Товарів на</span>
        <span className={styles.num}>
          {`${totalPrice.toLocaleString("ru")} ₴`}
        </span>
      </div>
      <div className={styles.discount}>
        <span>Знижка</span>
        <span className={styles.num}>
          {`${(totalPrice - toralPriceWithDiscount).toLocaleString("ru")} ₴`}
        </span>
      </div>
      <button className={`txt-md ${styles.button}`}>замовити</button>
    </aside>
  )
}