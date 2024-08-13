import React, { useState, useEffect } from 'react'
import styles from './AdminSignin.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/Utils/AuthContext'

const AdminSignin = (props) => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const [token, setToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await props.login(userData)
    } catch (err) {
      console.log(err)
    }
    login()
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  useEffect(() => {
    try {
      if (props.log.log.log.length > 0) {
        setToken(props.log.log.log[0].token)
      }
    } catch (err) {
      console.log(err)
    }
  }, [props.log])

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true)
      navigate('/pmp')
    } else if (token === undefined && !token) {
      setIsAuthenticated(false)
      window.location.reload()
    }
  }, [token, navigate])

  return (
    <div className={styles.mainSignonContainer}>
      <div className={styles.loginComponentForm}>
        <form onSubmit={onSubmit}>
          <div className={styles.loginForm}>
            <h1 className={styles.LoginTitle}>Login</h1>
            <input
              onChange={onChange}
              value={userData.username}
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              onChange={onChange}
              value={userData.password}
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminSignin

// import React, { useState, useEffect } from 'react'
// import styles from './LoginRegister.module.css'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useAuth } from '../Utils/AuthContext'

// const LoginRegister = (props) => {
//   const navigate = useNavigate()
//   const { login } = useAuth();

//   const [userData, setUserData] = useState({
//     username: '',
//     password: '',
//     isAuthenticated: Boolean,
//   })
//   const [token, setToken] = useState('')
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await props.login(userData)
//     } catch (err) {
//       console.log(err)
//     }
//     login()
//   }

//   const onChange = (e) => {
//     const { name, value } = e.target
//     setUserData({
//       ...userData,
//       [name]: value,
//     })
//   }

//   useEffect(() => {
//     try {
//       if (props.log.log.log.length > 0) {
//         setToken(props.log.log.log[0].token)
//       }
//       // else if (props.log.log.logError === true) {
//       // }
//     } catch (err) {
//       console.log(err)
//     }
//   }, [props.log])

//   useEffect(() => {
//     if (token) {
//       setIsAuthenticated(true)
//       // return (window.location.href = '/pmp')
//       navigate('/blue')
//     } else if (token === undefined && !token) {
//       setIsAuthenticated(false)
//       return window.location.reload()
//     }
//   }, [token, navigate])
//   console.log(isAuthenticated)
//   return (
//     <div className={styles.mainSignonContainer}>
//       <div className={styles.loginComponentForm}>
//         <form onSubmit={onSubmit}>
//           <div className={styles.loginForm}>
//             <h1 className={styles.LoginTitle}>Login</h1>
//             <input
//               onChange={onChange}
//               value={userData.username}
//               type="text"
//               name="username"
//               placeholder="username"
//             />

//             <input
//               onChange={onChange}
//               value={userData.password}
//               type="password"
//               name="password"
//               placeholder="Password"
//             />

//             <button type="submit">Submit</button>
//             <button type="button">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginRegister

// import React, { useState, useEffect } from 'react'
// import styles from './AdminSignin.module.css'
// import { useNavigate, useParams } from 'react-router-dom'

// const AdminSignin = (props) => {
//   const navigate = useNavigate()

//   const [userData, setUserData] = useState({
//     username: '',
//     password: '',
//     isAuthenticated: Boolean,
//   })
//   const [token, setToken] = useState('')
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await props.login(userData)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const onChange = (e) => {
//     const { name, value } = e.target
//     setUserData({
//       ...userData,
//       [name]: value,
//     })
//   }

//   useEffect(() => {
//     try {
//       if (props.log.log.log.length > 0) {
//         setToken(props.log.log.log[0].token)
//       }
//       // else if (props.log.log.logError === true) {
//       // }
//     } catch (err) {
//       console.log(err)
//     }
//   }, [props.log])

//   useEffect(() => {
//     if (token) {
//       setIsAuthenticated(true)
//       // return (window.location.href = '/pmp')
//       navigate('/pmp')
//     } else if (token === undefined && !token) {
//       setIsAuthenticated(false)
//       return window.location.reload()
//     }
//   }, [token, navigate])
//   console.log(isAuthenticated)
//   return (
//     <div className={styles.mainSignonContainer}>
//       <div className={styles.loginComponentForm}>
//         <form onSubmit={onSubmit}>
//           <div className={styles.loginForm}>
//             <h1 className={styles.LoginTitle}>Login</h1>
//             <input
//               onChange={onChange}
//               value={userData.username}
//               type="text"
//               name="username"
//               placeholder="username"
//             />

//             <input
//               onChange={onChange}
//               value={userData.password}
//               type="password"
//               name="password"
//               placeholder="Password"
//             />

//             <button type="submit">Submit</button>
//             <button type="button">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AdminSignin
