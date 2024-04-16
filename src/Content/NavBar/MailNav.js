import React from 'react'
import ContactModal from '../ContactModal'
import mail from '../../Images/mail.svg'

import style from './MailNav.module.css'
import { useEmailModal } from '../../providers/emailModalProvider'

const MailNav = () => {
  const { isVisible, setIsVisible } = useEmailModal()

  return (
    <div className={style.PortfolioMailBarComponent}>
      <div className={style.cornerDesign}>
        <img
          onClick={() => (isVisible ? () => {} : setIsVisible(true))}
          className={style.mailNavIcon}
          src={mail}
          alt="hb"
        ></img>
      </div>

      {isVisible ?? (
        <div className={isVisible ? style.viewModal : style.hideViewModal}>
          <ContactModal />
          {/* <button onClick={toggle} className={style.closeButton}>close</button> */}
        </div>
      )}
    </div>
  )
}
export default MailNav
