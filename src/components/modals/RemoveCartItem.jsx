import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseBtn } from "../CloseBtn/CloseBtn";
import { setCartItemModalOpen, setRemoveCartItem } from "../../redux";
import styles from './modal.module.scss'

export const RemoveCartItem = () => {
  const dispatch = useDispatch()
  const { id, title } = useSelector(state => state.modal)

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  const onKeydown = ({ key }) => {
    switch (key) {
      case 'Escape':
        handleClickClose()
        break
      case 'Enter':
        handleClickYes()
        break
    }
  }

  const handleClickClose = () => {
    dispatch(setCartItemModalOpen(false))
    document.body.classList.remove('no-scroll')
  }

  const handleClickYes = () => {
    dispatch(setRemoveCartItem(id))
    dispatch(setCartItemModalOpen(false))
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className={styles.modal} onClick={handleClickClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>
          <CloseBtn onClick={handleClickClose} />
          <div className='txt_md' style={{ margin: '20px 0 40px 0', textAlign: 'center' }}>
            <p>видалити: </p>
            <span className={styles.title}>{title}</span>
          </div>
        </div>
        <div className={styles.box}>
          <button
            className='button txt-md'
            style={{
              width: '50%',
              borderRadius: '0',
              backgroundColor: '#f9f9f9',
              color: '#72716E',
            }}
            onClick={handleClickClose}
          >нi</button>
          <button
            className='button txt-md'
            style={{ width: '50%', borderRadius: '0' }}
            onClick={handleClickYes}
          >так</button>
        </div>
      </div>
    </div>
  )
}
