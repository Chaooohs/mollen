import { useMediaQuery } from 'react-responsive'

import { Breadcrumbs, Map } from '../../components'
import clock from '/public/images/svg/clock.svg'
import styles from './ContactsPage.module.scss'

export const ContactPage = () => {
  const isLaptop = useMediaQuery({ maxWidth: 992 })

  return (
    <main className='main grid-2col' style={{ columnGap: '5.56%' }}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Breadcrumbs current={"контакти"} />
          <h1 className="txt-lg mg-0" style={{ fontFamily: 'Orchidea Pro' }}>контакти</h1>
          <div className={styles.about}>
            <b className={styles.b}>mollen</b>
            <span> – це топовий український рітейл одягу, взуття, аксесуарів та косметики.</span>
          </div>
        </header>
        <div className={styles.contacts}>
          <div className={styles.address}>
            <p className={styles.title}>адреса</p>
            <span>Україна, 03056, м. Київ, просп. Берестейський, 23</span>
            <div className={styles.time}>
              <img src={clock} alt='clock' style={{ width: '16px' }} />
              <span>Щодня з 10:00 до 18:00</span>
            </div>
          </div>
          <div className={styles.hotline}>
            <p className={styles.title}>гаряча лінія</p>
            <a className={styles.phone} href='tel:88002222222'>8 800 222 22 22</a>
          </div>
        </div>
        {
          isLaptop &&
          <div className={styles.map} >
            <Map />
          </div>
        }
        <div className={styles.props}>
          <p className={styles.title}>реквізити</p>
          <div className={styles.text}>
            <span>Товариство з обмеженою відповідальністю «Mollen»</span>
            <span>ЄДРПОУ 41097426</span>
          </div>
        </div>
      </div>
      {
        !isLaptop &&
        <div className={styles.map} >
          <Map />
        </div>
      }
    </main>
  )
}