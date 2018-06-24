import { connect } from 'react-redux'

import { getListOfUsers } from '../actions/UserActions'

import UserListView from '../components/UserListView'

const mapStateToProps = state => ({
  pages: state.users.pages,
  success: state.users.success,
  loading: state.users.loading,
  error: state.users.error,
})

const mapDispatchToProps = dispatch => ({
  getListOfUsers: page => dispatch(getListOfUsers(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListView)
