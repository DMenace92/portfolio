import React from 'react';
// import { Grid, Paper } from '@material-ui/core';
import { Grid, Paper } from '@mui/material'
import profilePic from '../../Images/profilePic.jpg'
// import DownloadImage from '../../Images/download-file.png'
// import FileDownload from '../../Images/Dennis_Andrew_Enwiya_Resume.pdf'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import linkedin from '../../Images/linkedin.png'
import github from '../../Images/github.png'
// import github from '../../Images/github.png'
import './ProfileComponent.css';
import ScrollItems from './ScrollItems';

const ProfileComponent = () => {
    return (
        // <div>
        <Grid>
            <Paper style={{backgroundColor:"rgba(240, 248, 255, 0)"}} className="portfolioHolder" elevation={24}>
                {/* <div className="ProfileImageHolder"> */}
                    <img  className="ProfileImageHolder" src={profilePic}></img>
                    <div>
                        <h1 className="nameTextStyle" >Dennis A, Enwiya</h1>
                        <ul className="navigationSelection">
                            <li className="selectionItem">About</li>
                            <li className="selectionItem">experience</li>
                            <li className="selectionItem">Project</li>
                            <li className="selectionItem">Contact Me</li>
                        </ul>
                    </div>
                    <div className="footer__social-media">
                    {/* Add your social media icons or links here */}
                    <a href="https://www.facebook.com/dennis.enwiya/">
                        <i className="fab fa-facebook"></i>
                        <img className="footerIcons" src={facebook}></img>
                    </a>
                    <a href="https://twitter.com/DEnwiya">
                        <i className="fab fa-twitter"></i>
                        <img className="footerIcons" src={twitter}></img>
                    </a>
                    <a href="https://www.instagram.com/theonlymenace/">
                        <i className="fab fa-instagram"></i>
                        <img className="footerIcons" src={instagram}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/dennisenwiya">
                        <i className="fab fa-instagram"></i>
                        <img className="footerIcons" src={linkedin}></img>
                    </a>
                    <a href="https://github.com/DMenace92">
                        <i className="fab fa-twitter"></i>
                        <img className="footerIcons" src={github}></img>
                    </a>
                </div>

                {/* </div> */}
            </Paper>
            <div className="ScrollItemsContainer">
                
                <ScrollItems/>
            </div>
            </Grid>
      
    )
}
export default ProfileComponent;










      {/* <Grid>
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
                                <a href={FileDownload} download="Dennis Andrew Enwiya Resume">
                                   
                                    <img className="DownloadableContent" src={DownloadImage} alt="this is a download"></img>
                                    
                                </a>
                                <p className="downloadDiscription">My Resume</p>
                            </div>
                        </div>

                    </Paper>
                </div>
            </Grid > */}