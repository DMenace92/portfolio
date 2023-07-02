import React from 'react';
// import React, { useState } from 'react';
import Collapsediv from './SchoolDetail/CollapsibleComponent';


import { Grid, Paper } from '@mui/material'
import greenway from '../../../Images/GreenWayLogo.png'
import './AboutInfo.css'
import CollapsibleComponent from './SchoolDetail/CollapsibleComponent';

const AboutInfo = () => {
    // ref https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/




    return (
        <div className="mainAboutContainer">
            {/* <NavBar /> */}
            <Grid>

                <div className="AboutInfoHolder" >
                    <Paper className="AboutWrapper" elevation="12">

                        <ul>Education
                            <hr ></hr>

                            <li>Greenway High School</li>
                            {/* <img className="schoolLogo" src={greenway}></img> */}

                            <CollapsibleComponent className="moreInfoButton" label="GreenWay">
                                <p className="textExample">
                                    During my time at Greenway High School from 2007 to 2010, I had an enriching and memorable experience. Greenway High School provided a supportive and nurturing environment where I had the opportunity to grow academically, socially, and personally.

                                    Academically, Greenway High School offered a wide range of courses that allowed me to explore my interests and broaden my knowledge. The dedicated and passionate teachers were always ready to guide and challenge me, fostering a love for learning. Whether it was in the humanities, sciences, or arts, I felt encouraged to excel and push myself to reach my full potential.

                                    Beyond the classroom, Greenway High School offered a vibrant and diverse community that made my high school years truly enjoyable. I had the chance to meet students from various backgrounds and forge lifelong friendships. The school organized numerous extracurricular activities, clubs, and sports teams that allowed me to pursue my passions, develop new skills, and foster teamwork.

                                    The school's commitment to community engagement was evident through its involvement in various service projects and volunteer opportunities. I actively participated in community initiatives, which not only made a positive impact but also instilled in me a sense of responsibility and empathy towards others.

                                    Furthermore, Greenway High School encouraged personal growth and self-discovery. The supportive counseling services and mentorship programs provided guidance as I navigated the challenges of adolescence and prepared for my future. The school emphasized the importance of character development and encouraged ethical behavior and integrity.

                                    Overall, my experience at Greenway High School from 2007 to 2010 was transformative. It not only equipped me with a solid academic foundation but also helped shape my values and prepared me for the next chapter of my life. I am grateful for the lasting memories, friendships, and lessons learned during my time at Greenway High School.
                                </p>
                            </CollapsibleComponent>


                            <li>Galvanize</li>
                            <CollapsibleComponent className="moreInfoButton" label="Galvanize">
                                <p className="textExample">     Attending the Galvanize 6-month immersive boot camp in 2018-2019 was an incredibly enriching experience that propelled my skills in JavaScript,Node.js, SQL, React.js, and self-taught technology like MongoDB to new heights. From the moment I stepped into the program, I knew I was embarking on a transformative journey.

                                    Throughout the boot camp, I immersed myself in an intensive curriculum that covered the fundamentals and advanced concepts of JavaScript, SQL, and React.js. The instructors were knowledgeable and passionate, going above and beyond to ensure we grasped the intricacies of these technologies. Their guidance and support were instrumental in my growth as a developer.

                                    One of the highlights of the program was the opportunity to explore self-taught technology like MongoDB, which I later utilized in my capstone project. This hands-on experience allowed me to deepen my understanding of databases and gain practical skills that have proven invaluable in my career.

                                    The collaborative nature of the boot camp fostered an environment where I could learn from and with my peers. Working on group projects not only enhanced my technical abilities but also taught me the importance of teamwork and effective communication in a professional setting.

                                    As the program neared its end, I felt a profound sense of accomplishment. The career support provided by Galvanize was exceptional, equipping me with the tools and knowledge needed to navigate the job market successfully. I left the boot camp with newfound confidence and secured a position in the tech industry soon after.

                                    Attending the Galvanize boot camp was a transformative experience that elevated my skills in JavaScript, SQL, React.js, and self-taught technology like MongoDB. The knowledge, connections, and personal growth I gained during those six months continue to shape my career in profound
                                </p>

                            </CollapsibleComponent>
                            {/* <button className="moreInfoButton">More Info</button> */}

                            <li>Southern New Hampshire</li>
                            <CollapsibleComponent className="moreInfoButton" label="SNHU">
                                <p className="textExample">
                                    I obtained a Bachelor's degree in Computer Science from Southern New Hampshire University, where I developed a strong foundation in programming, algorithms, software development, and computer systems. Through challenging coursework and hands-on projects, I honed my problem-solving and critical thinking skills, finding creative solutions to complex technical challenges. I actively engaged with fellow students, enhancing my teamwork and communication abilities. I made the most of resources provided by the Computer Science Department, attending workshops, participating in coding competitions, and joining tech-related clubs to stay updated with industry trends.

                                    During my academic journey, I gained a deep appreciation for the transformative power of technology, particularly in areas like artificial intelligence, machine learning, and cybersecurity. With my Bachelor's degree in hand, I'm eager to apply my knowledge and skills to real-world challenges. I am ready to contribute to a dynamic team, creating cutting-edge solutions that have a positive impact on society.

                                    My time at Southern New Hampshire University has equipped me with the necessary expertise and tools to thrive in the ever-changing field of computer science. I look forward to the next chapter of my journey, where I can make a meaningful contribution to the world of technology.


                                </p>
                            </CollapsibleComponent>
                        </ul>
                        <ul> Experience and Employment
                            <hr></hr>
                            <p>Walmart (April 2012 - Present)</p>
                            <h5>Certified Pharmacy Technician</h5>
                            <h5>Accepted and inputted prescription information and filled prescriptions for approval by on-duty pharmacists. Responsible
                                for restocking pharmacy materials and ordering drugs. Answered phone calls and aided with patient concerns.</h5>
                            <p>Banner Health (September 2016 - October 2017)</p>
                            <h5>In-Patient Certified Pharmacy Technician</h5>
                            <h5>Provided and supplied the entire hospital with patient-specific medications from the onsite pharmacy under the
                                supervision of the pharmacist. Assisted in preparing compounded and intravenous medications and chemotherapeutic
                                agents.</h5>
                            <p>IeLinks,inc (April 2019 - September2019)</p>
                            <h5>Full-Stack Web Developer</h5>
                            <h5>Recruited by company to create and maintain content within web applications by providing front and back end web
                                development services. Created educational courses for logistical companies to provide work/trade training, and to
                                provide education for Commercial Drivers Licensing. Worked on multiple company-wide projects simultaneously and
                                provided assistance with development planning on each major project.</h5>
                        </ul>

                    </Paper>
                </div>
            </Grid >

        </div>
    )
}
export default AboutInfo;