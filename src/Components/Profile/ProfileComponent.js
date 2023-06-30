import React from 'react';
//import { Grid, Paper } from '@material-ui/core';
import { Grid, Paper } from '@mui/material'
import profilePic from '../../Images/profilePic.jpg'
import DownloadImage from '../../Images/download-file.png'
import FileDownload from '../../Images/Dennis_Andrew_Enwiya_Resume.pdf'
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
                            <h6 className="aboutMeItem">I obtained a Bachelor's degree in Computer Science from Southern New Hampshire University, where I developed a strong foundation in programming, algorithms, software development, and computer systems. Through challenging coursework and hands-on projects, I honed my problem-solving and critical thinking skills, finding creative solutions to complex technical challenges. I actively engaged with fellow students, enhancing my teamwork and communication abilities. I made the most of resources provided by the Computer Science Department, attending workshops, participating in coding competitions, and joining tech-related clubs to stay updated with industry trends.

                                During my academic journey, I gained a deep appreciation for the transformative power of technology, particularly in areas like artificial intelligence, machine learning, and cybersecurity. With my Bachelor's degree in hand, I'm eager to apply my knowledge and skills to real-world challenges. I am ready to contribute to a dynamic team, creating cutting-edge solutions that have a positive impact on society.

                                My time at Southern New Hampshire University has equipped me with the necessary expertise and tools to thrive in the ever-changing field of computer science. I look forward to the next chapter of my journey, where I can make a meaningful contribution to the world of technology.</h6>

                            <h6 className="aboutMeItem">
                                Attending the Galvanize 6-month immersive boot camp in 2018-2019 was an incredibly enriching experience that propelled my skills in JavaScript,Node.js, SQL, React.js, and self-taught technology like MongoDB to new heights. From the moment I stepped into the program, I knew I was embarking on a transformative journey.

                                Throughout the boot camp, I immersed myself in an intensive curriculum that covered the fundamentals and advanced concepts of JavaScript, SQL, and React.js. The instructors were knowledgeable and passionate, going above and beyond to ensure we grasped the intricacies of these technologies. Their guidance and support were instrumental in my growth as a developer.

                                One of the highlights of the program was the opportunity to explore self-taught technology like MongoDB, which I later utilized in my capstone project. This hands-on experience allowed me to deepen my understanding of databases and gain practical skills that have proven invaluable in my career.

                                The collaborative nature of the boot camp fostered an environment where I could learn from and with my peers. Working on group projects not only enhanced my technical abilities but also taught me the importance of teamwork and effective communication in a professional setting.

                                As the program neared its end, I felt a profound sense of accomplishment. The career support provided by Galvanize was exceptional, equipping me with the tools and knowledge needed to navigate the job market successfully. I left the boot camp with newfound confidence and secured a position in the tech industry soon after.

                                Attending the Galvanize boot camp was a transformative experience that elevated my skills in JavaScript, SQL, React.js, and self-taught technology like MongoDB. The knowledge, connections, and personal growth I gained during those six months continue to shape my career in profound ways.</h6>

                            {/* <h6 className='aboutMeItem'>
                                Hi there! I'm thrilled to share a summary about my journey of obtaining a Bachelor's degree in Computer Science from Southern New Hampshire University.
                                My name is Dennis Andrew Enwiya, and I embarked on this educational path with a passion for technology and a desire to explore the ever-evolving world of computer science. Throughout my time at Southern New Hampshire University, I delved deep into the realms of programming, algorithms, software development, and computer systems. With a strong foundation in computer science theory and practical skills, I honed my abilities in multiple programming languages, such as Python, Java, and C++. I thrived in challenging coursework that involved problem-solving and critical thinking, developing creative solutions to complex technical challenges. During my studies, I actively engaged in hands-on projects and collaborated with fellow students to build innovative software applications. These experiences allowed me to enhance my teamwork and communication skills, fostering an environment of collaboration and learning.
                            </h6><h6 className='aboutMeItem'>
                                I also took advantage of the resources and opportunities provided by Southern New Hampshire University's Computer Science Department. Whether it was attending industry workshops, participating in coding competitions, or joining tech-related clubs, I constantly sought to expand my knowledge and stay up-to-date with the latest industry trends.
                                Throughout my academic journey, I developed a deep appreciation for the transformative power of technology and its ability to impact various fields. I am particularly interested in exploring areas like artificial intelligence, machine learning, and cybersecurity, as I believe they hold immense potential to shape the future.
                                Now armed with my Bachelor's degree in Computer Science, I am eager to embark on a career where I can apply my knowledge and skills to tackle real-world challenges. I am ready to contribute to a dynamic and innovative team, working towards creating cutting-edge solutions that positively impact society.

                                In summary, my time at Southern New Hampshire University has been a transformative experience, equipping me with the necessary tools and expertise to thrive in the exciting and ever-changing field of computer science. I am excited to embark on the next chapter of my journey and make a meaningful contribution to the world of technology.  </h6> */}





                        </div>
                        <h5>download my resume right here</h5>
                        <a href={FileDownload} download="FileDownload">
                            <img className="DownloadableContent" src={DownloadImage} alt="this is a download"></img>
                        </a>


                    </Paper>
                </div>
            </Grid >
        </div >
    )
}
export default ProfileComponent;