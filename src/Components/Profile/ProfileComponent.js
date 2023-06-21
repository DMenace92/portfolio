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
                        <div> <h6>
                            My name is Dennis Enwiya I am a graduate from Southern New Hamsphear University, I have obtained a Degree In Computer science
                        </h6></div>
                        <h5>download my resume right here</h5>
                        <a href={FileDownload} download="FileDownload">
                            <img className="DownloadableContent" src={DownloadImage} alt="this is a download"></img>
                        </a>


                    </Paper>
                </div>
            </Grid>
        </div>
    )
}
export default ProfileComponent;