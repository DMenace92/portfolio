import React from 'react';
//import { Grid, Paper } from '@material-ui/core';
import { Grid, Paper } from '@mui/material'
import profilePic from '../../Images/profilePic.jpg'
import DownloadImage from '../../Images/download-file.png'
import FileDownload from '../../Images/Dennis_Andrew_Enwiya_Resume.pdf'
import github from '../../Images/github.png'
import './ProfileComponent.css';

const ProfileComponent = () => {
    return (
        <div>
            <Grid>
                <div className="profileHolder">
                    <Paper className='profileWrapper' elevation="12">
                        <div className="profileImageDesign">
                            <img className="myImage" src={profilePic} alt="this is me" />
                        </div>
                        <div className="aboutMeWrapper">
                            <h6 className="aboutMeItem">
                            </h6>

                            <h6 className="aboutMeItem">
                                Hey there! I'm Dennis Enwiya, and I'm thrilled to share my passion for software development with you. I have always been captivated by the world of technology, and pursuing a career in this field has been a dream come true.

                                To kickstart my journey, I enrolled in Galvanize, a prestigious 6-month boot camp dedicated to software development. This intense program provided me with invaluable certifications, helping me establish a strong foundation in the field. During my time at Galvanize, I not only sharpened my technical skills but also learned the importance of collaboration and innovative problem-solving.
                                <br /><br />
                                Fueling my desire for knowledge, I decided to pursue a degree in Computer Science from Southern New Hampshire University. This academic experience expanded my understanding of core computer science principles, algorithms, and software development methodologies. It also instilled in me a lifelong passion for learning and staying up to date with the latest technological advancements.

                                Equipped with certifications from Galvanize and a degree from Southern New Hampshire University, I am excited to make a meaningful impact in the software development industry. I thrive on tackling complex coding challenges, building robust applications, and contributing to the continuous innovation that drives the tech landscape forward.
                                <br /><br />

                                I'm an avid believer in personal and professional growth, constantly seeking new opportunities to expand my skill set. With my determination, drive, and solid foundation in software development, I am confident in my ability to bring value to any organization looking for a dedicated and accomplished software developer.

                                Join me on this exciting journey as I strive to make a lasting impact in the ever-evolving world of software development. Together, let's push boundaries and create innovative solutions that shape the future.
                            </h6>

                            {/* <h6 className='aboutMeItem'>
                                Hi there! I'm thrilled to share a summary about my journey of obtaining a Bachelor's degree in Computer Science from Southern New Hampshire University.
                                My name is Dennis Andrew Enwiya, and I embarked on this educational path with a passion for technology and a desire to explore the ever-evolving world of computer science. Throughout my time at Southern New Hampshire University, I delved deep into the realms of programming, algorithms, software development, and computer systems. With a strong foundation in computer science theory and practical skills, I honed my abilities in multiple programming languages, such as Python, Java, and C++. I thrived in challenging coursework that involved problem-solving and critical thinking, developing creative solutions to complex technical challenges. During my studies, I actively engaged in hands-on projects and collaborated with fellow students to build innovative software applications. These experiences allowed me to enhance my teamwork and communication skills, fostering an environment of collaboration and learning.
                            </h6><h6 className='aboutMeItem'>
                                I also took advantage of the resources and opportunities provided by Southern New Hampshire University's Computer Science Department. Whether it was attending industry workshops, participating in coding competitions, or joining tech-related clubs, I constantly sought to expand my knowledge and stay up-to-date with the latest industry trends.
                                Throughout my academic journey, I developed a deep appreciation for the transformative power of technology and its ability to impact various fields. I am particularly interested in exploring areas like artificial intelligence, machine learning, and cybersecurity, as I believe they hold immense potential to shape the future.
                                Now armed with my Bachelor's degree in Computer Science, I am eager to embark on a career where I can apply my knowledge and skills to tackle real-world challenges. I am ready to contribute to a dynamic and innovative team, working towards creating cutting-edge solutions that positively impact society.

                                In summary, my time at Southern New Hampshire University has been a transformative experience, equipping me with the necessary tools and expertise to thrive in the exciting and ever-changing field of computer science. I am excited to embark on the next chapter of my journey and make a meaningful contribution to the world of technology.  </h6> */}





                        </div>
                        <div className="contactMainWrapper">
                            <div className='contactInfo'>
                                <div className="phoneAndEmail">
                                    Contact me Below.

                                </div>
                                <div>
<a href="https://github.com/DMenace92"> 
                                    <img className="profileImageIcon" src={github}></img>
                                    </a>
                                </div>
                                <div className="socialMediaLinks">
                                </div>
                            </div>
                            <div className="downloadWrapper">
                                {/* <h5>download my resume right here</h5> */}
                                <a href={FileDownload} download="Dennis Andrew Enwiya Resume">
                                   
                                    <img className="DownloadableContent" src={DownloadImage} alt="this is a download"></img>
                                    
                                </a>
                                <p className="downloadDiscription">My Resume</p>
                            </div>
                        </div>

                    </Paper>
                </div>
            </Grid >
        </div >
    )
}
export default ProfileComponent;