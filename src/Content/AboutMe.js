import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../Components/Profile/ScrollItem.module.css'

const AboutMe = forwardRef((props, ref) => {
  useParams()
  const { style, className } = props

  return (
    <div
      // className={`${styles.aboutMeWrapper} ${className}`}
      style={{ ...style }}
    >
      <div ref={ref}>
        <h1 className={styles.aboutMeHeader}>About Me:</h1>
        <div>
          Hey there! I'm Dennis Enwiya, and I'm thrilled to share my passion for
          software development with you. I have always been captivated by the
          world of technology, and pursuing a career in this field has been a
          dream come true. To kickstart my journey, I enrolled in Galvanize, a
          prestigious 6-month boot camp dedicated to software development. This
          intense program provided me with invaluable certifications, helping me
          establish a strong foundation in the field. During my time at
          Galvanize, I not only sharpened my technical skills but also learned
          the importance of collaboration and innovative problem-solving.
          <br />
          <br />
          Fueling my desire for knowledge, I decided to pursue a degree in
          Computer Science from Southern New Hampshire University. This academic
          experience expanded my understanding of core computer science
          principles, algorithms, and software development methodologies. It
          also instilled in me a lifelong passion for learning and staying up to
          date with the latest technological advancements. Equipped with
          certifications from Galvanize and a degree from Southern New Hampshire
          University, I am excited to make a meaningful impact in the software
          development industry. I thrive on tackling complex coding challenges,
          building robust applications, and contributing to the continuous
          innovation that drives the tech landscape forward.
          <br />
          <br />
          I'm an avid believer in personal and professional growth, constantly
          seeking new opportunities to expand my skill set. With my
          determination, drive, and solid foundation in software development, I
          am confident in my ability to bring value to any organization looking
          for a dedicated and accomplished software developer. Join me on this
          exciting journey as I strive to make a lasting impact in the
          ever-evolving world of software development. Together, let's push
          boundaries and create innovative solutions that shape the future.
        </div>
      </div>
    </div>
  )
})

export default AboutMe
