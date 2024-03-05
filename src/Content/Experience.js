import React, { forwardRef } from 'react'
// import { useParams } from 'react-router-dom'
import styles from './Experience.module.css'
// import CollapsibleComponent from '../Components/PersonalInfoContainer/About/SchoolDetail/CollapsibleComponent'

const Experience = forwardRef((props, ref) => {
  // useParams()
  // const { style } = props

  return (
    // <div style={{ ...style, maxWidth: 'calc(100% - 8vw)', paddingBottom: 100 }}>
    <div className={styles.ExperienceMainContainer}>
      <div className ={styles.ExperienceBanner}><h1>Education & Experience</h1></div>
     
    </div>
  )
})
export default Experience
