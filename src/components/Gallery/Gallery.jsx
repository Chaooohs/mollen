import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from './Gallery.module.scss'
import { NavigationBtn } from '../NavigationBtn/NavigationBtn'

export const Gallery = ({ singleGood }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const isLaptop = useMediaQuery({ maxWidth: 992 })

  const handleClick = (index) => {
    setImageIndex(index)
  }

  const handlePrevClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  }

  const handleNextClick = () => {
    if (imageIndex < singleGood?.images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <div className={styles.gallery} style={{ userSelect: 'none' }}>
      <div className={styles.navigation}>
        {
          !isLaptop &&
          <div className={styles.navigation__buttons}>
            <div onClick={handleNextClick}>
              <NavigationBtn />
            </div>
            <div onClick={handlePrevClick}>
              <NavigationBtn rotate={true} />
            </div>
          </div>
        }
        <div className={styles.previos}>
          {
            singleGood?.preview.map((el, index) => {
              return (
                <div
                  key={index}
                  style={index === imageIndex
                    ? { opacity: '1', border: '1px solid #1e1e1e' }
                    : { opacity: '1', border: '1px solid transparent' }}>
                  <img
                    src={el}
                    className={styles.previos__img}
                    onClick={() => handleClick(index)}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.image}>
        <img src={singleGood?.images[imageIndex]} className={styles.image__img} />
      </div>
    </div >
  )
}
