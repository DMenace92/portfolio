import React from 'react';
// import { Grid, Paper } from '@material-ui/core'
import NavBar from '../../NavBar/NavBarComponent'
import { Grid, Paper } from '@mui/material'

const AboutInfo = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <Grid>
                <div className="skillInfoHolder" >
                    <Paper className="skillWrapper" elevation="12">
                        <ul>Education</ul>
                        <ul> Experience and Employment
                            <hr></hr>
                            <li>Walmart (April 2012 - Present)</li>
                            <h5>Certified Pharmacy Technician</h5>
                            <h5>Accepted and inputted prescription information and filled prescriptions for approval by on-duty pharmacists. Responsible
                                for restocking pharmacy materials and ordering drugs. Answered phone calls and aided with patient concerns.</h5>
                            <li>Banner Health (September 2016 - October 2017)</li>
                            <h5>In-Patient Certified Pharmacy Technician</h5>
                            <h5>Provided and supplied the entire hospital with patient-specific medications from the onsite pharmacy under the
                                supervision of the pharmacist. Assisted in preparing compounded and intravenous medications and chemotherapeutic
                                agents.</h5>
                            <li>IeLinks,inc (April 2019 - September2019)</li>
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