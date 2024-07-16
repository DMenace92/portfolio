import { connect } from 'react-redux'
import { createProject, createImage } from '../Actions/ProjectAction'
import ProjectCreate from '../Components/Admin/ProjectUtils/ProjectCreation'

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
    createImage: (pro) => {
      dispatch(createImage(pro))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)
