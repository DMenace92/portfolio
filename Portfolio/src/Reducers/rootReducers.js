import { combineReducers } from 'redux'
import EmailReducers from './EmailReducers'
import PageCountReducers from './PageCountReducers'
import Projectreducers from './ProjectReducers'
import LoginReducers from './LoginReducers'
const rootReducers = combineReducers({
  email: EmailReducers,
  currentPage: PageCountReducers,
  pro: Projectreducers,
  log: LoginReducers,
})

export default rootReducers
