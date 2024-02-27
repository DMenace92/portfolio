import React, {useState} from 'react'
import hamburger from '../../Images/hamburger.svg'
import mail from '../../Images/mail.svg'
import styles from './NavBar.module.css'
import { Modal, ModalHeader } from "reactstrap";
import ContactModal from '../ContactModal';


const NavBar = () => {
    // const [userAdmin, setUserAdmin] = useState(false);
    const [modal, setModal] = useState(false);

 
  
    // console.log(userAdmin)
    const toggle = () => setModal(!modal);
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle =()=>{
//     setIsOpen(i => !i)
  
    
//   }
//   console.log(isOpen)


  return (
    <div className={styles.PortfolioNavBarComponent}>
      {/* <i i className="fab fa-hamburger"></i> */}
      <button  onClick={toggle}>
      <img className={styles.hamburgerMenu} src={hamburger} alt="hb"></img>
      </button>
      <img className={styles.mailIcon} src={mail} alt="hb"></img>
   
    </div>
  )
}
export default NavBar
