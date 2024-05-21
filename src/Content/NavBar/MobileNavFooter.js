import React from 'react'
import styles from './MobileNavFooter.module.css'
import { useActivePage } from '../../providers/activePageProvider'


const MobileNavFooter =()=>{
    const { activePage } = useActivePage()
    // console.log(activePage)

   return( <div className={styles.MainNavFooter}>
        <div className={styles.navigatorLables}>
            <div className={styles.testMNF}>
            <h4 className={activePage ===1 ? styles.navLabelTextColor: styles.navLabelText}>About<hr className={activePage === 1 ? styles.navLabelLineColor: styles.navLabelLine}></hr></h4>
            <h4 className={activePage === 2 ? styles.navLabelTextColor:styles.navLabelText}>Experience<hr className={activePage === 2 ? styles.navLabelLineColor: styles.navLabelLine}></hr></h4>
            <h4 className={activePage === 3 ? styles.navLabelTextColor: styles.navLabelText}>Projects<hr className={activePage === 3 ? styles.navLabelLineColor: styles.navLabelLine}></hr></h4>
            <h4 className={activePage === 4 ? styles.navLabelTextColor: styles.navLabelText}>Contacts<hr className={activePage === 4 ? styles.navLabelLineColor: styles.navLabelLine}></hr></h4>
            </div>
        </div>
    </div>)

}

export default MobileNavFooter;