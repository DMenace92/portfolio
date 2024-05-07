import React, { useState } from 'react'
import styles from './ProjectMainPage.module.css'

const ProjectMainPage = () => {
  return (
    <div style={{ color: 'black' }}>
      this is the project main page
      <div className={styles.projectMainHolder}>
        <div className={styles.leftPMPComponent}>
          <button className={styles.pmpButtons}>Add project</button>
          <button className={styles.pmpButtons}>update Project</button>
          <button className={styles.pmpButtons}>delete Project</button>
        </div>

        <div className={styles.rightPMPComponent}></div>
      </div>
    </div>
  )
}
export default ProjectMainPage
