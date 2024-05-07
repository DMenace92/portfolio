import React, { useState } from 'react'
import styles from './AdminSignin.module.css'
import { useNavigate } from 'react-router-dom'

const AdminSignin = (props) => {
  // const history = useHistory() // Use useHistory hook instead of withRouter
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [authenticated, setAuthenticated] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const userData = { username, password }
    console.log(userData)
    const loginResults = await props.login(userData)
    if (loginResults && loginResults.user) return navigate('/pmp')
    //   setLoginError(false)
    // } catch (error) {
    //   setLoginError(true)
    //   console.error('Login error:', error)
    //   // Handle login error if needed
    // } finally {
    // }
  }

  const onChange = (e) => {
    const { name, value } = e.target
    if (name === 'username') setUsername(value)
    else if (name === 'password') setPassword(value)
  }

  console.log(props.log.log)

  return (
    <div className={styles.mainSignonContainer}>
      <div className={styles.loginComponentForm}>
        <form onSubmit={onSubmit}>
          <div className={styles.loginForm}>
            <h1 className={styles.LoginTitle}>Login</h1>
            <input
              onChange={onChange}
              value={username}
              type="text"
              name="username"
              placeholder="username"
            />

            <input
              onChange={onChange}
              value={password}
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

// import React, { useState } from 'react'
// import styles from './AdminSignin.module.css'
// import { Link, withRouter } from 'react-router-dom'

// const AdminSignin = ({ login, history }) => {
//   //   const history = useHistory()
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   })

//   const onSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData, 'form data')
//     login(formData)
//     // history.push('/pmp')
//     setFormData({ email: '', password: '' })
//   }

//   const onChange = ({ target }) => {
//     setFormData({ ...formData, [target.name]: target.value })
//   }
//   return (
//     <div className={styles.mainSignonContainer}>
//       <div className={styles.loginComponentForm}>
//         <form onSubmit={onSubmit}>
//           <div className={styles.loginForm}>
//             <h1 className={styles.LoginTitle}>Login</h1>

//             <input
//               onChange={onChange}
//               value={formData.username}
//               type="text"
//               name="username"
//               placeholder="Username"
//             ></input>
//             <input
//               onChange={onChange}
//               value={formData.password}
//               type="password"
//               name="password"
//               placeholder="Password"
//             ></input>
//             <button>submit</button>
//             <button>cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AdminSignin
