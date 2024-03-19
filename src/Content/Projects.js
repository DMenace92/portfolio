import React from 'react'
import styles from './Projects.module.css'
import arrow from '../Images/arrow.svg'

const Projects = () => {
  return (
    <div className={styles.ProjectMainContainer}>
      <div className={styles.ProjectBanner}>
        <div className={styles.objectTest}>
          <h2>Projects</h2>
        </div>
      </div>
      <div className={styles.MainImageHolderContainer}>
        <div className={styles.projectImageHolderTest}>
          <button className={styles.navigationImageButton}>
            <img src={arrow}></img>
          </button>
          <div className={styles.projectImageHolder}>{/* carrocell */}</div>
          <button className={styles.navigationImageButton}>
            <img className={styles.arrowIconDesign} src={arrow}></img>
          </button>
        </div>
        <div className={styles.ProjectTitleInfo}>
          <h2 className={styles.projectTitleText}>Project Title</h2>
        </div>
      </div>
    </div>
  )
}
export default Projects
