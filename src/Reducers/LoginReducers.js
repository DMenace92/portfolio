import { L_S, L_L, L_E } from '../Actions/LoginAction'

const initState = {
  log: [],
  logLoading: false,
  logError: false,
}
const LoginReducers = (state = initState, action) => {
  switch (action.type) {
    case L_L:
      return {
        ...state,
        logLoading: true,
      }
    case L_S:
      localStorage.setItem('token', action.payload.token)

      return {
        ...state,
        log: [...state.log, action.payload],

        // id: action.payload.user.id,
        // username: action.payload.user.username,
        // token: action.payload.token,
      }
    case L_E:
      // window.location.href = '/myAdminPage'
      return {
        ...state,
        logError: true,
      }
    default:
      return state
  }
}

export default LoginReducers
