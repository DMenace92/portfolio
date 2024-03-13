import React, { forwardRef } from 'react'
// import { useParams } from 'react-router-dom'
import styles from './Experience.module.css'
// import CollapsibleComponent from '../Components/PersonalInfoContainer/About/SchoolDetail/CollapsibleComponent'

const Experience = forwardRef((props, ref) => {
  // useParams()
  // const { style } = props

  return (
    // <div style={{ ...style, maxWidth: 'calc(100% - 8vw)', paddingBottom: 100 }}>
    <div className={styles.EdExMainContainer}>
      <div className ={styles.EducationBanner}>
        <div className={styles.EdTextHolder}>
        <h1 className={styles.EducationBannerText1}>Education</h1> 
        <h1 className={styles.EducationBannerText2}>&</h1> 
        <h1 className={styles.EducationBannerText3}>Experience</h1></div>
        </div>
      <div className={styles.educationSegment}>
        <div className={styles.segmentOne}>
          <h1>Education</h1>
        </div>
        <div className={styles.segmentTwo}>
          <p className={styles.schoolInfoTitle}>Southern New Hampshire University</p>
          <h6 className={styles.EducationYearText}>2021 - 2023</h6>
          <p className={styles.schoolInfoTitle}>Galvanize</p>
          <h6 className={styles.EducationYearText}>2018 - 2019</h6>
          <p className={styles.schoolInfoTitle}>Greenway High School</p>
          <h6 className={styles.EducationYearText}>2021 - 2023</h6>
        </div>
      </div>
      <div  className={styles.ExperienceSegment}>
        <div className={styles.segmentThree}>
          <h1>Experience</h1>
        </div>
        <div className={styles.segmentFour}></div>
        <p className={styles.workInfoTitle}>Enwiya Software Solutions, LLC (March 2019 - present) </p>
        <p className={styles.workInfoTitle}>Full-Stack Developer</p>
          <h6 className={styles.WorkSummery}>In my freelance career, I've independently crafted personal web projects that showcase my creativity and technical proficiency, leveraging cutting-edge technologies to deliver innovative solutions. Recognizing the importance of staying current, I'm committed to continuous learning through online courses, workshops, and industry publications. Additionally, I actively participate in developer communities, engage in forums, and attend conferences to exchange insights, expand my skill set, and remain competitive in the dynamic tech landscape. This proactive approach ensures that I stay updated with the latest trends and advancements, enabling me to deliver exceptional results to my clients while pushing the boundaries of web development. </h6>
        <p className={styles.workInfoTitle}>Walmart (April 2012 - present) </p>
        <p className={styles.workInfoTitle}>Certified Pharmay Technician</p>
          <h6 className={styles.WorkSummery}>Accepted and inputted prescription information and filled prescriptions for approval by on-duty pharmacists. Responsible for restocking pharmacy materials and ordering drugs. Answered phone calls and aided with patient concerns. </h6>
          <p className={styles.workInfoTitle}>IeLinks,inc (March 2019 - September 2019)</p>
          <p className={styles.workInfoTitle}>Full-Stack Web Developer</p>
          <h6 className={styles.WorkSummery}>Recruited by company to create and maintain content within web applications by providing front and back end web development services. Created educational courses for logistical companies to provide work/trade training, and to provide education for Commercial Drivers Licensing. Worked on multiple company-wide projects simultaneously and provided assistance with development planning on each major project.
</h6>
          <p className={styles.workInfoTitle}>Banner Health (September 2016 - October 2017)</p>
          <p className={styles.workInfoTitle}>In-Patient Certified Pharmacy Technician</p>

          <h6 className={styles.WorkSummery}>Provided and supplied the entire hospital with patient-specific medications from the onsite pharmacy under the supervision of the pharmacist. Assisted in preparing compounded and intravenous medications and chemotherapeutic agents.
</h6>
      

      </div>
     
    </div>
  )
})
export default Experience
