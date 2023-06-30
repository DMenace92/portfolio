import React, { useState } from 'react'
// import { Grid, Paper } from '@material-ui/core'
import { Grid, Paper } from '@mui/material'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import image1 from '../../../Images/javascript.png'
import image2 from '../../../Images/html.png'
import image3 from '../../../Images/mongodb.png'
import image4 from '../../../Images/npm.png'
import image5 from '../../../Images/angular.png'
import image10 from '../../../Images/react.png'
import image6 from '../../../Images/c.png'
import image7 from '../../../Images/python.png'
import image8 from '../../../Images/java.png'
import image9 from '../../../Images/css3.png'
import image11 from '../../../Images/sql.png'
import image12 from '../../../Images/postgresql.png'
import image14 from '../../../Images/nodejs.png'
import image15 from '../../../Images/github.png'
import image16 from '../../../Images/heroku.png'
import image17 from '../../../Images/agile.png'
import './SkillInfo.css'

//icons for skills https://iconscout.com/icons/javascript

const SkillInfo = (props) => {

    return (
        <div>
            <Grid>
                <div className="skillInfoHolder" >
                    <Paper className="skillWrapper" elevation="12">
                        <h1 className="skillTextStyling">
                            My Tool Belt
                        </h1>
                        <div className="skillIcon">

                            <div className="imageHolder">
                                <img className="imageDetailing" src={image1} alt="javascript"></img>
                            </div>




                            <div className="imageHolder">
                                <img className="imageDetailing" src={image2} alt="HTML"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image9} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image14} alt="javascript"></img>
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
                                <img className="imageDetailing" src={image10} alt="javascript"></img>
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
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image11} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image12} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image15} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image16} alt="javascript"></img>
                            </div>
                            <div className="imageHolder">
                                <img className="imageDetailing" src={image17} alt="javascript"></img>
                            </div>

                        </div>

                    </Paper>
                </div>
            </Grid >

        </div >
    )
}
export default SkillInfo;