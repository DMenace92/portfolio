import { CREATE_EMAIL_SUCCESS, CREATE_EMAIL_LOADING, CREATE_EMAIL_ERROR } from "../Actions/EmailerAction";

const initState = {
    email: [],
    emailLoading: false,
    emailError: false
}

const EmailReducers = (state = initState, action) => {
    switch (action.type) {
        case CREATE_EMAIL_LOADING:
            return {
                ...state,
                emailLoading: true
            }
        case CREATE_EMAIL_SUCCESS:
            return {
                email: [...state.email, action.payload]
            }
        case CREATE_EMAIL_ERROR:
            return {
                ...state,
                emailError: true
            }

    }
}
export default EmailReducers;