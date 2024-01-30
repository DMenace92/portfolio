import { combineReducers } from "redux";
import EmailReducers from "./EmailReducers";
import PageCountReducers from "./PageCountReducers";
const rootReducers = combineReducers({
    email: EmailReducers,
    currentPage: PageCountReducers

})

export default rootReducers;