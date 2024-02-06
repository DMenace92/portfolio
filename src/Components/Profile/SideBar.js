import React from 'react'
// import { Grid, Paper } from '@material-ui/core';
// import { Grid, Paper } from '@mui/material'
import profilePic from '../../Images/profilePic.jpg'
import NodeIcon from '../../Images/NodeIcon.svg'
// import DownloadImage from '../../Images/download-file.png'
// import FileDownload from '../../Images/Dennis_Andrew_Enwiya_Resume.pdf'
import facebook from '../../Images/Vector5.svg'
import instagram from '../../Images/Vector4.svg'
import twitter from '../../Images/Vector1.svg'
import linkedin from '../../Images/Vector3.svg'
import github from '../../Images/Vector2.svg'
// import github from '../../Images/github.png'
import styles from'./ProfileComponent.module.css'
import {useSelector} from'react-redux'

const ProfileComponent = () => {
  const currentPage = useSelector((state)=> state.currentPage)
  const getNum = currentPage.currentPage
  console.log(getNum)


  return (
    <div className={styles.gridDesign}>
      <div
        // style={{ backgroundColor: 'rgba(240, 248, 255, 0)' }}
        className={styles.portfolioHolder}
      >
        {/* <div className="ProfileImageHolder"> */}
        <div className={styles.shapeContainer}>
        <img className={styles.ProfileImageHolder} src={profilePic}></img>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        </div>
        <div>
          <img className={styles.NodeIcon} src={NodeIcon}></img>
          {/* <div className={styles.NodeLineVert}></div>
          <div className={styles.NodeDesign}></div>
          <div className={styles.NodeDesign}></div>
          <div className={styles.NodeDesign}></div>
          <div className={styles.NodeDesign}></div> */}
          <div className={styles.nameContainer}>
          <h1 className={styles.nameTextStyle}>DENNIS</h1>
          <h1 className={styles.nameTextStyle1}>ENWIYA</h1>

          </div>
          <ul className={styles.navigationSelection}>
          {/* <div className={styles.NodeDesign}></div> */}
            <li className={getNum ===1? styles.selectionItemPage : styles.selectionItem}>About</li>
            <li className={getNum ===2? styles.selectionItemPage: styles.selectionItem}>Experience</li>
            <li className={getNum ===3? styles.selectionItemPage: styles.selectionItem}>Project</li>
            <li className={getNum ===4? styles.selectionItemPage: styles.selectionItem}>Contact Me</li>
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
