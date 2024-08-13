import api_connect from '../utils'

export const CREATE_EMAIL_SUCCESS = 'CREATE_EMAIL_SUCCESS'
const createEmailSuccess = (mail) => ({
  type: CREATE_EMAIL_SUCCESS,
  payload: mail,
})

export const CREATE_EMAIL_LOADING = 'CREATE_EMAIL_LOADING'
const createEmailLoading = () => ({ type: CREATE_EMAIL_LOADING })

export const CREATE_EMAIL_ERROR = 'CREATE_EMAIL_ERROR'
const createEmailError = () => ({ type: CREATE_EMAIL_ERROR })

//email Thunk

export const emailer = (mail) => (dispatch) => {
  // console.log(`${api_connect}send-email`)
  dispatch(createEmailLoading())
  // fetch(`http://localhost:9000/send-email`, {
  fetch(`https://portfolio-api1-8287cc1ebf3b.herokuapp.com/send-email`, {
    method: 'POST',
    body: JSON.stringify(mail),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((mail) => {
      dispatch(createEmailSuccess(mail))
    })
    .catch((err) => {
      dispatch(createEmailError())
    })
}
