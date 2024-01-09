import React from 'react'
// import { Grid, Paper } from '@material-ui/core';
// import { Grid, Paper } from '@mui/material'
import profilePic from '../../Images/profilePic.jpg'
// import DownloadImage from '../../Images/download-file.png'
// import FileDownload from '../../Images/Dennis_Andrew_Enwiya_Resume.pdf'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import linkedin from '../../Images/linkedin.png'
import github from '../../Images/github.png'
// import github from '../../Images/github.png'
import styles from'./ProfileComponent.module.css'

const ProfileComponent = () => {
  return (
    <div className={styles.gridDesign}>
      <div
        style={{ backgroundColor: 'rgba(240, 248, 255, 0)' }}
        className={styles.portfolioHolder}
      >
        {/* <div className="ProfileImageHolder"> */}
        <img className={styles.ProfileImageHolder} src={profilePic}></img>
        <div>
          <h1 className={styles.nameTextStyle}>Dennis A, Enwiya</h1>
          <ul className={styles.navigationSelection}>
            <li className={styles.selectionItem}>About</li>
            <li className={styles.selectionItem}>experience</li>
            <li className={styles.selectionItem}>Project</li>
            <li className={styles.selectionItem}>Contact Me</li>
          </ul>
        </div>
        <div className={styles.footerSocialMedia}>
          {/* Add your social media icons or links here */}
          <a href="https://www.facebook.com/dennis.enwiya/">
            <i className="fab fa-facebook"></i>
            <img className={styles.footerIcons} src={facebook}></img>
          </a>
          <a href="https://twitter.com/DEnwiya">
            <i className="fab fa-twitter"></i>
            <img className={styles.footerIcons} src={twitter}></img>
          </a>
          <a href="https://www.instagram.com/theonlymenace/">
            <i className="fab fa-instagram"></i>
            <img className={styles.footerIcons} src={instagram}></img>
          </a>
          <a href="https://www.linkedin.com/in/dennisenwiya">
            <i className="fab fa-instagram"></i>
            <img className={styles.footerIcons} src={linkedin}></img>
          </a>
          <a href="https://github.com/DMenace92">
            <i className="fab fa-twitter"></i>
            <img className={styles.footerIcons} src={github}></img>
          </a>
        </div>

      </div>
      <div className={styles.ScrollItemsContainer}>
      </div>
    </div>
  )
}
export default ProfileComponent
