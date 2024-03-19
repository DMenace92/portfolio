import React from 'react'
import NavBar from '../../NavBar/NavBarComponent'
import { Grid, Paper } from '@mui/material'

// import commingSoon from '../../../Images/commingsoon/25516.jpg'
import pListCert1 from '../../../Images/PresListS2022.PNG'
import pListCert2 from '../../../Images/PresListW2023.PNG'
import awards from '../../../Images/badgesAwards.PNG'
import galCert from '../../../Images/GalvanizeDeploma.png'
import HSdep from '../../../Images/HSDDeploma.png'
import UDep from '../../../Images/UniversityD.png'
import './Certification.css'

const Certification = () => {
  return (
    <div>
      <NavBar />
      {/* <img className="imageCommingSoon" src={commingSoon}></img>
       */}
      <Grid>
        <div className="certificationContainer">
          <Paper className="certificationWrapper" elevation="24">
            <div>
              <h3 className="certificationTitleStyle">
                University and High School Diplomas
              </h3>
              <img
                className="certificationImages"
                src={UDep}
                alt="a certificate"
              ></img>
              <img
                className="certificationImages"
                src={HSdep}
                alt="a certificate"
              ></img>
              {/* <img className="certificationImages" src={pListCert1} alt='a certificate'></img> */}
            </div>
          </Paper>
        </div>
      </Grid>

      <Grid>
        <div className="certificationContainerChildren">
          <Paper className="certificationWrapper" elevation="24">
            <div>
              <h3 className="certificationTitleStyle">Coding Boot Camp</h3>
              <img
                className="certificationImages"
                src={galCert}
                alt="a certificate"
              ></img>
            </div>
          </Paper>
        </div>
      </Grid>
      <Grid>
        <div className="certificationContainerChildren">
          <Paper className="certificationWrapper" elevation="24">
            <div>
              <h3 className="certificationTitleStyle">
                Technology Certifications
              </h3>
              {/* <img className="certificationImages" src={pListCert2} alt='a certificate'></img>
                            <img className="certificationImages" src={pListCert1} alt='a certificate'></img> */}
            </div>
          </Paper>
        </div>
      </Grid>
      <Grid>
        <div className="certificationContainerChildren">
          <Paper className="certificationWrapper" elevation="24">
            <div>
              <h1 className="certificationTitleStyle">Academic Achievments</h1>
              <img
                className="certificationImages"
                src={pListCert2}
                alt="a certificate"
              ></img>
              <img
                className="certificationImages"
                src={pListCert1}
                alt="a certificate"
              ></img>
              <img className="certificationImages" src={awards}></img>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  )
}
export default Certification
