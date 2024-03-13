import React, {useState, useEffect} from 'react';
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
import {isMobile} from 'react-device-detect'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav';
import MobileNavFooter from './Content/NavBar/MobileNavFooter';


function App() {
  const [windowSize, setWindowSize] = useState()
 const renderContent =()=>{
  if(window.innerWidth > 1024){
     return <MailNav/>
  }else if(window.innerWidth <= 1024){
    return <NavBar/> 
  }else{
    return null

  }
}
const footerContent =()=>{
  if(window.innerWidth <= 1024){
     return <MobileNavFooter/>
  }else{
    return null

  }
}
  return (
    <div className="App">
      {/* <NavBar/> */}
      {renderContent()}
      <ActivePageProvider>
        <MainPageComponent />
      </ActivePageProvider>
      {footerContent()}
    </div>
  )
}

export default App
