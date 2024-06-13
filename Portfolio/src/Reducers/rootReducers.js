import { combineReducers } from "redux";
import EmailReducers from "./EmailReducers";
const rootReducers = combineReducers({
    email: EmailReducers

})

export default rootReducers;