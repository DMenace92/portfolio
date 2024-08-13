export const L_S = 'L_S'
const loginSuccess = (log) => ({ type: L_S, payload: log })

export const L_L = 'L_L'
const loginLoading = () => ({ type: L_L })

export const L_E = 'L_E'
const loginError = (err) => ({ type: L_E, payload: err })

export const L_O = 'L_O'

export const login = (log) => (dispatch) => {
  dispatch(loginLoading())
  fetch(`https://portfolio-api1-8287cc1ebf3b.herokuapp.com/admin/login`, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((log) => {
      dispatch(loginSuccess(log))
    })
    .catch((err) => {
      dispatch(loginError())
    })
}

// export const login = (log) => {
//   return async (dispatch) => {
//     dispatch(loginLoading())
//     try {
//       const res = await fetch(`http://localhost:9000/admin/login`, {
//         method: 'POST',
//         body: JSON.stringify(log),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       if (!res.ok) {
//         throw new Error('Failed to login')
//       }
//       const data = await res.json()
//       dispatch(loginSuccess(data))
//     } catch (err) {
//       dispatch(loginError(err))
//     }
//   }
// }

// export const login = (log) => (dispatch) => {
//   dispatch(loginLoading()) // Dispatch loading action

//   fetch('http://localhost:9000/admin/login', {
//     method: 'POST',
//     body: JSON.stringify(log),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to authenticate')
//       }
//       return res.json()
//     })
//     .then((log) => {
//       dispatch(loginSuccess(log)) // Dispatch success action with received data
//     })
//     .catch((err) => {
//       console.error('Login error:', err)
//       dispatch(loginError(err)) // Dispatch error action
//     })
// }
