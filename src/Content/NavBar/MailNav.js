import React from 'react'
import ContactModal from '../ContactModal'
import mail from '../../Images/mail.svg'

import style from './MailNav.module.css'
import { useEmailModal } from '../../providers/emailModalProvider'

const MailNav = () => {
  const { isVisible, setIsVisible } = useEmailModal()

  return (
    <div
      onClick={() => (isVisible ? () => {} : setIsVisible(true))}
      className={style.PortfolioMailBarComponent}
    >
      <div className={style.cornerDesign}>
        <img className={style.mailNavIcon} src={mail} alt="hb"></img>
      </div>
    </div>
  )
}
export default MailNav
