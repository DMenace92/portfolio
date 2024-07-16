import React, { useState, useEffect } from 'react'
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
// import { isMobile } from 'react-device-detect'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav'
import AdminLogin from './Containers/LoginContainer'
import PMP from './Components/Admin/ProjectPage/ProjectMainPage'
// import EditProject from './Components/Admin/ProjectUtils/EditProject'
import EditProject from './Containers/updateProjectContainer'
// import ProtectedRoute from './Components/Admin/ProtectedRoute'

// import MobileNavFooter from './Content/NavBar/MobileNavFooter'
// import ContactModal from './Content/ContactModal'
// import styles from './App.css'
import WebFont from 'webfontloader'
import { EmailModalProvider } from './providers/emailModalProvider'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [windowSize, setWindowSize] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true) // Function to set isAuthenticated state to true
  }

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
  console.log(isAuthenticated)

  return (
    <div className="App">
      {/* <div className={window.innerWidth <= 1024 || windowSize <= 1024 ? "WindowTesterOn" : "WindowTesterOff"}> */}
      <EmailModalProvider>
        <ActivePageProvider>
          {renderContent()}

          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route
              path="/myAdminPage"
              element={
                <AdminLogin
                  isAuthenticated={isAuthenticated}
                  handleLogin={handleLogin}
                />
              }
            />
            {/* <ProtectedRoute
              path="/pmp"
              element={<PMP />}
              isAuthenticated={isAuthenticated} // Pass isAuthenticated prop
            /> */}
            <Route path="/pmp" element={<PMP />} />
            <Route path={'/pmp/edit/:proID'} element={<EditProject />} />
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
