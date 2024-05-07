import React, { useState } from 'react'
import mail from '../../Images/mail.svg'
import styles from './NavBar.module.css'
import { useEmailModal } from '../../providers/emailModalProvider'
import MenuIcon from './MenuIcon'
import ProfileComponent from '../../Components/Profile/SideBar'
import CloseIcon from './CloseIcon'

const NavBar = () => {
  const { isVisible, setIsVisible } = useEmailModal()
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <div className={styles.PortfolioNavBarComponent}>
      {/* <i i className="fab fa-hamburger"></i> */}
      <div className={styles.hamburgerMenuContainer}>
        <div
          className={`${styles.hamburgerMenu} ${
            menuIsVisible ? styles.open : null
          }`}
        >
          <div
            className={styles.hamburgerMenuIconContainer}
            onClick={() => setMenuIsVisible(!menuIsVisible)}
          >
            {menuIsVisible ? (
              <CloseIcon width={25} height={25} color="white" />
            ) : (
              <MenuIcon width={25} height={25} color="white" />
            )}
          </div>
          <ProfileComponent
            isDrawerVersion={true}
            drawerIsOpen={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>
      </div>
      {menuIsVisible && (
        <div
          className={styles.mobileMenuBackdrop}
          onClick={() => setMenuIsVisible(false)}
        />
      )}

      <div className={styles.mobileTitle}>
        <span>DENNIS</span>
        <span>ENWIYA</span>
      </div>

      <img
        onClick={() => (!isVisible ? setIsVisible(true) : null)}
        className={styles.mailIcon}
        src={mail}
        alt="hb"
      ></img>
    </div>
  )
}
export default NavBar
