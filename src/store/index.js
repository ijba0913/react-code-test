import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import allReducers from '../reducers'
import history from '../history'

const middleware = routerMiddleware(history)

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(middleware, thunk))
)
