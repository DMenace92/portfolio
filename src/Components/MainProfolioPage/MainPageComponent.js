import React from 'react'
import SideBar from '../Profile/SideBar'
import AboutInfo from '../PersonalInfoContainer/About/AboutInfo'
import SkillInfo from '../PersonalInfoContainer/Skills/SkillsInfo'
// import EmailForm from '../EmailForm/EmailForm'
import EmailForm from '../../Containers/EmailContainer'
import ScrollItems from '../Profile/ScrollItems'
import './MainPageComponent.css'
//import { Grid, Paper } from '@material_ui/core'

function MainPageComponent() {
  return (
    <div className="MainPageWrapper">
       
        <div className="sideBarPositionWrapper">
            <SideBar/>
        </div>
       
             <ScrollItems/>
       

      {/** TODO: Create your <Sidebar /> component here and pull
       * <
       * side bar items into the new component from Profile */}
      {/**
       * TODO: Create <MainContent /> and pull everything from <Profile /> that isn't in the left side
       * of the screen and bring it into this component delete Profile
       */}
    </div>
  )
}
export default MainPageComponent
