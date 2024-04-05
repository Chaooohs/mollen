import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import styles from './LastSeen.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { setSLastSeenShift } from "../../redux/lastSeenSlice/lastSeenSlice";
import { useEffect } from "react";

export const LastSeen = ({ category }) => {
  const dispatch = useDispatch()
  const lastSeen = useSelector(state => state.lastSeen.lastSeen)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    if (lastSeen.length >= 11) {
      dispatch(setSLastSeenShift(lastSeen.length))
    }
  }, [lastSeen])

  return (
    <>
      {
        lastSeen.length > 0 ?
          <>
            <h1 className={styles.chapter}>останні переглянуті товари</h1>
            <Swiper
              slidesPerView={
                !isMobile
                  ? category ? 2.2 : 3.2
                  : 1.2
              }
              modules={[Mousewheel]}
              mousewheel={true}
              style={{ width: '100%' }}
            >
              {
                lastSeen?.map(el => {
                  return (
                    <SwiperSlide style={{ width: "436px" }} key={el.id}>
                      <Link to={`/${el.id}`} >
                        <div className={styles.card}>
                          <div className={styles.img}>
                            <img src={el.thumbnail} />
                          </div>
                          <p className={styles.title}>{el.title}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </>
          : null
      }
    </>
  )
}
