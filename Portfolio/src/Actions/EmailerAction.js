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

<<<<<<< HEAD:Portfolio/src/Actions/EmailerAction.js


export const emailer = (mail) => dispatch => {
    // console.log(`${api_connect}send-email`)
    dispatch(
        createEmailLoading()
    )
    // fetch(`http://localhost:9000/send-email`, {
    fetch(`https://my-personal-portfolio-0-b2805eb1a130.herokuapp.com/send-email`, {

        method: "POST",
        body: JSON.stringify(mail),
        headers: {
            'Content-Type': 'application/json'
        }
=======
export const emailer = (mail) => (dispatch) => {
  // console.log(`${api_connect}send-email`)
  dispatch(createEmailLoading())
  // fetch(`http://localhost:9000/send-email`, {
  fetch(`https://myportfolio-api-44ada9ce9fb4.herokuapp.com/send-email`, {
    method: 'POST',
    body: JSON.stringify(mail),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((mail) => {
      dispatch(createEmailSuccess(mail))
>>>>>>> version_2:src/Actions/EmailerAction.js
    })
    .catch((err) => {
      dispatch(createEmailError())
    })
}
