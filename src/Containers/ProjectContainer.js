import { connect } from 'react-redux'
import {
  createProject,
  updateProject,
  deleteProject,
} from '../Actions/PageAction'

const mapStateToProps = (pro) => {
  return {
    pro: pro,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (pro) => {
      dispatch(createProject(pro))
    },
    updateProject: (pro) => {
      dispatch(updateProject(pro))
    },
    deleteProject: (pro) => {
      dispatch(deleteProject(pro))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
