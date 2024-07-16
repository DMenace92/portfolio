import React from 'react'
import styles from './contactModal.module.css'
import { useEmailModal } from '../providers/emailModalProvider'

const ContactModal = (props) => {
  const { setIsVisible } = useEmailModal()

  return (
    <>
      <div
        className={styles.modalBackdrop}
        onClick={() => setIsVisible(false)}
      />
      <div className={styles.contactModalBody}>
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
                cols="200"
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
