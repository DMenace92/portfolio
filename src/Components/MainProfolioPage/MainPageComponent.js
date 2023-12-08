import React from 'react'
import NavBarComponent from '../NavBar/NavBarComponent'
import Profile from '../Profile/ProfileComponent'
import AboutInfo from '../PersonalInfoContainer/About/AboutInfo'
import SkillInfo from '../PersonalInfoContainer/Skills/SkillsInfo'
// import EmailForm from '../EmailForm/EmailForm'
import EmailForm from '../../Containers/EmailContainer'
import FooterComponent from '../Footer/FooterComponent'
import './MainPageComponent.css'
//import { Grid, Paper } from '@material_ui/core'

function MainPageComponent() {
    return (
        <div>
            {/* <NavBarComponent /> */}
            <div className="MainPageWrapper">
                <Profile />
                {/* <AboutInfo />
                <SkillInfo />
                <EmailForm /> */}
                {/* <FooterComponent /> */}
            </div>
        </div>
    )
}
export default MainPageComponent