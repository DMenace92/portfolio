import { combineReducers } from 'redux'
import EmailReducers from './EmailReducers'
import PageCountReducers from './PageCountReducers'
import ProjectReducers from './ProjectReducers'
import LoginReducers from './LoginReducers'
const rootReducers = combineReducers({
  email: EmailReducers,
  currentPage: PageCountReducers,
  pro: ProjectReducers,
  log: LoginReducers,
})

export default rootReducers
