import React, { useState } from 'react'
import hamburger from '../../Images/hamburger.svg'
import mail from '../../Images/mail.svg'
import styles from './NavBar.module.css'
import ContactModal from '../ContactModal'
import { useEmailModal } from '../../providers/emailModalProvider'

const NavBar = (props) => {
  const { isVisible, setIsVisible } = useEmailModal()

  return (
    <div className={styles.PortfolioNavBarComponent}>
      {/* <i i className="fab fa-hamburger"></i> */}
      <div className={styles.hamburgerMenuContainer}>
        <img className={styles.hamburgerMenu} src={hamburger} alt="hb"></img>
      </div>
      {console.log('isVisible: ', isVisible)}
      <img
        onClick={isVisible ? setIsVisible(true) : () => {}}
        className={styles.mailIcon}
        src={mail}
        alt="hb"
      ></img>

      <div className={isVisible ? styles.viewModal : styles.hideViewModal}>
        <ContactModal />
        <button
          onClick={() => setIsVisible(false)}
          className={styles.closeButton}
        >
          close
        </button>
      </div>
    </div>
  )
}
export default NavBar
