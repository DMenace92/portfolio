import React from 'react'
// import { Grid, Paper } from '@material-ui/core'
import { Grid, Paper } from '@mui/material'
import image1 from '../../../Images/javascript.png'
import image2 from '../../../Images/java-script.png'
import image3 from '../../../Images/mongodb.png'
import image4 from '../../../Images/npm.png'
import image5 from '../../../Images/angular.png'
import image6 from '../../../Images/c.png'
import image7 from '../../../Images/python.png'
import image8 from '../../../Images/java.png'
import './SkillInfo.css'

//icons for skills https://iconscout.com/icons/javascript

const SkillInfo = () => {
    return (
        <div>
            <Grid>
                <div className="skillInfoHolder" >
                    <Paper className="skillWrapper" elevation="12">
                        <h1>
                            this is the skill test
                        </h1>
                        <div className="skillIcon">
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image1} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image2} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image3} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image4} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image5} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image6} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image7} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image8} alt="javascript"></img>
                            </div>

                        </div>

                    </Paper>
                </div>
            </Grid >
        </div>
    )
}
export default SkillInfo;