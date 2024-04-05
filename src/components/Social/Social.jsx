import pinterest from "/public/images/social/pinterest.svg";
import telegram from "/public/images/social/telegram.svg";
import fb from "/public/images/social/fb.svg";
import youtube from "/public/images/social/youtube.svg";
import instagram from "/public/images/social/instagram.svg";
import styles from './Social.module.scss'

export const Social = () => {
  return (
    <div className={styles.social}>
      <a href="https://www.pinterest.com/" target="_blank"><img src={pinterest} alt="pinterest" /></a>
      <a href="https://web.telegram.org/" target="_blank"><img src={telegram} alt="telegram" /></a>
      <a href="https://www.facebook.com/" target="_blank"><img src={fb} alt="fb" /></a>
      <a href="https://www.youtube.com/" target="_blank"><img src={youtube} alt="youtube" /></a>
      <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram" /></a>
    </div>
  )
}
