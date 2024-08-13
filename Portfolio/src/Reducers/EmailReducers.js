import {
  CREATE_EMAIL_SUCCESS,
  CREATE_EMAIL_LOADING,
  CREATE_EMAIL_ERROR,
} from '../Actions/EmailerAction'

const initState = {
  mail: [],
  emailLoading: false,
  emailError: false,
}

const EmailReducers = (state = initState, action) => {
  switch (action.type) {
    case CREATE_EMAIL_LOADING:
      return {
        ...state,
        emailLoading: true,
      }
    case CREATE_EMAIL_SUCCESS:
      return {
        mail: [...state.mail, action.payload],
      }
    case CREATE_EMAIL_ERROR:
      return {
        ...state,
        emailError: true,
      }
    default:
      return state
  }
}
export default EmailReducers
