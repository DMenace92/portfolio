import React, { useState, useEffect } from 'react'
import styles from './ProjectMainPage.module.css'
import ProjectCreateion from '../ProjectUtils/ProjectCreation'
import EditProject from '../ProjectUtils/EditProject'

const ProjectMainPage = (props) => {
  const [currentPage, setCurrentPage] = useState('')

  const _onClick = ({ target }) => {
    setCurrentPage(target.value)
  }
  const direct = (pageProp) => {
    switch (pageProp) {
      case 'createProject':
        return <ProjectCreateion />
      case 'editProject':
        return <EditProject />
      default:
        return null
    }
  }
  useEffect(
    (props) => {
      // props.fetchProject()
    },
    [props]
  )
  console.log(props.pro)
  return (
    <div style={{ color: 'black' }}>
      this is the project main page
      <div className={styles.projectMainHolder}>
        <div className={styles.leftPMPComponent}>
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
          <div className={styles.mainProjectScroll}>
            {props.pro &&
              props.pro.map((project) => (
                <div className={styles.myProjectCards} key={project.id}></div>
              ))}
            <div></div>
          </div>
          {/* <div>{direct(currentPage)}</div> */}
        </div>
      </div>
    </div>
  )
}
export default ProjectMainPage
