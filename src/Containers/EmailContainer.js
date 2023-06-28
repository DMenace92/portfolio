import { connect } from "react-redux";
import EmailForm from "../Components/EmailForm/EmailForm"
import { emailer } from "../Actions/EmailerAction";

const mapStateToProps = (mail) => {
    return {
        mail: mail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        emailer: (mail) => {
            dispatch(emailer(mail));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailForm)