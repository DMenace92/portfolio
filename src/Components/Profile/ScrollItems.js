import React from 'react'
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe'
import Experience from '../../Content/Experience'
import Projects from '../../Content/Projects'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import CodeDecal from '../CodeDecal/CodeDecal'
import EmailForm from '../EmailForm/EmailForm'
import ContactModal from '../../Content/ContactModal'

const ScrollItems = () => {
  return (
    <div className={styles.contentWrapper}>
      <AboutMe />
      <Experience />
      <Projects />
      {/* <EmailForm /> */}
      <ContactModal hideCancel={true} />
    </div>
  )
}
export default ScrollItems
