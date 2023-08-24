import { React } from 'react';
import NavBar from '../NavBar/NavBarComponent'
import commingSoon from '../../Images/commingsoon/25516.jpg';
import { Grid, Paper } from '@mui/material'
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
                            <img className="projectCommingSoon" src={commingSoon} ></img>


                        </div>
                    </Paper>
                </div>
            </Grid >

        </div >
    )
}
export default ProjectComponent