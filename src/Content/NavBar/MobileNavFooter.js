import React from 'react'
import styles from './MobileNavFooter.module.css'

const MobileNavFooter =()=>{
   return( <div className={styles.MainNavFooter}>
        <div className={styles.navigatorLables}>
            <div className={styles.testMNF}>
            <h4 className={styles.navLabelText}>About</h4>
            <h4 className={styles.navLabelText}>Experience</h4>
            <h4 className={styles.navLabelText}>Projects</h4>
            <h4 className={styles.navLabelText}>Contacts</h4>
            </div>
        </div>
    </div>)

}

export default MobileNavFooter;