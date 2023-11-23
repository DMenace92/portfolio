import { React } from 'react';
import NavBar from '../NavBar/NavBarComponent'
import commingSoon from '../../Images/commingsoon/25516.jpg';
import { Grid, Paper } from '@mui/material'
import med_lib_vid from '../../Images/Videos/C_Med_Lib_Project.mp4'
import CollapsibleComponent from '../PersonalInfoContainer/About/SchoolDetail/CollapsibleComponent';


import './projectsComponent.css'

const ProjectComponent = () => {
    return (
        <div>
            <NavBar />
            {/* <div className="projectsContainer">
                <img className="projectCommingSoon" src={commingSoon} ></img>
            </div> */}
            <Grid>
                <div className="projectContainer">
                    <Paper className="projectWrapper" elevation="24">

                        <div>
                            {/* <img className="projectCommingSoon" src={commingSoon} ></img> */}
                            {/* <video src={med_lib_vid} autoplay="true" loop="true"></video> */}
                            <video className='VideoTag' autoPlay loop muted>
                                <source src={med_lib_vid} type='video/mp4'/>
                            </video>



                        </div>
                        <CollapsibleComponent className="PCStylesMain" label="Project Info">
                        <div className="PCStyles">
                            
                        <h1>Project Summary: Medication Library with React.js</h1>

<h2>Overview:</h2>
<p>The Medication Library project is a comprehensive web application designed to serve as a centralized hub for information related to medications. Leveraging React.js, JavaScript, React Hooks, React Redux, Node.js, MongoDB, Mongoose, CSS, and HTML, the project aims to provide users with a user-friendly interface to access crucial drug-related data.</p>

<h2>Key Features:</h2>
<ul>
    <li><strong>Drug Information:</strong> The library includes a vast database of drugs, each with detailed information such as composition, chemical structure, and classification.</li>
    <li><strong>Manufacture Details:</strong> The application provides insights into drug manufacturers, ensuring users have access to trustworthy sources of medication.</li>
    <li><strong>Indications:</strong> Detailed information about the indications of each drug is available, helping users understand the conditions for which the medication is prescribed.</li>
    <li><strong>Interactions:</strong> The project highlights potential drug interactions, ensuring users are informed about possible complications when multiple medications are used simultaneously.</li>
    <li><strong>Drug Use and Dosing:</strong> Users can find guidelines on proper drug usage and dosing, ensuring safe and effective administration.</li>
</ul>

<h2>Technologies Used:</h2>
<ul>
    <li><strong>React.js:</strong> The project's front-end is built using React.js, offering a dynamic and responsive user interface.</li>
    <li><strong>JavaScript:</strong> JavaScript is employed for client-side scripting, enhancing the interactivity and user experience of the application.</li>
    <li><strong>React Hooks:</strong> This project marks the implementation of React Hooks, providing a more concise and efficient way to handle state and lifecycle events.</li>
    <li><strong>React Redux:</strong> State management is facilitated through React Redux, ensuring a centralized and predictable state container.</li>
    <li><strong>Node.js:</strong> The server-side is powered by Node.js, offering a scalable and non-blocking environment for handling server requests.</li>
    <li><strong>MongoDB and Mongoose:</strong> MongoDB serves as the database for storing drug-related information, and Mongoose is used for simplified interaction with the database through an object data modeling (ODM) approach.</li>
    <li><strong>CSS and HTML:</strong> The project's styling and structure are crafted using CSS and HTML, ensuring a visually appealing and accessible user interface.</li>
</ul>

<h2>Learning Milestone:</h2>
<p>This project represents a significant milestone as it is the first implementation of React Hooks, showcasing the team's commitment to staying current with the latest advancements in React.js development.</p>

<h2>Future Enhancements:</h2>
<p>The Medication Library is envisioned to evolve with additional features such as user authentication, personalized drug interaction alerts, and a more extensive drug database.</p>

<p>In conclusion, the Medication Library project stands as a testament to the team's proficiency in utilizing cutting-edge technologies to create a robust and user-friendly solution for accessing critical medication information.</p>
                        </div>
                        
                        </CollapsibleComponent>
                    </Paper>
                </div>
            </Grid >

        </div >
    )
}
export default ProjectComponent