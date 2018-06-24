import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import UsersReducer from './UsersReducer'

export default combineReducers({
  users: UsersReducer,
  router: routerReducer
})
