import styles from './NavigationBtn.module.scss';
import Navigation from '/public/images/svg/arrow-right.svg?react'

export const NavigationBtn = ({ rotate}) => {
  return (
    <Navigation
      className={styles.icon}
      style={rotate ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}
    />
  )
}