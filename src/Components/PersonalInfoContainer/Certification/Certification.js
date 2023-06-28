import React from 'react';
import NavBar from '../../NavBar/NavBarComponent'
import { Grid, Paper } from '@mui/material'

// import commingSoon from '../../../Images/commingsoon/25516.jpg'
import pListCert1 from '../../../Images/PresListS2022.PNG'
import pListCert2 from '../../../Images/PresListW2023.PNG'
import './Certification.css'

const Certification = () => {
    return (
        <div>
            <NavBar />
            {/* <img className="imageCommingSoon" src={commingSoon}></img>
             */}
            <Grid>
                <div className="certificationContainer">
                    <Paper className="certificationWrapper" eleveation="12">
                        <h1>My Certictes</h1>
                        <h3>Education</h3>
                        <div>
                            <img className="certificationImages" src={pListCert2} alt='a certificate'></img>
                            <img className="certificationImages" src={pListCert1} alt='a certificate'></img>
                        </div>
                    </Paper>
                </div>
            </Grid>


        </div >
    )
}
export default Certification