import Admin from '../Components/Admin/AdminSignin'
import { login } from '../Actions/LoginAction'
import { connect } from 'react-redux'

const mapStateToProps = (log) => {
  return {
    log: log.log,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (log) => {
      dispatch(login(log))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
