import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import plus from '/public/images/svg/plus.svg'

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="accordion__item">
        <div className="txt_md accordion__title" onClick={() => setIsActive(!isActive)}>
          <div className='accordion__title_text'>{title}</div>
          <CSSTransition classNames={"accordion-icon"} in={isActive} timeout={250}>
            <div className="accordion__icon">
              <img src={plus} alt='plus' />
            </div>
          </CSSTransition>
        </div>

        <CSSTransition
          in={isActive}
          timeout={250}
          classNames={"accordion-open"}
          unmountOnExit
        >
          <div className="accordion__content" dangerouslySetInnerHTML={{ __html: content }} />
          {/* вставка текста с переносом строк как в innerHTML*/}
        </CSSTransition>
      </div >
    </>
  )
}
