import React, { useState } from 'react'
import styles from './contactModal.module.css'
import { useEmailModal } from '../providers/emailModalProvider'

const ContactModal = (props) => {
  const { setIsVisible } = useEmailModal()
  const [emailData, setEmailData] = useState({
    customName: '',
    phoneNumber: '',
    email: '',
    message: '',
    hidden: '',
  })

  const onChange = ({ target }) => {
    setEmailData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (emailData.hidden.trim() !== '') {
      console.log('Submission Failed')
      return
    } else {
      props.emailer(emailData)
      setEmailData({
        customName: '',
        phoneNumber: '',
        email: '',
        message: '',
        hidden: '',
      })
    }
  }
  console.log(props)

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
            <form className={styles.formLayoutDesign} onSubmit={onSubmit}>
              <div className={styles.formLayoutDesign}>
                <label className={styles.inputLableDesign}>
                  {'     '}Email {'  '}
                  <input
                    name="email"
                    type="email"
                    className={styles.inputDesign}
                    onChange={onChange}
                    value={emailData.email}
                  ></input>
                </label>
                <label className={styles.inputLableDesign}>
                  Your Name
                  <input
                    name="customName"
                    className={styles.inputDesign}
                    onChange={onChange}
                    value={emailData.customName}
                  ></input>
                </label>
                <label className={styles.inputLableDesign}>
                  Phone Number
                  <input
                    name="phoneNumber"
                    className={styles.inputDesign}
                    onChange={onChange}
                    value={emailData.phoneNumber}
                  ></input>
                </label>
              </div>
              <div className={styles.textAreaContainer}>
                <label className={styles.inputLableTextArea}>Message</label>

                <textarea
                  name="message"
                  className={styles.inputTextArea}
                  cols="200"
                  rows="10"
                  onChange={onChange}
                  value={emailData.message}
                ></textarea>
                <input
                  type="text"
                  name="hidden"
                  style={{ display: 'none' }}
                  value={emailData.hidden}
                  onChange={onChange}
                />
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactModal
