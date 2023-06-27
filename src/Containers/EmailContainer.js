import { connect } from "react-redux";
import Emailer from "../Components/EmailForm/EmailForm"
import { emailer } from "../Actions/EmailerAction";


const mapDispatchToProps = dispatch => {
    return {
        emailer: (email) => {
            dispatch(emailer(email));
        }
    }
}
export default connect(null, mapDispatchToProps)(Emailer)