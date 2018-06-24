import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

import store from './store'
import history from './history'

import UserListView from './containers/UserListViewContainer'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <Router history={history} >
            <Route path='/users' component={UserListView} />
          </Router>
        </Provider>
      </AppContainer>
    )
  }
}
