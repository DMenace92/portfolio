import React, { useState, useEffect } from 'react'
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
import { isMobile } from 'react-device-detect'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav'
import MobileNavFooter from './Content/NavBar/MobileNavFooter'
// import styles from './App.css'
import WebFont from 'webfontloader'
import { EmailModalProvider } from './providers/emailModalProvider'

function App(props) {
  console.log(props)
  const [windowSize, setWindowSize] = useState()

  const renderContent = () => {
    if (windowSize > 1024 || window.innerWidth > 1024) {
      return <MailNav />
    } else if (windowSize <= 1024 || window.innerWidth <= 1024) {
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

          <MainPageComponent />
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
