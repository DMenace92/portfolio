import React from 'react'
import mail from '../../Images/mail.svg'
import styles from './NavBar.module.css'
import { useEmailModal } from '../../providers/emailModalProvider'
import MenuIcon from './MenuIcon'

const NavBar = (props) => {
  const { isVisible, setIsVisible } = useEmailModal()

  return (
    <div className={styles.PortfolioNavBarComponent}>
      {/* <i i className="fab fa-hamburger"></i> */}
      <div className={styles.hamburgerMenuContainer}>
        <MenuIcon width={25} height={25} color="white" />
      </div>

      {console.log('isVisible: ', isVisible)}
      <img
        onClick={isVisible ? setIsVisible(true) : () => {}}
        className={styles.mailIcon}
        src={mail}
        alt="hb"
      ></img>
    </div>
  )
}
export default NavBar
