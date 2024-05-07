import React, { useState, useEffect } from 'react'
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
import { isMobile } from 'react-device-detect'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav'
import AdminLogin from './Containers/LoginContainer'
import PMP from './Components/Admin/ProjectPage/ProjectMainPage'
import MobileNavFooter from './Content/NavBar/MobileNavFooter'
import ContactModal from './Content/ContactModal'
// import styles from './App.css'
import WebFont from 'webfontloader'
import { EmailModalProvider } from './providers/emailModalProvider'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [windowSize, setWindowSize] = useState()

  const renderContent = () => {
    if (windowSize > 768 || window.innerWidth > 768) {
      return <MailNav />
    } else if (windowSize <= 768 || window.innerWidth <= 768) {
      return <NavBar />
    } else {
      return null
    }
  }

  useEffect(() => {
    const setWindowRes = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', setWindowRes)
  }, [])

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Fira Sans:100,200,300,400,500,600',
          'Rajdhani:300,400,500,600',
        ],
      },
    })
  }, [])

  // const footerContent =()=>{
  //   if(window.innerWidth <= 1024){
  //      return <MobileNavFooter/>
  //   }else{
  //     return null

  //   }
  // }

  return (
    <div className="App">
      {/* <div className={window.innerWidth <= 1024 || windowSize <= 1024 ? "WindowTesterOn" : "WindowTesterOff"}> */}
      <EmailModalProvider>
        <ActivePageProvider>
          {renderContent()}

          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route path="/myAdminPage" element={<AdminLogin />} />
            <Route path="/pmp" element={<PMP />} />
          </Routes>
          {/* <div
          className={
            window.innerWidth <= 1024 || windowSize <= 1024
              ? 'WindowTesterOn'
              : 'WindowTesterOff'
          }
        >
          <MobileNavFooter />
        </div> */}
          {/* {footerContent()} */}
        </ActivePageProvider>
      </EmailModalProvider>
    </div>
  )
}

export default App
