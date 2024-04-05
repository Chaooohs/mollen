import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLimitGoodsModalOpen } from "../../redux";
import styles from './modal.module.scss'
import { CloseBtn } from "../CloseBtn/CloseBtn";

export const LimitGoodsModal = () => {
  const dispatch = useDispatch()
  const stock = useSelector(state => state.modal.stock)

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
        handleClickClose()
        break
    }
  }

  const handleClickClose = () => {
    dispatch(setLimitGoodsModalOpen(false))
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className={styles.modal} onClick={handleClickClose} >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>
          <CloseBtn onClick={handleClickClose}/>
          <div className='txt_md' style={{ margin: '20px 0 40px 0', textAlign: 'center' }}>
            В наявностi
            <mark> {stock}</mark>
            шт.
          </div>
        </div>
        <div className={styles.box}>
          <button
            className='button txt-md'
            style={{ width: '100%', borderRadius: '0' }}
            onClick={handleClickClose}
          >ок</button>
        </div>
      </div>
    </div>
  )
}