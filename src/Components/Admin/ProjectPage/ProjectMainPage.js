import React, { useState } from 'react'
import styles from './ProjectMainPage.module.css'
import ProjectCreateion from '../ProjectUtils/ProjectCreation'
import EditProject from '../ProjectUtils/EditProject'
import ProjectView from '../../../Containers/FetchItemProjectContainer'

const ProjectMainPage = () => {
  const [currentPage, setCurrentPage] = useState('ProjectView')

  const _onClick = ({ target }) => {
    setCurrentPage(target.value)
  }
  const direct = (pageProp) => {
    switch (pageProp) {
      case 'ProjectView':
        return <ProjectView />
      case 'createProject':
        return <ProjectCreateion />
      case 'editProject':
        return <EditProject />
      default:
        return null
    }
  }

  return (
    <div style={{ color: 'black' }}>
      <div className={styles.projectMainHolder}>
        <div className={styles.leftPMPComponent}>
          <button
            className={styles.pmpButtons}
            value="ProjectView"
            onClick={_onClick}
          >
            View Project
          </button>
          <button
            className={styles.pmpButtons}
            value="createProject"
            onClick={_onClick}
          >
            Add project
          </button>
          <button
            className={styles.pmpButtons}
            value="editProject"
            onClick={_onClick}
          >
            update Project
          </button>
          <button className={styles.pmpButtons}>delete Project</button>
        </div>

        <div className={styles.rightPMPComponent}>
          <div>{direct(currentPage)}</div>
        </div>
      </div>
    </div>
  )
}
export default ProjectMainPage
