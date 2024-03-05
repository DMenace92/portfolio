import React, {useState, useEffect} from 'react'
import ContactModal from '../ContactModal';
import mail from '../../Images/mail.svg'

import style from './MailNav.module.css'

const MailNav =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle =()=>{
        setIsOpen(i => !i)
      
        
      }
    //   useEffect((props)=>{
    //     setIsOpen(props)
    //   },[])

    return(
        <div className={style.PortfolioMailBarComponent}>
            <div className={style.cornerDesign}>
             <img onClick={toggle} className={style.mailNavIcon} src={mail} alt="hb"></img>
             </div>
   
   <div className={isOpen !== true? style.hideViewModal: style.viewModal} >
     <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}/>
     {/* <button onClick={toggle} className={style.closeButton}>close</button> */}
     
   </div>
        </div>
    )
}
export default MailNav;