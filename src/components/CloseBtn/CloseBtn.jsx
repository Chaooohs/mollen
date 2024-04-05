import styles from './CloseBtn.module.scss'
import Close from '/public/images/svg/close.svg?react'

export const CloseBtn = ({onClick}) => {
  return (
    <Close
    className={styles.icon}
    onClick={onClick}
    />
  )
}