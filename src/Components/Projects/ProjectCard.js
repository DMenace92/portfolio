import React, { useEffect, useState } from 'react'
import styles from './ProjectCard.module.css'
import DownCaret from '../DownCaret'
import ExternalLink from './ExternalLink'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../firebaseConfig'

export default function ProjectCard(props) {
  const { title, techUsed, links, features, image, video, description } = props
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [updatedImages, setUpdatedImages] = useState([])

  const fetchImageUrls = async (image) => {
    const allImages = []
    try {
      const storageRef = ref(storage, `${image.link}`)
      const url = await getDownloadURL(storageRef)

      allImages.push({ ...image, url: url })
    } catch (error) {
      console.error('Error fetching image URL:', error)
    }

    setUpdatedImages(allImages)
  }

  useEffect(() => {
    if (image) {
      image.map(async (image) => {
        fetchImageUrls(image)
      })
    }
  }, [image])

  return (
    <div
      className={`${styles.cardContainer}  ${
        isCollapsed ? styles.collapsed : styles.expanded
      }`}
    >
      <div className={styles.cardContent}>
        {/* IMAGE */}
        {updatedImages &&
          updatedImages.map((singleImg) => {
            return (
              <img
                className={`${styles.media} ${
                  isCollapsed ? styles.collapsed : styles.expanded
                }`}
                src={singleImg.url} // Ensure this is the correct URL
                alt={singleImg.description}
              />
            )
          })}
        {/* VIDEO */}
        {video && (
          <video
            className={styles.media}
            controls
            src={video.link}
            alt={video.description}
          ></video>
        )}
        <div className={styles.upperContent}>
          {/* TITLE */}
          <h3 className={styles.projectTitle}>{title}</h3>
          {/* TECH USED */}
          {techUsed && (
            <div className={styles.pillContainer}>
              {techUsed.map((techUsed) => {
                return (
                  <div key={techUsed} className={styles.pill}>
                    {techUsed}
                  </div>
                )
              })}
            </div>
          )}
          {/* DESCRIPTION */}
          <div>
            {isCollapsed && description.length > 200
              ? description.slice(0, 200) + '...'
              : description}
          </div>
        </div>

        {!isCollapsed ? (
          <div>
            {/* LINKS */}
            {links && (
              <ul className={styles.linkList}>
                {links.map((link) => {
                  return (
                    <li key={link} className={styles.linkItem}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                      <ExternalLink className={styles.icon} color="#FD6389" />
                    </li>
                  )
                })}
              </ul>
            )}
            {/* FEATURES */}
            {features && (
              <div>
                <h4>Features</h4>
                <ul>
                  {features.map((feature) => {
                    return <li key={feature}>{feature}</li>
                  })}
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </div>
      {/* COLLAPSE/EXPAND ICON */}
      <div
        className={styles.iconContainer}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <DownCaret
          className={`${isCollapsed ? styles.collapsed : styles.expanded} ${
            styles.bottomIcon
          } `}
        />
      </div>
    </div>
  )
}

// import React, { useState } from 'react'
// import styles from './ProjectCard.module.css'
// import DownCaret from '../DownCaret'
// import ExternalLink from './ExternalLink'

// export default function ProjectCard(props) {
//   const { title, techUsed, links, features, image, video, description } = props
//   const [isCollapsed, setIsCollapsed] = useState(true)
//   console.log(props.image.link, 'right here')
//   return (
//     <div
//       className={`${styles.cardContainer}  ${
//         isCollapsed ? styles.collapsed : styles.expanded
//       }`}
//     >
//       <div className={styles.cardContent}>
//         {/* IMAGE */}
//         {image && (
//           <img
//             className={`${styles.media} ${
//               isCollapsed ? styles.collapsed : styles.expanded
//             }`}
//             // src={image.link}
//             src={`http://localhost:3000${image.link}`}
//             alt={image.description}
//           />
//         )}
//         {/* VIDEO */}
//         {video && (
//           <video
//             className={styles.media}
//             controls
//             src={video.link}
//             alt={video.description}
//           ></video>
//         )}
//         <div className={styles.upperContent}>
//           {/* TITLE */}
//           <h3 className={styles.projectTitle}>{title}</h3>
//           {/* TECH USED */}
//           {techUsed && (
//             <div className={styles.pillContainer}>
//               {techUsed.map((techUsed) => {
//                 return (
//                   <div key={techUsed} className={styles.pill}>
//                     {techUsed}
//                   </div>
//                 )
//               })}
//             </div>
//           )}
//           {/* DESCRIPTION */}
//           <div>
//             {isCollapsed && description.length > 200
//               ? description.slice(0, 200) + '...'
//               : description}
//           </div>
//         </div>

//         {!isCollapsed ? (
//           <div>
//             {/* LINKS */}
//             {links && (
//               <ul className={styles.linkList}>
//                 {links.map((link) => {
//                   return (
//                     <li key={link} className={styles.linkItem}>
//                       <a href={link.url} target="_blank" rel="noreferrer">
//                         {link.label}
//                       </a>
//                       <ExternalLink className={styles.icon} color="#FD6389" />
//                     </li>
//                   )
//                 })}
//               </ul>
//             )}
//             {/* FEATURES */}
//             {features && (
//               <div>
//                 <h4>Features</h4>
//                 <ul>
//                   {features.map((feature) => {
//                     return <li>{feature}</li>
//                   })}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : null}
//       </div>
//       {/* COLLAPSE/EXPAND ICON */}
//       <div
//         className={styles.iconContainer}
//         onClick={() => setIsCollapsed(!isCollapsed)}
//       >
//         <DownCaret
//           className={`${isCollapsed ? styles.collapsed : styles.expanded} ${
//             styles.bottomIcon
//           } `}
//         />
//       </div>
//     </div>
//   )
// }
