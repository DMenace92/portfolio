import React, {useState} from 'react'
import hamburger from '../../Images/hamburger.svg'
import mail from '../../Images/mail.svg'
import styles from './NavBar.module.css'
import ContactModal from '../ContactModal'



const NavBar = (props) => {
    // const [userAdmin, setUserAdmin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


  const toggle =()=>{
    setIsOpen(i => !i)
  
    
  }
  // console.log(isOpen)


  return (
    <div className={styles.PortfolioNavBarComponent}>
      {/* <i i className="fab fa-hamburger"></i> */}
      <div className={styles.hamburgerMenuContainer}>
      <img   className={styles.hamburgerMenu} src={hamburger} alt="hb"></img>
      </div>
      <img onClick={toggle} className={styles.mailIcon} src={mail} alt="hb"></img>
   
      <div className={isOpen !== true? styles.hideViewModal: styles.viewModal} >
        <ContactModal {...isOpen}/>
        <button onClick={toggle} className={styles.closeButton}>close</button>
        
      </div>

    </div>
  )
}
export default NavBar
