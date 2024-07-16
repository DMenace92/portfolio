import { connect } from 'react-redux'
import { updateProject } from '../Actions/ProjectAction'
import EditProject from '../Components/Admin/ProjectUtils/EditProject'

const mapStateToProps = ({ pro }) => {
  return {
    pro: pro.pro,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project, newProject) => {
      dispatch(updateProject(project, newProject))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProject)
