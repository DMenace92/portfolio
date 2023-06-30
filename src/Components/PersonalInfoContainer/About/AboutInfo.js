import React from 'react';
// import { Grid, Paper } from '@material-ui/core'
import NavBar from '../../NavBar/NavBarComponent'
import { Grid, Paper } from '@mui/material'
import './AboutInfo.css'

const AboutInfo = () => {
    return (
        <div className="mainAboutContainer">
            {/* <NavBar /> */}
            <Grid>
                <div className="AboutInfoHolder" >
                    <Paper className="AboutWrapper" elevation="12">
                        <ul>Education
                            <hr ></hr>
                            <li>Greenway High School</li>
                            <li>Galvanize</li>
                            <li>Southern New Hampshire</li>
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