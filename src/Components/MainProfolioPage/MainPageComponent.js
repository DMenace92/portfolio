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
    <div className="MainPageWrapper">
      {/** TODO: Create your <Sidebar /> component here and pull
       * side bar items into the new component from Profile */}
      {/**
       * TODO: Create <MainContent /> and pull everything from <Profile /> that isn't in the left side
       * of the screen and bring it into this component delete Profile
       */}
      <Profile />
    </div>
  )
}
export default MainPageComponent
