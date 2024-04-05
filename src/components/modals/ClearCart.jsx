import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCartModalOpen } from "../../redux/modalSlice/modalSlice";
import { setClearCart } from "../../redux/cartSlice/cartSlice";
import styles from './modal.module.scss'
import { CloseBtn } from "../CloseBtn/CloseBtn";

export const ClearCart = () => {
  const dispatch = useDispatch()

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
    dispatch(setCartModalOpen(false))
    document.body.classList.remove('no-scroll')
  }

  const handleClickYes = () => { 
    dispatch(setClearCart())
    dispatch(setCartModalOpen(false))
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className={styles.modal} onClick={handleClickClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>
          <CloseBtn onClick={handleClickClose}/>
          <span className='txt_md' style={{ margin: '20px 0 40px 0', textAlign: 'center' }}>
          очистити кошик?
          </span>
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