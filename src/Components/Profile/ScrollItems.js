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
      <div className={styles.innerWrapper}>
        <div className={styles.topDecorStyle}>
          <CodeDecal />
        </div>
        <AboutMe />
        <Experience />
        <Projects />
        {/* <EmailForm /> */}
        <div style={{ paddingBottom: 100, marginLeft:150,}}>
          <ContactModal hideCancel={true} />
        </div>
        <div className={styles.bottomDecorStyle}>
          <CodeDecal />
        </div>
      </div>
    </div>
  )
}
export default ScrollItems
