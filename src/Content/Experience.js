import React, { forwardRef } from 'react'
// import { useParams } from 'react-router-dom'
import styles from './Experience.module.css'
import deIcon from '../Images/de.png'
import walmartIcon from '../Images/walmart.png'
import ieLinks from '../Images/ielinks.png'
import banner from '../Images/banner.png'
import { sectionIds } from '../constants'
// import CollapsibleComponent from '../Components/PersonalInfoContainer/About/SchoolDetail/CollapsibleComponent'

const Experience = forwardRef((props, ref) => {
  // useParams()
  // const { style } = props

  return (
    // <div style={{ ...style, maxWidth: 'calc(100% - 8vw)', paddingBottom: 100 }}>
    <div id={sectionIds.experience} className={styles.EdExMainContainer}>
      <h2>
        <span>Education</span>
        <span className={styles.ampersomething}>&</span>
        <span>Experience</span>
      </h2>

      <div className={styles.educationSegment}>
        <h3 className={styles.subSectionHeader}>Education</h3>
        <div>
          <div className={styles.schoolInfoHolder}>
            <p className={styles.schoolInfoTitle}>
              Southern New Hampshire University
            </p>
            <p className={styles.EducationYearText}>2021 - 2023</p>
          </div>
          <div className={styles.schoolInfoHolder}>
            <p className={styles.schoolInfoTitle}>Galvanize</p>
            <p className={styles.EducationYearText}>2018 - 2019</p>
          </div>
          <div className={styles.schoolInfoHolder}>
            <p className={styles.schoolInfoTitle}>Greenway High School</p>
            <p className={styles.EducationYearText}>2021 - 2023</p>
          </div>
        </div>
      </div>
      <div className={styles.ExperienceSegment}>
        <div className={styles.segmentThree}>
          <h3 className={styles.subSectionHeader}>Experience</h3>
        </div>
        <div className={styles.segmentFour}></div>
        <div className={styles.workExpHolder}>
          <img
            src={deIcon}
            alt="dennis enwiya freelance"
            className={styles.companyIcon}
          />
          <div className={styles.companyAndTitle}>
            <p className={styles.workCompanyTitle}>
              Enwiya Software Solutions, LLC (March 2019 - present)
            </p>
            <p className={styles.workJobTitle}>Full-Stack Developer</p>
          </div>
        </div>
        <p className={styles.WorkSummery}>
          In my freelance career, I've independently crafted personal web
          projects that showcase my creativity and technical proficiency,
          leveraging cutting-edge technologies to deliver innovative solutions.
          Recognizing the importance of staying current, I'm committed to
          continuous learning through online courses, workshops, and industry
          publications. Additionally, I actively participate in developer
          communities, engage in forums, and attend conferences to exchange
          insights, expand my skill set, and remain competitive in the dynamic
          tech landscape. This proactive approach ensures that I stay updated
          with the latest trends and advancements, enabling me to deliver
          exceptional results to my clients while pushing the boundaries of web
          development.
        </p>
        <div className={styles.workExpHolder}>
          <img src={walmartIcon} alt="walmart" className={styles.companyIcon} />
          <div className={styles.companyAndTitle}>
            <p className={styles.workCompanyTitle}>
              Walmart (April 2012 - present)
            </p>
            <p className={styles.workJobTitle}>Certified Pharmay Technician</p>
          </div>
        </div>
        <p className={styles.WorkSummery}>
          Accepted and inputted prescription information and filled
          prescriptions for approval by on-duty pharmacists. Responsible for
          restocking pharmacy materials and ordering drugs. Answered phone calls
          and aided with patient concerns.
        </p>
        <div className={styles.workExpHolder}>
          <img src={ieLinks} alt="ieLinks" className={styles.companyIcon} />
          <div className={styles.companyAndTitle}>
            <p className={styles.workCompanyTitle}>
              IeLinks,inc (March 2019 - September 2019)
            </p>
            <p className={styles.workJobTitle}>Full-Stack Web Developer</p>
          </div>
        </div>
        <p className={styles.WorkSummery}>
          Recruited by company to create and maintain content within web
          applications by providing front and back end web development services.
          Created educational courses for logistical companies to provide
          work/trade training, and to provide education for Commercial Drivers
          Licensing. Worked on multiple company-wide projects simultaneously and
          provided assistance with development planning on each major project.
        </p>
        <div className={styles.workExpHolder}>
          <img
            src={banner}
            alt="banner health"
            className={styles.companyIcon}
          />
          <div className={styles.companyAndTitle}>
            <p className={styles.workCompanyTitle}>
              Banner Health (September 2016 - October 2017)
            </p>
            <p className={styles.workJobTitle}>
              In-Patient Certified Pharmacy Technician
            </p>
          </div>
        </div>

        <p className={styles.WorkSummery}>
          Provided and supplied the entire hospital with patient-specific
          medications from the onsite pharmacy under the supervision of the
          pharmacist. Assisted in preparing compounded and intravenous
          medications and chemotherapeutic agents.
        </p>
      </div>
    </div>
  )
})
export default Experience
