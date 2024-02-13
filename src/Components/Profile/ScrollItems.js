import React from 'react'
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe'
import Experience from '../../Content/Experience'
import { ActivePageProvider } from '../../providers/activePageProvider'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import CodeDecal from '../CodeDecal/CodeDecal'

const ScrollItems = () => {
  return (
    <ActivePageProvider>
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
          <AboutMe />
        </ContentContainer>
        <div className={styles.topDecorStyle}>
          <CodeDecal />
        </div>
        <div className={styles.bottomDecorStyle}>
          <CodeDecal />
        </div>
      </div>
    </ActivePageProvider>
  )
}
export default ScrollItems
