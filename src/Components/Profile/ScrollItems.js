import React from 'react'
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe'
import Experience from '../../Content/Experience'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import CodeDecal from '../CodeDecal/CodeDecal'
import EmailForm from '../EmailForm/EmailForm'

const ScrollItems = () => {
  return (
    <div className={styles.contentContainersWrapper}>
      <ContentContainer pageNumber={1}>
        <AboutMe />
      </ContentContainer>
      <ContentContainer pageNumber={2}>
        <Experience />
      </ContentContainer>
      <ContentContainer pageNumber={3}>
        <AboutMe />
      </ContentContainer>
      <ContentContainer pageNumber={4}>
        <EmailForm />
      </ContentContainer>
      <div className={styles.topDecorStyle}>
        <CodeDecal />
      </div>
      <div className={styles.bottomDecorStyle}>
        <CodeDecal />
      </div>
    </div>
  )
}
export default ScrollItems
