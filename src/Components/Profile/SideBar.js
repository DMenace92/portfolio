import React, { useState } from 'react'
import profilePic from '../../Images/profilePic.jpg'
import NodeIcon from '../../Images/NodeIcon.svg'
import facebook from '../../Images/Vector5.svg'
import instagram from '../../Images/Vector4.svg'
import twitter from '../../Images/Vector1.svg'
import linkedin from '../../Images/Vector3.svg'
import github from '../../Images/Vector2.svg'
import styles from './ProfileComponent.module.css'
import { useActivePage } from '../../providers/activePageProvider'

const ProfileComponent = (props) => {
  const { isDrawerVersion, drawerIsOpen } = props
  const { activePage } = useActivePage()
  // console.log(activePage)

  return (
    <div
      className={`${styles.gridDesign} ${
        isDrawerVersion && styles.drawerVersion
      } ${drawerIsOpen && styles.open}`}
    >
      <div className={styles.portfolioHolder}>
        {/* <div className="ProfileImageHolder"> */}
        <div className={styles.shapeContainer}>
          <div className="imagePosition">
            <img
              className={styles.ProfileImageHolder}
              src={profilePic}
              alt="Dennis Enwiya"
            ></img>
          </div>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
        </div>
        <div>
          <h1 className={styles.nameContainer}>
            <span className={styles.nameTextStyle}>DENNIS</span>
            <span className={styles.nameTextStyle1}>ENWIYA</span>
          </h1>

          <div className={styles.contentItemsWrapper}>
            <img className={styles.NodeIcon} src={NodeIcon} alt="Node"></img>

            <ul className={styles.navigationSelection}>
              {/* <div className={styles.NodeDesign}></div> */}
              <li
                className={`${styles.selectionOption} 
                ${
                  activePage === 1
                    ? styles.selectionItemPage
                    : styles.selectionItem
                }`}
              >
                About
              </li>
              <li
                className={`${styles.selectionOption} 
                ${
                  activePage === 2
                    ? styles.selectionItemPage
                    : styles.selectionItem
                }`}
              >
                Experience
              </li>
              <li
                className={`${styles.selectionOption} 
                ${
                  activePage === 3
                    ? styles.selectionItemPage
                    : styles.selectionItem
                }`}
              >
                Project
              </li>
              <li
                className={`${styles.selectionOption} 
                  ${
                    activePage === 4
                      ? styles.selectionItemPage
                      : styles.selectionItem
                  }`}
              >
                Contact Me
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocialMedia}>
          {/* Add your social media icons or links here */}
          <a
            href="https://www.facebook.com/dennis.enwiya/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
            <img
              className={styles.footerIcons}
              src={facebook}
              alt="Facebook"
            ></img>
          </a>
          <a
            href="https://twitter.com/DEnwiya"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <img
              className={styles.footerIcons}
              src={twitter}
              alt="Twitter"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/theonlymenace/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <img
              className={styles.footerIcons}
              src={instagram}
              alt="Instagram"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/dennisenwiya"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <img
              className={styles.footerIcons}
              src={linkedin}
              alt="LinkedIn"
            ></img>
          </a>
          <a
            href="https://github.com/DMenace92"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <img className={styles.footerIcons} src={github} alt="GitHub"></img>
          </a>
        </div>
      </div>
      <div className={styles.ScrollItemsContainer}></div>
    </div>
  )
}
export default ProfileComponent
