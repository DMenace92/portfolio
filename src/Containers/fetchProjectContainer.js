import { connect } from 'react-redux'
import { fetchProject } from '../Actions/ProjectAction'

const mapStatetoProps = (pro) => {
  return {
    pro: pro,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (pro) => {
      dispatch(fetchProject(pro))
    },
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)
