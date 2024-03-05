import React, {useState, useEffect} from 'react';
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
import {isMobile} from 'react-device-detect'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav';


function App() {
  const [windowSize, setWindowSize] = useState()
 const renderContent =()=>{
  if(window.innerWidth > 400){
     return <MailNav/>
  }else if(window.innerWidth > 400){
    return <NavBar/>
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
    </div>
  )
}

export default App
