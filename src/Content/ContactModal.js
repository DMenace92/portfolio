import React, { useState, useEffect } from 'react'
import styles from './contactModal.module.css'
import CodeDecal from '../Components/CodeDecal/CodeDecal'
import { useEmailModal } from '../providers/emailModalProvider'

const ContactModal = (props) => {
  const { isVisible, setIsVisible } = useEmailModal()

  // console.log('chokai: ', isVisible)

  
  // if (!isVisible) return null
  // console.log(isVisible, "in the contact side")

  return (
    <>
    <div className={styles.modalBackdrop} onClick={()=>setIsVisible(false)}/>
    <div className={styles.ContactModleBody}>
      <div className={styles.hedderLable}>
        <p className={styles.headerTitle}>Contact me Today</p>
      </div>
      <div className={styles.modalKingWrapper}>
        <div classname={styles.lableDecorator}>
          <div className={styles.formLayoutDesign}>
            <label className={styles.inputLableDesign}>
              {'     '}Email {'  '}
              <input className={styles.inputDesign}></input>
            </label>
            <label className={styles.inputLableDesign}>
              Subject
              <input className={styles.inputDesign}></input>
            </label>
            <label className={styles.inputLableDesign}>
              Phone Number
              <input className={styles.inputDesign}></input>
            </label>
          </div>
          <div className={styles.textAreaContainer}>
            <label className={styles.inputLableTextArea}>Message</label>

            <textarea
              className={styles.inputTextArea}
              cols="100"
              rows="10"
            ></textarea>
          </div>

          {/* <label className={styles.inputLableTextArea}>Message</label> */}
          <div className={styles.messageButtonWrapper}>
            {props.hideCancel ? null : (
              <button
                className={styles.messageStyleButtonCancel}
                onClick={() => setIsVisible(false)}
              >
                CANCEL
              </button>
            )}

            <button className={styles.messageStyleButtonSend}>SEND</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactModal
