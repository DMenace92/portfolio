import React, { useState, useEffect } from 'react'
import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'
import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'
import NavBar from './Content/NavBar/NavBar'
import MailNav from './Content/NavBar/MailNav'
import AdminLogin from './Containers/LoginContainer'
import PMP from './Components/Admin/ProjectPage/ProjectMainPage'
import EditProject from './Containers/updateProjectContainer'
import WebFont from 'webfontloader'
import { EmailModalProvider } from './providers/emailModalProvider'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './providers/Utils/AuthContext'
import ProtectedRoute from './providers/Utils/ProtectedRoute'
// import { storage } from './firebaseConfig'

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
          <AuthProvider>
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

              <Route
                path="/pmp"
                element={<ProtectedRoute element={<PMP />} />}
              />
              <Route path={'/pmp/edit/:proID'} element={<EditProject />} />
            </Routes>
          </AuthProvider>
        </ActivePageProvider>
      </EmailModalProvider>
    </div>
  )
}

export default App
